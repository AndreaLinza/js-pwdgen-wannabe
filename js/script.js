const FirstName = prompt("Inserisci il tuo nome");
const LastName = prompt("Inserisci il tuo cognome");
const Age = parseInt(prompt("Inserisci la tua età"));
const FavoriteColor = prompt("Il tuo colore preferito");
const Bonus = Age + 21;


document.getElementById("FirstName").innerHTML = `${FirstName}`;
document.getElementById("LastName").innerHTML = `${LastName}`;
document.getElementById("Age").innerHTML = `${Age}`;
document.getElementById("FavoriteColor").innerHTML = `${FavoriteColor}`;

const Password = FirstName + LastName + FavoriteColor + Bonus;
document.getElementById("Password").innerHTML = `${Password}`;