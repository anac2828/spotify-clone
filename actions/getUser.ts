import { createClient } from '@/utils/supabaseCreateClient';

const getUser = async () => {
  const supabase = createClient();
  // check to see if user is signed in
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    return;
  }

  return sessionData;
};

export default getUser;
