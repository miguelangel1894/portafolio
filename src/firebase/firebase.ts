
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

/* const firebaseConfig = {
  apiKey: "AIzaSyA3HHPu8tepR32vPPN9MeTB-pHWVEjdNaE",
  authDomain: "remo-584cc.firebaseapp.com",
  databaseURL: "https://remo-584cc.firebaseio.com",
  projectId: "remo-584cc",
  storageBucket: "remo-584cc.appspot.com",
  messagingSenderId: "15794658087",
  appId: "1:15794658087:web:cd30f756acc93a4adc6702",
  measurementId: "G-1VV34LT0FB"
}; */

      const app = initializeApp(firebaseConfig);
      const database = getFirestore(app);
      const auth = getAuth(app)

    export default database