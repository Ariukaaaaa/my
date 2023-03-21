import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_XvQhsjlgPCs7ZRvTJYjYw5a87A19jj8",
  authDomain: "test-396de.firebaseapp.com",
  projectId: "test-396de",
  storageBucket: "test-396de.appspot.com",
  messagingSenderId: "325195905222",
  appId: "1:325195905222:web:167776584b5534d35cffc7",
  measurementId: "G-WYXYPH4N16"
}
// firebase.initializeApp(config);
let app;
if(firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig)
}else{
  app=firebase.app()
}
const auth=firebase.auth()
export {auth};

// export { firebase };  