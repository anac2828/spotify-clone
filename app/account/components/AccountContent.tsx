import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUser } from '@/hooks/useUser';
import useSubscribeModal from '@/hooks/useSubscribeModal';
import { postData } from '@/libs/helpers';
import toast from 'react-hot-toast';

function AccountContent() {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, user } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) router.replace('/');
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: 'api/create-portal-link',
      });

      window.location.assign(url);
    } catch (error) {
      if (error) toast.error((error as Error).message);
    }
    setLoading(false);
  };
  return <div className='mb-7 px-6'>Account Content</div>;
}
