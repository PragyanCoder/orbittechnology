import { Button } from '@/components/ui/button';
import { useStripe } from '@/hooks/use-stripe';
import { useAuth } from '@/hooks/use-auth';
import { products } from '@/stripe-config';
import { Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  productId: keyof typeof products;
  className?: string;
}

export function CheckoutButton({ productId, className }: CheckoutButtonProps) {
  const { createCheckoutSession, loading } = useStripe();
  const { user } = useAuth();

  const handleCheckout = async () => {
    try {
      await createCheckoutSession(productId);
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        'Purchase'
      )}
    </Button>
  );
}