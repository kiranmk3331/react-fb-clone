import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZSMEyEU76cOSkHMBXKsCApX6xIB-tccY",
  authDomain: "facebook-clone-e2015.firebaseapp.com",
  projectId: "facebook-clone-e2015",
  storageBucket: "facebook-clone-e2015.appspot.com",
  messagingSenderId: "243613579974",
  appId: "1:243613579974:web:9ad09bb85b2301be28b5c7",
  measurementId: "G-8GYX4H0K4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;