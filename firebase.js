
const firebaseConfig = {
    apiKey: "AIzaSyDlToIsK-wV7r5iEU_1CQBUY62avDbrR8c",
    authDomain: "vulpis-42c88.firebaseapp.com",
    projectId: "vulpis-42c88",
    storageBucket: "vulpis-42c88.appspot.com",
    messagingSenderId: "478226486848",
    appId: "1:478226486848:web:b0049a0ac9d0e103b071a5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


var user = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {


        document.querySelector("#linkCadastrar").removeAttribute("hidden");
        document.querySelector("#linkLogin").removeAttribute("hidden");


        document.querySelector("#linkSair").hidden = 'true';
        //document.querySelector("#linkContato").hidden = 'true';


    }
    else {
        console.log(user);

        document.querySelector("#linkCadastrar").hidden = 'true';
        document.querySelector("#linkLogin").hidden = 'true';
        document.querySelector("#linkSair").removeAttribute("hidden");
        //document.querySelector("#linkContato").removeAttribute("hidden");


    }
})

const logout = () => {
    firebase.auth().signOut().then(() => {
        console.log("FOI");
    }).catch((error) => {
        alert(error.message);
    });
} 