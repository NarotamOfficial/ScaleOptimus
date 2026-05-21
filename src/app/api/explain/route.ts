import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyBkbqb2gH-c3mwWhYgWyGw6ud0nUxJwKag';
const genAI = new GoogleGenAI({ apiKey });

export async function POST(req: Request) {
  try {
    const { type, inputs, outputs } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      Perform professional financial telemetry optimization analysis for an executive dashboard environment:
      Calculator Mode Context: ${type}
      Data Inputs Vector: ${JSON.stringify(inputs)}
      Compiled Calculations Matrix: ${JSON.stringify(outputs)}

      Provide a strict executive evaluation outlining the performance meaning of these numbers. Follow immediately with exactly three highly optimized bulleted operational strategy insights.
      Formatting Rules: Absolute cap at 140 words. No chat introductory lines, no pleasantries, pure text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return NextResponse.json({ explanation: response.text() });
  } catch (err: any) {
    return NextResponse.json({ error: 'Asynchronous explanation pipeline timeout.' }, { status: 500 });
  }
}
