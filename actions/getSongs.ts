import { Song } from '@/types';
import createSupabaseServerClient from '@/utils/supabaseCreateServerClient';

const getSongs = async (): Promise<Song[]> => {
  const supabase = createSupabaseServerClient(true);
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getSongs;
