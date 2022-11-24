/*or(let age =30; age<40; age++){
    console.log(`I'm ${age} years old.Happy Birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }
return gifts;
}
wrapGifts(gifts);
*/

const names =["Charlie","Samip", "Ali"];

function writeCards(names, birthday){
    for(let i=0; i<names.length; i++){
        names[i]=(`Thank you, ${names}, for the wonderful ${birthday} gift!`);
    }
    return names;
}
writeCards(names);

function countDown(num) {
    let i = 0
    while (i <= num) {
      console.log(num--)
  
    }
  }
  