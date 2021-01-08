import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyB05PnZoL_VDXC_lBs-ZmccSwg1zi8UriM",
    authDomain: "login-24057.firebaseapp.com",
    projectId: "login-24057",
    storageBucket: "login-24057.appspot.com",
    messagingSenderId: "430468136017",
    appId: "1:430468136017:web:4d59f121e83833faa74c70"
  };
 const fire=firebase.initializeApp(firebaseConfig);
 export default fire