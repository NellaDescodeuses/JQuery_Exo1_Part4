$(document).ready(function () {
    // programmer le choix de l'ordi
    //je crée 3 variables 
    //1 qui initialise le nombre de parties 
    //1 qui prend le nombre de victoire
    //1 qui stock le pourcentage
    let ComputerPossibilities = ["stone", "leaf", "scissors"];
    let numberGame = 0;
    let numberWin = 0;
    let percentWin = 0;
    //le random parcourt mon tableau.
    //choices, permet de me retourner le résultat sous forme de chaine de caractères.
    let computerChoice = ComputerPossibilities[Math.floor(Math.random() * ComputerPossibilities.length)];
    console.log("choix Computer " + computerChoice);

    $("img").click(function () {
        numberGame++;
        let my_value = $(this).attr("id");
        console.log("choix User " + my_value);
        if (my_value == computerChoice) {
            alert("Egalité");
        } else if (computerChoice == "leaf" && my_value == "stone") {
            alert("c'est mort perdu!!");
        } else if (computerChoice == "scissors" && my_value == "leaf") {
            alert("c'est mort perdu!!");
        } else if (computerChoice == "stone" && my_value == "scissors") {
            alert("c'est mort perdu!!");
        } else {
            numberWin++;
            alert("Bravo Gagné!");
        }
        percentWin = numberWin * 100 / numberGame;
        alert(percentWin + '%' + 'de victoire!');
    });
});




