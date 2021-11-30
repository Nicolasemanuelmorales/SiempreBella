import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyodpCT54TogtScqZQVUXdBtTWj_UCOxs",
  authDomain: "siempre-bella-f5a6a.firebaseapp.com",
  projectId: "siempre-bella-f5a6a",
  storageBucket: "siempre-bella-f5a6a.appspot.com",
  messagingSenderId: "1076176724231",
  appId: "1:1076176724231:web:e524a4c8d91e12d1bee5a2",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default Firebase;
