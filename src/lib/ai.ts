export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
}

export function getAIRecommendations(currentProduct?: Product): Product[] {
  // Mock AI recommendations - in a real app, this would call an AI service
  const mockRecommendations: Product[] = [
    {
      id: "ai-1",
      name: "Smart Wireless Earbuds",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      category: "Electronics",
      description: "Premium wireless earbuds with noise cancellation",
      rating: 4.5,
      inStock: true
    },
    {
      id: "ai-2",
      name: "Minimalist Watch",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
      category: "Accessories",
      description: "Elegant minimalist watch for everyday wear",
      rating: 4.3,
      inStock: true
    },
    {
      id: "ai-3",
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Clothing",
      description: "Comfortable organic cotton t-shirt",
      rating: 4.7,
      inStock: true
    }
  ];

  // Simple logic to filter out the current product if provided
  if (currentProduct) {
    return mockRecommendations.filter(product => product.id !== currentProduct.id);
  }

  return mockRecommendations;
}