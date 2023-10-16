import React, { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
    return function WithAuth(props) {
        const [loggedIn, setLoggedIn] = useState(false);

        useEffect(() => {
            const localStorageAuthToken = localStorage.getItem('authToken');
            const sessionStorageAuthToken = sessionStorage.getItem('authToken');

            if (localStorageAuthToken || sessionStorageAuthToken) {
                setLoggedIn(true);
            }
        }, []);

        return <WrappedComponent loggedIn={loggedIn} {...props} />;
    };
};

export default withAuth;
