import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAVo71jiPD6aNHAoPETqxNrOrwZ055OhnY",
    authDomain: "bibliotecaeletronica-f2478.firebaseapp.com",
    projectId: "bibliotecaeletronica-f2478",
    storageBucket: "bibliotecaeletronica-f2478.appspot.com",
    messagingSenderId: "859279830956",
    appId: "1:859279830956:web:d6e939c6a383dd92ea1409"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();