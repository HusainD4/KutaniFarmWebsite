import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrc8_nPdvVoJg99Fsi80NZLnt8LiBN3EI",
  authDomain: "kutanifarm.firebaseapp.com",
  projectId: "kutanifarm",
  storageBucket: "kutanifarm.firebasestorage.app",
  messagingSenderId: "1063275158126",
  appId: "1:1063275158126:web:8af2bc74da9db5c8e3a47f",
  measurementId: "G-Z3TGPQJW2V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
