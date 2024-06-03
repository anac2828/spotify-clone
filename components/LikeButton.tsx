'use client';

import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LikeButtonProps {
  songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = () => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authMotal = useAuthModal();
  const { user } = useUser();

  const [liked, setLiked] = useState(false);
  return <div>Like button</div>;
};

export default LikeButton;
