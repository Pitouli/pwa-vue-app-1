import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyDJgStevUhq9js5V6ln2CWJJGxFBkxQBkY",
    authDomain: "debug-and-test-env.firebaseapp.com",
    databaseURL: "https://debug-and-test-env.firebaseio.com",
    projectId: "debug-and-test-env",
    storageBucket: "debug-and-test-env.appspot.com",
    messagingSenderId: "512021815323",
    appId: "1:512021815323:web:58bea294392ab728c098be"
  };
  firebase.initializeApp(config);
  
// Get a Firestore instance
export const firestore = firebase.firestore()

// We enable offline support (with multi tab support)
firebase.firestore().enablePersistence({
    synchronizeTabs: true,
  })
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
      }
    });

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
/*
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
*/

export default {
    firestore,
    // currentUser,
    // usersCollection
  };