import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// Your web app's Firebase configuration


// Your web app's Firebase configuration

  apiKey: "AIzaSyCwf41YEiBGMTQ1LO4BUM61Ft0DDqil1Uo",
  authDomain: "classtest-58650.firebaseapp.com",
  databaseURL: "https://classtest-58650-default-rtdb.firebaseio.com",
  projectId: "classtest-58650",
  storageBucket: "classtest-58650.appspot.com",
  messagingSenderId: "180518548636",
  appId: "1:180518548636:web:32f20671c1d2c1c45b6959"
};


  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



export default firebase.database();