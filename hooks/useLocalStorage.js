import { useState } from "react";

//This is not my own work. This is copied from https://usehooks.com/useLocalStorage/,
//and recommended from Brian O'Connor on his lesson.
//As you can tell by the console in dev mode, this code is not optimal, as the server
//tries to render before the browser gets loaded. I have tried multiple possible
//solutions and "hacks" to fix it, but I could not get it to work.
//I would love some feedback on how to solve this.
//Otherwise, it works as expected in build.

export default function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      if (typeof window !== "undefined") {
        const item = localStorage.getItem(key);
      }

      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
