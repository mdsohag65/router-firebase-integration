import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';



const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3>Hey!! Who's there?</h3>
            <h5>This is: {user ? user.displayName : 'I am Ghost'}</h5>
        </div>
    );
};

export default Products;