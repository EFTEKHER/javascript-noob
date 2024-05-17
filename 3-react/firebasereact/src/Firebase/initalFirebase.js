import firebaseConfig from "./firbase.config";
import {initializeApp} from "firebase/app";


const initialFirebase=()=>{
    initializeApp(firebaseConfig);

}

export default initialFirebase;
