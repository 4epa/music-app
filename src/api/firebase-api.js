import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  FieldValue,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq9WGfqa-waBQH_uiVis4Ly7Su0aKb3Os",
  authDomain: "mp3-storage-3d7ef.firebaseapp.com",
  projectId: "mp3-storage-3d7ef",
  storageBucket: "mp3-storage-3d7ef.appspot.com",
  messagingSenderId: "734583800534",
  appId: "1:734583800534:web:8af30bcc2d313a5704ff77",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage();

const authorization = {
  registration: (name, email, password, setError) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        updateProfile(user, {
          displayName: name,
        });
      })
      .then(() => {
        console.log("user create");
      })
      .catch((error) => {
        setError(error.message);
      });
  },
  login: (email, password, setError) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("sign up success");
      })
      .catch((error) => {
        setError(error.message);
      });
  },
  signOutOfProfile: () => {
    signOut(auth)
      .then(() => {
        console.log("sign out success");
      })
      .catch((error) => {
        console.log("some problems");
      });
  },
};

const interactionWithDatabase = {
  likeAudio: (audioId, userId) => {
    const audioRef = doc(db, "audioFiles", `audio${audioId}`);

    updateDoc(audioRef, {
      liked: arrayUnion(userId),
    }).then(console.log("audio liked success"));
  },
  removeFromFavorites: (audioId, userId) => {
    const audioRef = doc(db, "audioFiles", `audio${audioId}`);

    updateDoc(audioRef, {
      liked: arrayRemove(userId),
    }).then(console.log("audio delete success"));
  },

  
  followArtist: (artistId, userId, followed) => {
    const artistRef = doc(db, "artists", `artist${artistId}`);

    if (!followed) {
      updateDoc(artistRef, {
        followers: arrayUnion(userId),
      }).then(console.log("follow success"));
    } else {
      updateDoc(artistRef, {
        followers: arrayRemove(userId),
      }).then(console.log("unfollow success"));
    }
  }
};

export { authorization, storage, interactionWithDatabase };
