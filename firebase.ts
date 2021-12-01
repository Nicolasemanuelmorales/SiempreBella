import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyodpCT54TogtScqZQVUXdBtTWj_UCOxs",
  authDomain: "siempre-bella-f5a6a.firebaseapp.com",
  projectId: "siempre-bella-f5a6a",
  storageBucket: "siempre-bella-f5a6a.appspot.com",
  messagingSenderId: "1076176724231",
  appId: "1:1076176724231:web:e524a4c8d91e12d1bee5a2",
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);
export default auth;
