import { NextResponse } from "next/server";

// Quote requests from the home page form.
// TODO: forward to the CRM / sales inbox. Until then this validates the request and
// issues a reference so the form flow works end to end.

type QuoteRequest = {
  from?: unknown;
  to?: unknown;
  month?: unknown;
  size?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
};

const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: QuoteRequest;
  try {
    body = (await req.json()) as QuoteRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = {
    from: str(body.from),
    to: str(body.to),
    month: str(body.month, 40),
    size: str(body.size, 40),
    name: str(body.name, 120),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
  };

  const problems: string[] = [];
  if (!data.from) problems.push("from");
  if (!data.to) problems.push("to");
  if (!data.name) problems.push("name");
  if (!data.email && !data.phone) problems.push("contact");
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) problems.push("email");
  if (problems.length) {
    return NextResponse.json({ error: "Missing or invalid fields.", fields: problems }, { status: 422 });
  }

  const stamp = new Date();
  const reference = `UR-${stamp.getFullYear().toString().slice(2)}${String(stamp.getMonth() + 1).padStart(2, "0")}-${Math.random()
    .toString(36)
    .slice(2, 7)
    .toUpperCase()}`;

  console.info("[quote] received", { reference, ...data });

  return NextResponse.json({ reference }, { status: 201 });
}
