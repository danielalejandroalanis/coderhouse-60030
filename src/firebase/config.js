import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuHxnmuF2RR4tBY0n-POnoACVtg44GWrU",
  authDomain: "coderhouse-60030.firebaseapp.com",
  projectId: "coderhouse-60030",
  storageBucket: "coderhouse-60030.appspot.com",
  messagingSenderId: "964335960966",
  appId: "1:964335960966:web:c82934c2703eee73f52207"
};

// Inicializamos el servicios de Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
export const db = getFirestore(app);