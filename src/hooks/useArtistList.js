import {
  collection,
  onSnapshot,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setArtistList } from "../redux/slices/artistListReducer";

const dataBase = getFirestore();

export const useArtistList = (parameter, value) => {
  const dispatch = useDispatch();

  const checkParam = () => {
    return parameter
      ? query(
          collection(dataBase, "artists"),
          where(parameter, "array-contains", value)
        )
      : collection(dataBase, "artists");
  };

  const q = checkParam();

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const artistList = [];
      querySnapshot.forEach((doc) => {
        artistList.push(doc.data());
      });
      dispatch(setArtistList(artistList));
    });
    return () => {
      setArtistList(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
