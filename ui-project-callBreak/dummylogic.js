"use strict";

var cardArray = [];
for(var i=1; i<=12; i++)
{
   cardArray.push(i);
}
console.log("cards: \n"+ cardArray);
//
//var cardShuffle = [];
//while( cardShuffle.length != cardArray.length){
//    
//    var tempIndex = Math.floor((Math.random() * 3) + 0);
//    //console.log(tempIndex);
//        cardShuffle.push(cardArray[tempIndex]);
//     
//  
//}
//
//console.log(cardShuffle);

var cardShuffle = []
while(cardShuffle.length != cardArray.length){
  var randomnumber=Math.ceil(Math.random()*cardArray.length)
  var found=false;
  for(var i=0;i<cardShuffle.length;i++)
  {
	if(cardShuffle[i]==randomnumber)
    {
        found=true;break
    }
  } 
  if(!found)
  {
      cardShuffle[cardShuffle.length]=randomnumber;
      
  }
   
}
console.log("after Shuffle:\n"+cardShuffle);



