import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, setDebounceValue]);

  return debounceValue;
}

export default useDebounce;
