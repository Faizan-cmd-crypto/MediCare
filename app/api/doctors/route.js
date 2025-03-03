// app/api/doctors/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb'; // Adjust path if needed
import Doctor from '@/models/Doctor'; // Adjust path if needed

export async function GET() {
  try {
    await dbConnect();
    const doctors = await Doctor.find({});
    return NextResponse.json({ success: true, data: doctors });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}