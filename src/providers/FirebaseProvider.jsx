import React from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'; 

export const FirebaseContext = React.createContext();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9rON6YEBojoKSb3oGYGH_f258YaOJ7EQ',
  authDomain: 'c12-cyo-firebase.firebaseapp.com',
  projectId: 'c12-cyo-firebase',
  storageBucket: 'c12-cyo-firebase.appspot.com',
  messagingSenderId: '759079492032',
  appId: '1:759079492032:web:07be8b116a3b1a4e199025',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

const FirebaseProvider = (props) => {
  const children = props.children;
  console.log(`FirebaseProvider: children: `, children);
 
  const theValues = { app, auth };

  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
