import {
  collection,
  onSnapshot,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setArtist } from "../redux/slices/artistReducer";

const dataBase = getFirestore();

export const useArtist = (artistId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(
      collection(dataBase, "artists"),
      where("artistId", "==", artistId)
    );
    onSnapshot(q, (querySnapshot) => {
      
      querySnapshot.forEach((doc) => {
        const artist = doc.data();
        dispatch(setArtist(artist));
      });
    });

    return () => dispatch(setArtist(null))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
