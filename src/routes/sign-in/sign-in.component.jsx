import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function processRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    processRedirect();
  }, []);

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const signInGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    //const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={signInGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInGoogleUserRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
