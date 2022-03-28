arr =  [12, 35, 1, 10, 34, 1];
//creating a function to find second highest element
function myFunction(arr){
  arr.sort(); //sorting arr in default ascending order
  for(let i=arr.length -2; i>=0; i--){
    if(arr[i] != arr[i-1]){
      return `In the given [12,35,1,10,34,1] second highest number is: ${arr[i]}`
    }
  };
};
console.log(myFunction(arr));
document.write(myFunction(arr));