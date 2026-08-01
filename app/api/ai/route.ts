// app/api/ai/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { generateAIResponse, AIRequest } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body: AIRequest = await request.json();

    if (!body.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await generateAIResponse(body);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

