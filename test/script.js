(function () {
    
    var firebaseConfig = {
        apiKey: "AIzaSyBfopBTDB6QTcQc_iIP5tw3CrhEvZwr3jw",
        authDomain: "test-7ffea.firebaseapp.com",
        databaseURL: "https://test-7ffea.firebaseio.com",
        projectId: "test-7ffea",
        storageBucket: "test-7ffea.appspot.com",
        messagingSenderId: "116441375499",
        appId: "1:116441375499:web:6d49a3d0d2ff9c1543f80e"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


    const txtEmail = document.getElementById("email");
    const txtPassword = document.getElementById("password");
    const btnLogin = document.getElementById("submitLogin");
    const btnSignup = document.getElementById("submitSignup");

    //Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Signup Event
    btnSignup.addEventListener('click', e => {

   
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });
    

}());
