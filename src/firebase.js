import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzwDEM8hxBuZ41jp_0bYqhtDwjyvguh3s",
  authDomain: "netflix-a87c6.firebaseapp.com",
  projectId: "netflix-a87c6",
  storageBucket: "netflix-a87c6.appspot.com",
  messagingSenderId: "890535509071",
  appId: "1:890535509071:web:0b0f3c9bf726638f8afe3a",
  measurementId: "G-8MVPRD3MXT",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
