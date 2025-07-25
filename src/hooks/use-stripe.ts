import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { products } from '@/stripe-config';

export function useStripe() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async (productId: keyof typeof products) => {
    if (!user) {
      throw new Error('User must be authenticated to checkout');
    }

    const product = products[productId];
    if (!product) {
      throw new Error('Invalid product');
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          success_url: `${window.location.origin}/payment/success`,
          cancel_url: `${window.location.origin}/payment/failed`,
          mode: product.mode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (!url) {
        throw new Error('No checkout URL received');
      }

      window.location.href = url;
    } finally {
      setLoading(false);
    }
  };

  return {
    createCheckoutSession,
    loading,
  };
}