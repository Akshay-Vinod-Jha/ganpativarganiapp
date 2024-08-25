import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8WqxRhhIgDt3Xf-31fHyL1AmGyMpVbHw",
  authDomain: "ganpativargani.firebaseapp.com",
  projectId: "ganpativargani",
  storageBucket: "ganpativargani.appspot.com",
  messagingSenderId: "658254075022",
  appId: "1:658254075022:web:76e8743026859c4f1625df",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
