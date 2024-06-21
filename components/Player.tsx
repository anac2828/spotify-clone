'use client';
import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';

const Player = () => {
  const player = usePlayer();
  //   gets the song from the song table
  const { song } = useGetSongById(player.activeId);
  //   gets the mp3 file from with the song_path from song
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div className='fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
      <PlayerContent />
    </div>
  );
};

export default Player;
