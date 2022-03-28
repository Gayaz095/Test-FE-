var number = 22;
//function toCheckPrime
function toCheckPrime(num){
      if(num == 0){//if zero then return false
        return false;
      }
      for(let i=2; i<num; i++){
        if(num % i == 0){//checking if the number is prime or not
          return false;
        }
      };
      return true;
};
document.write(`Prime numbers upto ${number} are: `)
console.log(`Prime no. upto ${number} are:`)
for(let i=1; i<=number; i++){
  if(!toCheckPrime(i)) {//here using ! toCheckPrime makes it even number
    console.log(i);
    document.write(`\n ${i}`)
  }
};
