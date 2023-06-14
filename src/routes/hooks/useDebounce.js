/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    console.log(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debouncedValue;
}

export default useDebounce; 
