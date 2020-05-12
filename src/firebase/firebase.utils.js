import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkELqC86zG0XXg_DNE6JmEY2ADS_JOpEk",
  authDomain: "onlinestoredb-8563e.firebaseapp.com",
  databaseURL: "https://onlinestoredb-8563e.firebaseio.com",
  projectId: "onlinestoredb-8563e",
  storageBucket: "onlinestoredb-8563e.appspot.com",
  messagingSenderId: "276585108297",
  appId: "1:276585108297:web:892f1a996a0b2d35a54098",
  measurementId: "G-HVQBMYV8R0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
