import React from 'react';
import { Button } from './components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleBuyNow = () => {
    const message = `Hi! I'm interested in ordering ${product.name}. Can you help me with pricing and customization options?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919074600471?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {product.description}
        </p>
        <Button
          onClick={handleBuyNow}
          className="w-full transition-all duration-200 active:scale-[0.98]"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;