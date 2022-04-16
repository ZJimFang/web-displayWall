import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSBnLceok3Fk4pGSB3KpZ-IrVA4R6Mt24",
  authDomain: "web-show-pragmatic.firebaseapp.com",
  databaseURL: "https://web-show-pragmatic-default-rtdb.firebaseio.com",
  projectId: "web-show-pragmatic",
  storageBucket: "web-show-pragmatic.appspot.com",
  messagingSenderId: "850255947634",
  appId: "1:850255947634:web:9c1d75109b7f4bdfd6dfeb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
