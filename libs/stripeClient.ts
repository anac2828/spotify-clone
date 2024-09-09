import { loadStripe, Stripe } from '@stripe/stripe-js';

console.log('PUB KEY', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY ?? '');
  }
  console.log('STRIPE PROMISE', stripePromise);
  return stripePromise;
};
