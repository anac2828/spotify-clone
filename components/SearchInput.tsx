'use client';
import qs from 'query-string';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Input from './Input';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  //   The url will only be assignedthe serch query after 500ms. The value comes from the input field
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = { title: debounceValue };
    const url = qs.stringifyUrl({ url: '/search', query });

    router.push(url);
  }, [debounceValue, router]);

  return (
    <div>
      <Input
        placeholder='What do you want to listen to'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
