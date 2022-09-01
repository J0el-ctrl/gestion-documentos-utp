import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDiTIBrM8Gj0hLCjwY4T66kq_IuX8jfjnE",
    authDomain: "sistemagestiondocumentos.firebaseapp.com",
    projectId: "sistemagestiondocumentos",
    storageBucket: "sistemagestiondocumentos.appspot.com",
    messagingSenderId: "368514137521",
    appId: "1:368514137521:web:2dfab1820f19d6ad681190"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   const db=firebase.firestore();
   const auth=firebase.auth();
  const functions=firebase.functions()
  const storage=firebase.storage()
   export {db,auth,firebase,functions,storage}

   //testeando subidas nuevas
   //git pages
   //testeando clonacion ignore