function avoidObstacles(input : number[]) : number {
    input = input.sort((a,b)=>a -b)
    const largestArrayValue = input[input.length-1] 
    for(let i = 2; i <= largestArrayValue + 1; i++)
    {
        if(input.every(el => el % i !== 0))
            return i;
    }

}

console.log(avoidObstacles([1,2,8]))