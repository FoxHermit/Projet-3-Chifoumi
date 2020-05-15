$(function(){

/// Var UTILISATEUR ////
  var pierre = $('#rock').val();
  var feuille = $('#paper').val();
  var ciseaux = $('#scissors').val();

  var userChoice = null;



/// Var COMPUTER ///
  var computerPossibility = ['pierre', 'feuille', 'ciseaux'];

  computerChoice = Math.floor(Math.random() * computerPossibility.length);
      console.log(computerChoice);

/// Var COMPTEUR EN % ///

var WIN = 0;
var LOOSE = 0;
var score = 0;
var count = 0;
var party = 0;

/// EFFET DU DEBUT ///////


        $('#buttons').hide();
      });

        $('#playButton').click(function(){
          $('#startScreen').slideDown('slow').empty();
            $('#buttons').slideDown('slow');
          });


/// CODE CHIFOUMI ///


$('.go').click(function(){                    // on clique sur la class " go " en HTML qui équivaut à pierre / feuille / ciseaux //
      userChoice=$(this).val();               // userChoice inclue les trois possibilités = pierre / feuille / ciseaux par .val équivalant à value en HTLM //
        console.log(userChoice);             // permet de vérifier dans la console le choix de l'utilisateur //

        {++score}



if
(userChoice == computerChoice){
alert('NUL')
  
}


else if (


    ((userChoice == 'pierre' && computerChoice =='ciseaux'))
    ||((userChoice == 'feuille' && computerChoice == 'pierre'))
    ||((userChoice == 'ciseaux' && computerChoice == 'feuille'))){

alert('YOU WIN');
}

else  {
alert('YOU LOSE');
}















});
