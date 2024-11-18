import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjVoZTwlaMtvorN0FDEk_N_6rFnwqZpSg",
    authDomain: "compra-pokemon-82047.firebaseapp.com",
    projectId: "compra-pokemon-82047",
    storageBucket: "compra-pokemon-82047.firebasestorage.app",
    messagingSenderId: "85013745923",
    appId: "1:85013745923:web:427b306affee2953d85936",
    measurementId: "G-36Z9DPTCD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect with Firebase database
const db = getFirestore(app);

export default class DBConnection {
    constructor() {
        this.usersCollection = collection(db, "users"); // Users collection connection
    }

    // Add rows to users collection
    async addFile(data) {
        try {
            const docRef = await addDoc(this.usersCollection, data);
            console.log("Documento escrito con ID: ", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Error añadiendo registro: ", e)
        }
    }

    // Read all rows from users collection
    async readAll() {
        try {
            const querySnapshot = await getDocs(this.usersCollection);
            const dataList = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("Documentos:", dataList);
            return dataList;
        } catch (e) {
            console.error("Error obteniendo documentos: ", e)
        }
    }

    // Update row from users collection with ID
    async update(id, data) {
        try {
          const docRef = doc(this.usersCollection, id);
          await updateDoc(docRef, data);
          console.log("Documento actualizado con ID: ", id);
        } catch (e) {
          console.error("Error actualizando documento: ", e);
        }
    }

    async delete(id) {
        try {
            const docRef = doc(this.usersCollection, id);
            await deleteDoc(docRef);
            console.log("Se borró")
        } catch (e) {
            console.error("No se borró")
        }   
    }

    async getFile(id) {
        try {
            const docRef = doc(this.usersCollection, id)
            const docSnap = await getDoc(docRef)
            return docSnap.data()
        } catch (e) {
            console.error("No se obtuvo la información: " + e)
        }
    }
}