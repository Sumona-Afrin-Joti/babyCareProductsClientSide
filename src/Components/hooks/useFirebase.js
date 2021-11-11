import authInitialization from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


authInitialization()
const useFirebase = () => {

  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {

        const user = {
          email, displayName: name
        }
        setUser(user);
        setError('')
        alert('registerd successfully');

        //updating profile
        profileUpdate(name);
        // calling saveUserToDb
        saveUserToDb(email, name, 'POST');

        history.push('/')

      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false))

  }
  console.log(user?.email)

  const profileUpdate = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {

      })
      .catch(error => {
        setError(error.message);

      })
  }


  const saveUserToDb = (email, displayName, method) => {
    const user = { email, displayName };
    console.log(user)

    fetch('https://floating-river-34453.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }



  const loginUser = (email, password, location, history) => {
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // const user = {
        //   email, displayName: name
        // }
        setError('');
        alert('loged in successfully')
        const destination = location?.state?.from || '/';
        history.push(destination);

      })
      .catch((error) => {
        setError(error.message);

      })
      .finally(() => setIsLoading(false))

  }


  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }

      setIsLoading(false);

    });

    return () => unsubscribe;

  }, [auth]);



  const logOut = () => {
    setIsLoading(true)

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setError(error.message);
    })
      .finally(() => setIsLoading(false))

  };

  useEffect(() => {
    fetch(`https://floating-river-34453.herokuapp.com/users?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if (data?.role) {

          setIsAdmin(true);
        }
        console.log('user data', data)

      })
      .catch(error => {

      })
  }, [user?.email]);
  console.log(isAdmin)

  return {
    registerUser,
    error,
    setError,
    loginUser,
    user,
    logOut,
    isLoading,
    isAdmin
  }

}


export default useFirebase;