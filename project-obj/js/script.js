function getCard (hideCard){
  if (hideCard.length > 16 || hideCard.length < 16  || isNaN(+hideCard) ){
  console.log('karta raqam xato');
  }else{
       let hide = hideCard;
       let head = hideCard;
       let hides = '********';
       console.log(hide.slice(0, 4 ) + hides + head.slice(12) );
       console.log('Tabriklaymiz!!!.Karta raqami tugri.');
       if(hideCard.startsWith("9860")){
        console.log('Bu Humo')
     }else if (hideCard.startsWith("8600")){
        console.log('Bu UzKard');
     }else if (hideCard.startsWith('8778')){
        console.log('Bu VISA');
     }else{
        console.log("Bunday karta yuq");
     }
     }
  } 
 
getCard('986000000000000');




