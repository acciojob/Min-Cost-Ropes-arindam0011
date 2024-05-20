function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0;
	let minc=0;
	for(let i=1; i< arr.lenght-1; i++){
		sum= sum+arr[i]+arr[i-1];
		minc+=sum;
	}
  return minc;
}

module.exports=mincost;
