# Tandora - Modern E-commerce Website

A modern, responsive e-commerce website built with Next.js 14, React 18, TypeScript, Tailwind CSS, and ShadCN UI.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Product Catalog**: Browse products with filtering by category
- **Shopping Cart**: Add/remove items with quantity management
- **Wishlist**: Save favorite products for later
- **Product Details**: Detailed product pages with AI recommendations
- **Checkout Process**: Complete checkout flow with form validation
- **State Management**: Persistent cart and wishlist using Zustand
- **Animations**: Smooth page transitions and interactions with Framer Motion
- **API Routes**: RESTful API for products and AI recommendations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **State Management**: Zustand with persistence
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
tandora/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Main layout
│   │   ├── page.tsx           # Home page
│   │   ├── products/
│   │   │   ├── page.tsx       # Product listing
│   │   │   └── [id]/page.tsx  # Product detail
│   │   ├── cart/page.tsx      # Shopping cart
│   │   ├── checkout/page.tsx  # Checkout process
│   │   ├── wishlist/page.tsx  # Wishlist
│   │   └── api/
│   │       ├── products/route.ts # Products API
│   │       └── ai/route.ts       # AI recommendations API
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── ProductFilter.tsx  # Category filter
│   │   ├── CartItem.tsx       # Cart item component
│   │   └── ui/                # ShadCN UI components
│   ├── store/
│   │   ├── cartStore.ts       # Shopping cart state
│   │   └── wishlistStore.ts   # Wishlist state
│   ├── data/
│   │   └── products.json      # Sample product data
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── ai.ts              # AI recommendation logic
│   └── styles/
│       └── globals.css        # Global styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tandora
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Featured products showcase
- Company features and benefits

### Products Page (`/products`)
- Complete product catalog
- Category filtering
- Responsive grid layout

### Product Detail Page (`/products/[id]`)
- Detailed product information
- Add to cart and wishlist functionality
- AI-powered product recommendations

### Shopping Cart (`/cart`)
- Cart items with quantity controls
- Order summary with pricing breakdown
- Proceed to checkout

### Checkout (`/checkout`)
- Customer information form
- Shipping address
- Payment details (mock)
- Order confirmation

### Wishlist (`/wishlist`)
- Saved products for later
- Easy add to cart functionality

## 🔧 API Endpoints

### GET `/api/products`
Returns all available products from the JSON database.

### GET `/api/ai`
Returns AI-powered product recommendations.

### POST `/api/ai`
Returns personalized recommendations based on current product context.

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Custom color palette
- Responsive design patterns
- Dark mode support (configured)
- ShadCN UI component system

## 🔄 State Management

### Cart Store (`useCartStore`)
- Add/remove items
- Update quantities
- Calculate totals
- Persistent storage

### Wishlist Store (`useWishlistStore`)
- Add/remove favorites
- Check wishlist status
- Persistent storage

## 🎭 Animations

Framer Motion is used for:
- Page transitions
- Product card hover effects
- Loading states
- Smooth interactions

## 📦 Components

### Core Components
- `Navbar`: Navigation with cart/wishlist counters
- `Footer`: Simple footer with branding
- `ProductCard`: Reusable product display
- `ProductFilter`: Category filtering
- `CartItem`: Shopping cart item management

### UI Components (ShadCN)
- Button, Card, Input, Label, Badge
- Fully customizable and accessible
- Consistent design system

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

Build the project:
```bash
npm run build
```

## 🔮 Future Enhancements

- User authentication and accounts
- Real payment processing integration
- Product search functionality
- Product reviews and ratings
- Inventory management
- Order history and tracking
- Email notifications
- Social media integration
- SEO optimization
- Performance monitoring

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
