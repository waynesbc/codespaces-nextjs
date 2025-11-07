import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

// 1. Initialize with the new SDK class and object structure
const genAI = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY!});

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // 2. Specify the model name directly
    const model = 'gemini-2.5-flash'; // Flash is fast and generally recommended for chat

    // 3. Use the correct new syntax: genAI.models.generateContent
    const result = await genAI.models.generateContent({
        model: model,
        contents: prompt
    });
     
    const text = result.text; // The text property is directly on the result

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}