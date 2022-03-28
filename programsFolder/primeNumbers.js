let arr= [12, 35, 1, 10, 34, 1];
let primeArr= [];
//creating a function toCheckPrime
function toCheckPrime(primeArr){
  for(let i=2;i<primeArr/2;i++){
    if(primeArr%i == 0){
      return false;
    }
  };
  return true;
};
  document.write(`Prime numbers in given [12, 35, 1, 10, 34, 1] are:`);
//here checking each element in array to find any prime number
for(let index=0;index<arr.length; index++){
  if(toCheckPrime(arr[index])){
    primeArr.push(arr[index]);//pushing the prime no. in primeArr
  };
};
console.log("PrimeArr: " + primeArr);
document.write(`\n ${primeArr}`);