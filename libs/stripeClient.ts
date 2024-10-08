// For client side requests
import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY ?? '');
  }
  console.log('STRIPE PROMISE', stripePromise);
  return stripePromise;
};
