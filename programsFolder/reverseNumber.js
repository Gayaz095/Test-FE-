function reverseNum(){
  let num = 32243;
  let reverseNum = 0;//here reverseNum is used to store reverse value and it is initialized to 0
  while (num !=0){
    reverseNum = (reverseNum*10)+(num%10);
    num=Math.floor(num/10);
  }
  let tempVal = reverseNum;
  console.log(`Reverse number of 32243 is: ${tempVal}`);
  document.write(`Reverse number of 32243 is: ${tempVal}`)
};
reverseNum();