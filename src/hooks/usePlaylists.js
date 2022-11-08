import {
  collection,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPlaylistList } from "../redux/slices/playlistListReducer";

const dataBase = getFirestore();

export const usePlaylists = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    onSnapshot(collection(dataBase, "playlists"), (querySnapshot) => {
      const playlists = [];
      querySnapshot.forEach((doc) => {
        playlists.push(doc.data());
      });
      dispatch(setPlaylistList(playlists));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};