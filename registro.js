'use strict';

const userName = document.querySelector("[name=user]");
const userPassword = document.querySelector("[name=password]");
const btnSend = document.querySelector('.btn-link');

const registeredUsers = [
    {
        "user": "Quijote",
        "password": "dulcinea",
        "url": "usuario1.html"
    },
    {
        "user": "Cid",
        "password": "andalucia",
        "url": "usuario2.html"
    },
    {
        "user": "Isabel",
        "password": "americas",
        "url": "usuario3.html"
    }
]


function searchUser(name, password, array){
    //Function to search in the register users the user input name and password the index of them
    const indexName = array.findIndex(i => i.user.toLowerCase() === name.toLowerCase());
    const indexPassword = array.findIndex(i=> i.password.toLowerCase() === password.toLowerCase());
    
    //Alert when there is no user, no password or donn't match
    if(indexName === -1 || indexPassword === -1 || indexName !== indexPassword){
        alert('Nombre de usuario o contraseña no válidos.');
    }else{
        //Load the page of every user
        window.location = (array[indexName].url);
    } 
}

//Listener to send btn
btnSend.addEventListener('click', ()=>{
    searchUser((userName.value),(userPassword.value), registeredUsers);
})


