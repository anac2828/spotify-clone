import { Song } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({ cookies });

  // check to see if user is signed in
  const { data: sessionData } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('liked_songs')
    .select('*, songs(*)')
    .eq('user_id', sessionData?.user?.id)
    .order('created_at', { ascending: false });

  if (error || !data) {
    console.log(error.message);
    return [];
  }

  //   The relation comes from the .select(*, song(*))
  return data.map((relation) => ({ ...relation.songs }));
};

export default getLikedSongs;
