 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { collection, getFirestore, addDoc,updateDoc,getDocs,getDoc,onSnapshot,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyANvFthibnL2mqQe_IDdA8Fis35Zu4kFs8",
   authDomain: "crud-js-2.firebaseapp.com",
   projectId: "crud-js-2",
   storageBucket: "crud-js-2.appspot.com",
   messagingSenderId: "138437051696",
   appId: "1:138437051696:web:5c4ae213227f3d06c974f5",
    
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getFirestore()
//guarda los datos en firestore
 export const saveTask = (title,description)=>
        addDoc(collection(db,'tasks'),{title, description})
 



export const getTasks = ()=> getDocs(collection(db,'tasks'))

export const onGetTasks = (callback)=> onSnapshot(collection(db,'tasks'),callback)

export const deleteTask = id => deleteDoc(doc(db,'tasks', id))

export const getTask = id => getDoc(doc(db,'tasks',id))

export const updateTask = (id,newFields)=>updateDoc(doc(db,'tasks',id),newFields)