import { Song } from '@/types';
import usePlayer from './usePlayer';
import useAuthModal from './useAuthModal';
import useSubscribeModal from './useSubscribeModal';
import { useUser } from './useUser';

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const subscriptionModal = useSubscribeModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) return authModal.onOpen();
    if (!subscription) return subscriptionModal.onOpen();

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
