$(function(){
    //je crée 3 variables 1 qui initialise le nombre de parties 
    //1 qui prend le nombre de victoire
    //1 qui stock le pourcentage
    let numberGame = 0;
    let numberWin = 0;
    let percentWin = 0;

    $('#button').click(function() { 
        //j'incrémente le nombre de partie
        numberGame++;
        //nombre aléatoire entre 1 et 3
        let computerChoice = Math.floor(Math.random()*3)+1;
        console.log(computerChoice);
        //variable qui récupère la valeur de l'utilisateur
        let userChoice = $('select').val();
        //les conditions...
        if(userChoice == computerChoice){
            alert('égalité')

        }else if ((userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 3) || (userChoice == 3 && computerChoice == 1)){;
            alert('perdu ! ');
        }else{
            numberWin++;
            alert('gagné !!')
        }
        percentWin = numberWin*100/numberGame;
        alert(percentWin + ' %' + ' de victoire !');
    });
});

