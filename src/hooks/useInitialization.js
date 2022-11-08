import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setInitializeApp } from "../redux/slices/appReducer";
import { useEffect } from "react";
import {
  setAuthorizationStatus,
  setProfile,
} from "../redux/slices/authorizationReducer";

export const useInitialization = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthorizationStatus(true));
        dispatch(
          setProfile({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            userId: user.uid,
          })
        );
      } else {
        dispatch(setAuthorizationStatus(false));
        dispatch(setProfile(null));
      }
      dispatch(setInitializeApp(true));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
