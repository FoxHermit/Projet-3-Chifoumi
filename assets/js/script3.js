$(function(){
  
/// Var UTILISATEUR ////
  //var pierre = $('#rock').val(); //inutile//
  //var feuille = $('#paper').val(); // inutile //
  //var ciseaux = $('#scissors').val(); inutile //
  var userChoice = null;
      
       

/// Var COMPUTER ///
  var computerPossibility = ['pierre', 'feuille', 'ciseaux']; 		
    
  computerChoice = Math.floor(Math.random() * computerPossibility.length);
      console.log(computerChoice);




/// EFFET DU DEBUT ///////
       
       
        $('#buttons').hide();
      });
    
        $('#startScreen').click(function(){
          $(this).fadeOut('slow')
            $('#buttons').fadeIn('fast');
          });


/// CODE CHIFOUMI ///


$('.go').click(function(){                    // on clique sur la class " go " en HTML qui équivaut à pierre / feuille / ciseaux //
      userChoice=$(this).val();               // userChoice inclue les trois possibilités = pierre / feuille / ciseaux par .val équivalant à value en HTLM //
        console.log(userChoice);              // permet de vérifier dans la console le choix de l'utilisateur //



if (userChoice == computerChoice){
alert ('NUL')
} 

});


