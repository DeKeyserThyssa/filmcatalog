import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import {
  getAuth,
  Auth,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.ASTRO_apiKey,
  authDomain: import.meta.env.ASTRO_authDomain,
  projectId: import.meta.env.ASTRO_projectId,
  storageBucket: import.meta.env.ASTRO_storageBucket,
  messagingSenderId: import.meta.env.ASTRO_messagingSenderId,
  appId: import.meta.env.ASTRO_appId,
}

const app: FirebaseApp = initializeApp(firebaseConfig)

const auth: Auth = getAuth()
setPersistence(auth, browserLocalPersistence)

export default () => {
  return {
    app,
    auth,
  }
}
