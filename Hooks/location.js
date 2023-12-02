import { useEffect, useState } from 'react';

const useLocationData = () => {
    const [locationData, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://freeipapi.com/api/json');

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result.countryName);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function, in case the component unmounts before the fetch completes
        return () => {
            // You may want to add cleanup logic here if needed
        };
    }, []);

    return { locationData, error, loading };
};

export default useLocationData;
