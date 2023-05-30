const { useState } = require("react");

importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');
// const [payloadMessage, setPayloadMessage] = useState()
const firebaseConfig = {
    apiKey: "AIzaSyCxFQTEkskxFpbsDRnRIONQRofA_9N0aRw",
    authDomain: "staff-hound.firebaseapp.com",
    projectId: "staff-hound",
    storageBucket: "staff-hound.appspot.com",
    messagingSenderId: "959134838966",
    appId: "1:959134838966:web:604ef46d9e677142633617",
    measurementId: "G-4HB5LWR9MT"
};
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging();
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
    });
    }
    messaging.onMessage((payload) => {
        console.log('Message received 12. ', payload);
        // setPayloadMessage(payload)
        // console.log("🚀 ~ file: firebase-messaging-sw.js:4 ~ payloadMessage:", payloadMessage)
        const notificationTitle = payload.notification.body;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.image
        };
    
        self.registration.showNotification(notificationTitle,
            notificationOptions);
      // ...
    });
    messaging.onBackgroundMessage= (payload) => {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        const notificationTitle = payload.notification.body;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.image
        };
    
        self.registration.showNotification(notificationTitle,
            notificationOptions);
    };