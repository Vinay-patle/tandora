import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the products.json file
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const products = JSON.parse(fileContents);

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error reading products file:', error);
    return NextResponse.json(
      { error: 'Failed to load products' },
      { status: 500 }
    );
  }
}