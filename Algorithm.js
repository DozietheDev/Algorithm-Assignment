//Question 1

function recursiveFunction (arr, x, start, end){
    if (start>end) 
    return false;
  let mid=Math.floor ((start + end)/2);
  if (arr[mid] === x) return true;
  if(arr[mid] > x)
  return recursiveFunction(arr, x, start, mid-1);
  else
  return recursiveFunction(arr, x, mid+1, end)
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
console.log ("Element found");
else
console.log ("Element not found")

//Question 2

function elementArray(arr)
let arr =[2,3,12,18,42,24]
let product= 2
 for(let i=0; i<arr.length;i++){
     if(arr[i]/product&&arr[i]>15){
         product =newProduct
     }
     return newProduct
 }
 console.log(newProduct)

 //Question 3

 function nobleInteger(arr){
     let size= times.length;
    let numTimes = []
     for(let i=0;i<size;i++){
        let count=[4,8];
         for(let j=0; j<count.length; j++)
         if(arr[i] <= arr[j])
         numTimes.push(arr)
         return numTimes;
     }
 }
    let times=[2,3,12,18,42,24];
 

 //Question 4
 function sum (arr){
     let sum=0;
     for(let i=0; i<arr.length; 1++)
     sum +=arr[i];
     return sum;
 }
 let arr=[12,3,4,15];

 //Question 5
 function kthsmallest(arr, n, k){
     arr.sort((a, b) =>a-b)
     return arr[k-1];
 }
   let arr =[7, 10, 4, 3, 20, 15]
   let n = arr.length, k =2
   console.log ("k'th smallest element is" + kthSmallest(arr, n, k));