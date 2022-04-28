import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebaseInit"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";





initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState({
        name: '',
        email: ''
    });
    const navigate = useNavigate();
    const location = useLocation();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const googleLogIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                const destination = location.state.from || '/'
                navigate(destination)
                
                const newUser = {
                    name: user.displayName,
                    email: user.email
                };
                console.log(newUser);
                setLoggedInUser(newUser)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;

            } else {

            }
        });
    }, []);


    const googleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        loggedInUser,
        googleLogIn,
        googleLogOut,
        error
    }

}



export default useFirebase;