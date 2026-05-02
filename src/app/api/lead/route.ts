import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OWNER_EMAIL = "cody@accurateautoworksinc.com";
const BCC_EMAIL = "eric@aiprecisionmarketing.ca";
const FROM = "Accurate Autoworks Leads <leads@aiprecisionmarketing.ca>";
const ORG_ID = "3e2b1656-9f5c-4071-8434-e5607ec9a349";

type LeadBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  vehicle?: string;
  preferred_date?: string;
  message?: string;
  page?: string;
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function row(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(value)}</td></tr>`;
}

async function backupToSupabase(body: LeadBody): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const services = body.service ? [body.service] : [];
  const payload = {
    org_id: ORG_ID,
    business_name: "Accurate Autoworks (Website Lead)",
    contact_name: body.name || null,
    email: body.email || null,
    phone: body.phone || null,
    source: "Website Form",
    inquiry_type: "Quote Request",
    form_data: body,
    services_interested: services,
    lead_score: "Warm",
    pipeline_stage: "New",
    notes: body.message || null,
  };

  await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  }).catch(() => undefined);
}

export async function POST(req: Request) {
  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email backend not configured" }, { status: 500 });
  }

  const rows = [
    row("Name", body.name),
    row("Phone", body.phone),
    row("Email", body.email),
    row("Service", body.service),
    row("Vehicle", body.vehicle),
    row("Preferred Date", body.preferred_date),
    row("Message", body.message),
    row("Page", body.page),
  ].join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0b0b0b;color:#fff;padding:24px;text-align:center;">
        <h1 style="margin:0;font-size:22px;color:#22d65f;">New Quote Request</h1>
        <p style="margin:8px 0 0 0;color:#bbb;font-size:14px;">accurateautoworks.ca</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">${rows}</table>
      <p style="margin-top:24px;color:#666;font-size:13px;">Reply directly to this email to respond${body.email ? ` to ${escapeHtml(body.email)}` : ""}.</p>
    </div>
  `;

  const plain = Object.entries(body)
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const payload: Record<string, unknown> = {
    from: FROM,
    to: [OWNER_EMAIL],
    bcc: [BCC_EMAIL],
    subject: `New quote request from ${body.name}${body.service ? ` — ${body.service}` : ""}`,
    html,
    text: plain,
  };
  if (body.email) payload.reply_to = body.email;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const detail = await res.text();
      await backupToSupabase(body);
      return NextResponse.json({ error: "Email send failed", detail }, { status: 502 });
    }
    await backupToSupabase(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    await backupToSupabase(body);
    return NextResponse.json({ error: "Email send failed", detail: String(err) }, { status: 502 });
  }
}
