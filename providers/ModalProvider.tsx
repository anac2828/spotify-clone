'use client';

import { useEffect, useState } from 'react';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //   This will load the "modal" on the front end
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
