
localStorage.setItem('UserAmount', 0);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        if (localStorage.getItem('SignUpNecessary') == 'false') {
            localStorage.setItem('SignUpNecessary', null);
            window.location.href = "index.html";
            console.log("User is signed in");

            var user = firebase.auth().currentUser;
            console.log("signupnecessary2 " + localStorage.getItem('SignUpNecessary'));
        }

        if (user != null) {
        }

    } else {
        if (localStorage.getItem('SignUpNecessary') == 'true') {
            localStorage.setItem('SignUpNecessary', 'false');
            window.location.href = "login.html";
            console.log("User isn't signed in");
            console.log("signupnecessary2 " + localStorage.getItem('SignUpNecessary'));
        }
    }
});

function logout() {
    firebase.auth().signOut();
    localStorage.setItem('SignUpNecessary', true);
}

function login() {
    var email = document.getElementById('email').value;
    console.log("email: " + email);
    var password = document.getElementById('password').value;
    console.log("password: " + password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    });
}

function signup() {
    console.log("Useramount was counted");
    window.location.href = "signup.html";
    var ref = firebase.database().ref("Users/");
    ref.on("value", function (data) {
        localStorage.setItem('UserAmount', data.numChildren());
    });

    console.log("refresed");

    var ref = firebase.database().ref("Users/");
    ref.on("value", function (data) {
        localStorage.setItem('UserAmount', data.numChildren());
    });
    console.log("Useramount was counted again");
}

function newuser() {
    console.log("Useramount was counted");

    var newemail = document.getElementById('email_signup').value;

    var newpassword = document.getElementById('password_signup').value;

    var newusername = document.getElementById('username_signup').value;

    var newfirstname = document.getElementById('firstname_signup').value;
    var firebaseRef = firebase.database().ref('Users/' + newusername);
    console.log("amount: " + localStorage.getItem('UserAmount'));
    firebaseRef.child("FirstName").set(newfirstname);

    var newlastname = document.getElementById('lastname_signup').value;
    var firebaseRef = firebase.database().ref('Users/' + newusername);
    console.log("amount: " + localStorage.getItem('UserAmount'));
    firebaseRef.child("LastName").set(newlastname);

    var newbirthday = document.getElementById('birthday_signup').value;
    var firebaseRef = firebase.database().ref('Users/' + newusername);
    console.log("amount: " + localStorage.getItem('UserAmount'));
    firebaseRef.child("Birthday").set(newbirthday);

    console.log("Person was created");

    firebase.auth().createUserWithEmailAndPassword(newemail, newpassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    });
}

var app = {
    // Application Constructor
    initialize: function () {
        console.log('app.initalize()');
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        var user = firebase.auth().currentUser;

        if (user) {
            if (localStorage.getItem('SignUpNecessary') == 'false') {
                window.location.href = "index.html";
                console.log("User is signed in");

                var user = firebase.auth().currentUser;
                console.log("User is signed in" + user);
                console.log("signupnecessary1 " + localStorage.getItem('SignUpNecessary'));
            }

        } else {
            if (localStorage.getItem('SignUpNecessary') != 'true') {
            }

            if (localStorage.getItem('SignUpNecessary') == null) {
                localStorage.setItem('SignUpNecessary', 'true');
            }

            if (localStorage.getItem('SignUpNecessary') == 'true') {
                localStorage.setItem('SignUpNecessary', 'false');
                window.location = "login.html";
                console.log("necessary: " + necessary);
                console.log("signupnecessary1 " + localStorage.getItem('SignUpNecessary'));
            }
        }

        var ref = firebase.database().ref("Users/");
        ref.on("value", function (data) {
            localStorage.setItem('UserAmount', data.numChildren());
        });

        document.addEventListener('prechange', function (event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        console.log('onDeviceReady()');
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
app.helloWorld("World");

function makeAlert(){
    document
  .getElementById('dialog-1')
  .show();
}

function makeAlert2(){
    document
  .getElementById('dialog-2')
  .show();
}

function deleteAlert(){
    document.getElementById('dialog-1').hide();
}

function deleteAlert2(){
    document.getElementById('dialog-2').hide();
}