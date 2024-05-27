import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyACUsC6COXXY_bkrR5okYN9VsDGU0LeB1c",
  authDomain: "nextflix-clone-ca833.firebaseapp.com",
  projectId: "nextflix-clone-ca833",
  storageBucket: "nextflix-clone-ca833.appspot.com",
  messagingSenderId: "881998076302",
  appId: "1:881998076302:web:6d914eaaf12cf98bc12cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        })
        toast.success("Account Created Successfully")
    } catch (error) {
        // console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success("Logged In Successfully")
  } catch (error) {
      // console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logout = () => {
  signOut(auth)
  toast.success("Logout Successfully")
}


export {auth, db, signup, login, logout}