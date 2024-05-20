function mincost(arr)
{ 
    arr.sort((a, b) => a - b);
    let minCost = 0;

    while(arr.length > 1){
        let sum = arr[0] + arr[1];
        minCost += sum;
        arr.shift();
        arr.shift();
        arr.push(sum);
        arr.sort((a, b) => a - b);
    }
    return minCost;
}

module.exports=mincost;