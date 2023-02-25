import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
