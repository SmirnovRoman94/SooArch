import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAGEOrHZ2aAacepuzt5aOHIdoO8UWIkJ-g",
    authDomain: "sooarch-46978.firebaseapp.com",
    databaseURL: "https://sooarch-46978-default-rtdb.firebaseio.com",
    projectId: "sooarch-46978",
    storageBucket: "sooarch-46978.appspot.com",
    messagingSenderId: "141746892339",
    appId: "1:141746892339:web:bdbd7982bb0cf78cbabd46",
    measurementId: "G-9JQMV7T83W"
}
const apps = getApps()
if (!apps.length) {
    var firebaseApp = initializeApp(firebaseConfig)
} else {
     var firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {})
export { db }