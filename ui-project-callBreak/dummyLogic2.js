cardArray=["prajay", 6784,"HeraKaJI", 999, 222, "ekka", "goal",4444];
shuffle =[];
console.log(cardArray);

function genShuffle(){
    var cardShuffle=[];
    
    while( cardShuffle.length  != cardArray.length ){
        var randomnumber=(parseInt(Math.random()*cardArray.length));

            if(cardShuffle.indexOf(cardArray[randomnumber]) == -1){
                    //console.log(randomnumber);
                    cardShuffle.push(cardArray[randomnumber]);
            }

    }
      return cardShuffle;

        //console.log(shuffle);
    
}
console.log(genShuffle());




