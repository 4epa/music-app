import {
  collection,
  onSnapshot,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTrackList } from "../redux/slices/playlistReducer";

const dataBase = getFirestore();

export const useTrackList = (parameter, value) => {
  
  const dispatch = useDispatch();

  const requestMethods = (parameter) => {
    if (parameter === "liked") {
      return "array-contains"
    } else {
      return "=="
    }
  }

  useEffect(() => {
    const q = query(
      collection(dataBase, "audioFiles"),
      where(parameter, requestMethods(parameter), value)
    );
    onSnapshot(q, (querySnapshot) => {
      const trackList = [];
      querySnapshot.forEach((doc) => {
        trackList.push(doc.data());
      });
      dispatch(setTrackList(trackList));
    });
    return () => {
      dispatch(setTrackList(null));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parameter]);
};
