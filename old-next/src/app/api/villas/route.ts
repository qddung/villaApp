import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Villa } from "@/lib/types";

const DATA_PATH = path.join(process.cwd(), "src/data/villas.json");

function readVillas(): Villa[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeVillas(villas: Villa[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(villas, null, 2), "utf-8");
}

export async function GET() {
  const villas = readVillas();
  return NextResponse.json(villas);
}

export async function POST(request: NextRequest) {
  const villa: Villa = await request.json();
  const villas = readVillas();

  const existing = villas.findIndex((v) => v.id === villa.id);
  if (existing >= 0) {
    villas[existing] = villa;
  } else {
    villas.push(villa);
  }

  writeVillas(villas);
  return NextResponse.json({ success: true, villa });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  let villas = readVillas();
  villas = villas.filter((v) => v.id !== id);
  writeVillas(villas);
  return NextResponse.json({ success: true });
}
