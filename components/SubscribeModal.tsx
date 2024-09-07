'use client';
import Modal from './Modal';

function SubscribeModal() {
  const content = <div className='text-center'>No products available.</div>;
  return (
    <Modal
      title='Only for premium users'
      description='Listen to music with Spotify premimum'
      isOpen
      onChange={() => {}}
    >
      Subscriptions
    </Modal>
  );
}

export default SubscribeModal;
