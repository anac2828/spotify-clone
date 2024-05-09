'use client';

import { useEffect, useState } from 'react';
import AuthModal from '@/components/AuthModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //   This will load the "modal" on the front end
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <AuthModal />;
};

export default ModalProvider;
