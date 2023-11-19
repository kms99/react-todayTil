import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5wpHqnTo5xlbGR_ixz4Vocf3IwD6ghU8",
  authDomain: "toyproject-745ca.firebaseapp.com",
  projectId: "toyproject-745ca",
  storageBucket: "toyproject-745ca.appspot.com",
  messagingSenderId: "919193943064",
  appId: "1:919193943064:web:41046e77feac590462176d",
  measurementId: "G-28WEHHLPTJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const GET_FIREBASE = async () => {
  const querySnapshot = await getDocs(collection(db, "TIlList"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

export const ADD_FIREBASE = async (til) => {
  await setDoc(doc(db, "TilList", String(til.id)), {
    ...til,
  });
};

export const EDIT_FIREBASE = async (til) => {
  await setDoc(doc(db, "TilList", String(til.id)), {
    ...til,
  });
};

export const DELETE_FIREBASE = async (tilId) => {
  await deleteDoc(doc(db, "TilList", String(tilId)));
};
