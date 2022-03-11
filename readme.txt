##Starting from cloned version

#Ensure that firebase console is set up with new project and relevant database if not set up and rerun initialize firebase
firebase init

#cd into functions and install
npm install




##Starting from scratch 

#install firebase tools
npm install -g firebase-tools

#check if the firebase tools has been installed
firebase --version

#authenticate through login
firebase login

#Set up a new project on firebase console - https://console.firebase.google.com/ and create a new project and database inside the project

#create the folder that you want to create the application in and cd into the folder and initialize firebase
firebase init -  Go through the steps in setting up firebase on cli
#install firestore, functions, emulators - select default choices, emulators select pubsub, authentication, functions, firestore

#Initialize the emulators
firebase init emulators

#install axios
#change directory into the functions folder
npm install axios

#insert code into index.js in the functions folder

#run the emulator
firebase emulator:start

#Deployment (add only functions if you want to deploy only functions)
firebase deploy --only functions

#refer to https://youtu.be/gA6WGYQWrKc for full tutorial