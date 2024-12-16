function sum(arr) {
    // code here
    let sum=0;
    for(let i=0;i<arr.length;i++){
         sum=sum+arr[i];
    }
    return sum;
}

arr=[1,2,3,3,4];
console.log(sum(arr));