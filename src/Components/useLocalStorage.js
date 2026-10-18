import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // 1. Load: runs only on the very first draw
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // 2. Save: runs whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('Could not save', error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;