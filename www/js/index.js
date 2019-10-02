
var address = {
    'longitude': 55454564,
    'latitude': 64564654,
    'street': 'Hauptstrasse',
    'streetNumber': 99,
    'zip': 8570,
    'city': 'Weinfelden',
    'type': 'private'
}

var app = {
    // Application Constructor
    initialize: function() {
        console.log('app.initalize()');
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
              .innerHTML = event.tabItem.getAttribute('label');
          });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('onDeviceReady()');
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    helloWorld: function(data){
        console.log('Hello World() Hello ' + data);
        console.log(address);
    }
};

app.initialize();
app.helloWorld("World");