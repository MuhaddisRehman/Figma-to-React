import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {useState} from 'react'
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
    apiKey: "AIzaSyCxFQTEkskxFpbsDRnRIONQRofA_9N0aRw",
    authDomain: "staff-hound.firebaseapp.com",
    projectId: "staff-hound",
    storageBucket: "staff-hound.appspot.com",
    messagingSenderId: "959134838966",
    appId: "1:959134838966:web:604ef46d9e677142633617",
    measurementId: "G-4HB5LWR9MT"
};

// Initialize Firebase
function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        }else{
            console.log("Permission not granted.");
    }
});
}
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
getToken(messaging, {vapidKey: "BDnt3YMeBBs4rx9rkk8m8vqWYjYYCAKGvTBGkaB37SzlW68Rs_O5R8JM3DHQ8Ef9KGnRout_Q1Wr2mOJGCwJxW0"})

.then((currentToken)=>{
    if(currentToken){
        console.log("Current Token: ", currentToken)
    }else{
        console.log("Can't get token.")
    }
})
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.

const responseMessage =()=>{ 
    const [response, setResponse] = useState();
    onMessage(messaging, (payload) => {
    console.log('Message received. 13', payload);
    setResponse(payload)
  // ...
})
    return(
        
        response
        
    )
    };
    messaging.onBackgroundMessage = (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
};
requestPermission();
export default responseMessage
