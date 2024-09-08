'use client';
import React, { useState } from 'react';
import { Price, ProductWithPrice } from '@/types';
import { useUser } from '@/hooks/useUser';
import Modal from './Modal';
import Button from './Button';

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);
  return priceString;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  const { user, isLoading, subscription } = useUser();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {};

  let content = <div className='text-center'>No products available.</div>;

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return <div key={product.id}>No prices available</div>;
          }

          return product.prices.map((price) => (
            <Button
              key={price.id}
              onClick={() => handleCheckout(price)}
              disabled={isLoading || price.id === priceIdLoading}
              className='mb-4'
            >
              {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
            </Button>
          ));
        })}
      </div>
    );
  }
  return (
    <Modal
      title='Only for premium users'
      description='Listen to music with Spotify premimum'
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
