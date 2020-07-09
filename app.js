(function() {

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // get elements from
    const txtEmail = document.getElementById('txtEmail')
    const txtPassword = document.getElementById('txtPassword')
    const btnLogin = document.getElementById('btnLogin')
    const btnSignUp = document.getElementById('btnSignUp')
    const btnLogOut = document.getElementById('btnLogOut')

    // Add login event 
    btnLogin.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass)
        promise.catch(e => console.log(e.message));
    })



    // Add signup event handler
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign up with
        const promise = auth.createUserWithEmailAndPassword(email, pass)
            .catch(e => console.log(e.message));

    });

    // Logout 
    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogOut.classList.remove('hide');
        } else {

            console.log('not logged in');
        }
    })

}());