import { NextResponse } from 'next/server';
import { getAIRecommendations } from '@/lib/ai';

export async function GET() {
  try {
    // Get AI-powered recommendations
    const recommendations = getAIRecommendations();

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error('Error generating AI recommendations:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { currentProduct } = body;

    // Get AI-powered recommendations based on current product
    const recommendations = getAIRecommendations(currentProduct);

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error('Error generating AI recommendations:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}