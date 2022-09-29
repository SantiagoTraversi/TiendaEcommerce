// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqlqjjjdeaGD6qGyNpjEkWD1OpHMmzY3k",
  authDomain: "tienda-ecommerce-d7a65.firebaseapp.com",
  projectId: "tienda-ecommerce-d7a65",
  storageBucket: "tienda-ecommerce-d7a65.appspot.com",
  messagingSenderId: "182236352071",
  appId: "1:182236352071:web:ecff2ad3906231740f2b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app)

export default bd