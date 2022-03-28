let input = 15;
document.write(`Numbers divisble by 3 and 5 upto ${input} are: `)
function printFunction(input){
  for(let num=0; num<input; num++){
    if(num%3 == 0 && num%5 == 0)
      console.log(num)
      document.write(num + " ")
  }
};
printFunction(input);