window.setViseme = function(viseme) {
    window.Android.log('Viseme changed to: ' + viseme);
}

window.setState = function(state) {
    window.Android.log('State changed to: ' + state);
}

console.log = function(message) {
    window.Android.log(message);
}

console.error = function(message) {
    window.Android.log('Error: ' + message);
}

console.log('Started !');