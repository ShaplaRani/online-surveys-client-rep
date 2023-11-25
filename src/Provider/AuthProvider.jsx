

import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";




export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) ;
     const googleProvider = new GoogleAuthProvider();
     const axiosPublic = useAxiosPublic();
    // //const githubProvider = new GithubAuthProvider();
    

    //register
     const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //login with email and password
     const signInUser =(email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     //login with google
     const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
   
    const logout =() => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if (currentUser) {
                // get token and store client
                 const userInfo = { email: currentUser?.email };
                 axiosPublic.post('/jwt', userInfo)
                     .then(res => {
                         if (res.data.token) {
                             localStorage.setItem('access-token', res.data.token);
                             setLoading(false);
                         }
                     })
             }
             else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
           
            
        })
        return () =>{
            unSubscribe()
        }
     },[ axiosPublic])

     const authInfo ={user, loading,createUser,signInUser,signInWithGoogle, logout}
    

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
            
        </div>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}


export default AuthProvider;