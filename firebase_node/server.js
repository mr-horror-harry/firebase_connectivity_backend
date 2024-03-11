const firebase_connection = require('./driver/firebase')

if (firebase_connection){
    console.log("Connection succes...")
}
else{
    console.log("Connection failed...")
}