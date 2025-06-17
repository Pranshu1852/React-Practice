import { useEffect, useState } from "react";

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(false);

    function handleOnline() {
        setIsOnline(true);
    }

    function handleOffline() {
        setIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    },[])

    return isOnline;
}

export default useIsOnline;