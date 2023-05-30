importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
// const [payloadMessage, setPayloadMessage] = useState()
const firebaseConfig = {
    apiKey: "AIzaSyDa4Bl1US072IMKaE34555QznaxgZ7wOvQ",
    authDomain: "sufi-travel.firebaseapp.com",
    projectId: "sufi-travel",
    storageBucket: "sufi-travel.appspot.com",
    messagingSenderId: "604315447280",
    appId: "1:604315447280:web:66b106f4b8ae185c9d3735",
    measurementId: "G-1SXF9PWHVM",
    vapidKey: "BCGZW76ecvIx1CewVv8J58r36kUwgyc-i6rRNywtW3PCrc96hm2yS1IsLP61YA1C0IlqDqcL2OpTtpb1ueKeASc"
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

      // ...
      const notificationTitle = payload.notification.body;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.image
        };
    
        self.registration.showNotification(notificationTitle,
            notificationOptions);
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