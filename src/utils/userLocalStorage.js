import { useEffect, useState } from "react";

function useLocalState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);

        return localValue === null
         ? defaultValue : JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export { useLocalState };