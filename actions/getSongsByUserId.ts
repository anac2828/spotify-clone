import { Song } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({ cookies });

  // check to see if user is signed in
  const { data: sessionData, error: sessionError } = await supabase.auth.getUser();

  if (sessionError) {
    return [];
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', sessionData.user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByUserId;
