import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/TostNotify";
// https://firebase.google.com/docs/auth/web/start

export const AuthContex = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userChanged();
  }, []);
  
//------------------------------------------------------*/

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      //? kullanıcı profilini güncellemek için kullanılan firebase metodu, login logout da userChanged sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor, register dan girilen firt ve lastname burada currentUser A ekleniyor
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      toastSuccessNotify("Register successful");
      navigate("/");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

//------------------------------------------------------*/
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Login successful");
      navigate("/");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

//------------------------------------------- */

  //? firebase nin loginden çıkış metodu
  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("LogOut successful");
  };
  const signUpGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccessNotify("With google login successful");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });

  };
//------------------------------------------- */

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder
  const userChanged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

  // password reset metodu

  const forgotPassword=(email)=>{

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastSuccessNotify("Check your email!");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
   }
  return (
    <AuthContex.Provider value={{ createUser, signIn, currentUser, logOut,signUpGoogle,forgotPassword }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthContextProvider;
