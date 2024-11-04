import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const config = {
  apiKey: 'AIzaSyCemYseNEzSTot4o11aqfF4cLtFoVdrcB4',
  authDomain: 'bup-27788.firebaseapp.com',
  projectId: 'bup-27788',
  storageBucket: 'bup-27788.firebasestorage.app',
  messagingSenderId: '87409360636',
  appId: '1:87409360636:web:a0f38839c5d69e48a4a179',
  measurementId: 'G-LEG5E1TMTC',
};

// Initialize Firebase only if there are no apps initialized already
export const firebase = !getApps().length ? initializeApp(config) : getApp();

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
