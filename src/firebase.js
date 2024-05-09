import { initializeApp } from 'firebase/app'; 
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBLR7w80djQRvvFtbx7MkeztOImTxhri3I",
  databaseURL: "https://afclip-8d2cb.firebaseapp.com",
  authDomain: "afclip-8d2cb.firebaseapp.com",
  projectId: "afclip-8d2cb",
  storageBucket: "afclip-8d2cb.appspot.com",
  messagingSenderId: "843239499874",
  appId: "1:843239499874:web:582c588604f6a07ef4093b",
  measurementId: "G-ENSC8VVGT3"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
//const db = firebaseApp.firestore();

export default db;
