import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuQ8g1Hf-bkWgXZqm3d7Q3Pl_uXCW4cU0",
    authDomain: "agits-87987.firebaseapp.com",
    databaseURL: "https://agits-87987.firebaseio.com",
    projectId: "agits-87987",
    storageBucket: "agits-87987.appspot.com",
    messagingSenderId: "735912969467"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const provider = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base