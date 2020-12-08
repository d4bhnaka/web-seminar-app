import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyALHHoda7XmZ_Ui9Odq4dQk4omo3xsG9Zg",
  authDomain: "webseminar-20cd6.firebaseapp.com",
  projectId: "webseminar-20cd6",
  storageBucket: "webseminar-20cd6.appspot.com",
  messagingSenderId: "637731147583",
  appId: "1:637731147583:web:af412e7e57646e57aa0d8a",
  measurementId: "G-55TTW6MYDW"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}