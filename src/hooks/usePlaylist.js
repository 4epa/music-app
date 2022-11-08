import {
  collection,
  onSnapshot,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPlaylist } from "../redux/slices/playlistReducer";

const dataBase = getFirestore();

export const usePlaylist = (playlistId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(
      collection(dataBase, "playlists"),
      where("playlistId", "==", playlistId)
    );
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const playlist = doc.data();
        dispatch(setPlaylist(playlist));
      });      
    });
  }, [playlistId]);
};
