import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBVlBeWVA5ePUgNksZgWvAOEV4yWTQzEpM',
     authDomain: 'vue-fire-auth-c7b21.firebaseapp.com',
    projectId: 'vue-fire-auth-c7b21',
    storageBucket: 'vue-fire-auth-c7b21.appspot.com',
    messagingSenderId: '776532642338',
    appId: '1:776532642338:web:5137b0b88c37697aedd87b'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
