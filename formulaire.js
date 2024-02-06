// script.js

document.addEventListener('DOMContentLoaded', function() {
    var formulaire = document.getElementById('monFormulaire');

    formulaire.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire

        // Récupération des valeurs des champs
        var motDePasse = document.getElementById('motDePasse').value;
        var nom = document.getElementById('nom').value;
        // Récupérez les autres valeurs de formulaire ici

        // Affichage des valeurs dans la console (remplacez cela par votre logique d'enregistrement)
        console.log('Mot de passe:', motDePasse);
        console.log('Nom:', nom);
        // Affichez les autres valeurs de formulaire

        // Affiche un message à l'utilisateur (remplacez cela par votre propre logique d'affichage de message)
        alert('Formulaire enregistré avec succès!');

        // Vous pouvez également effectuer une requête AJAX pour enregistrer les données côté serveur ici

        // Réinitialisez le formulaire si nécessaire
        formulaire.reset();
    });
});
