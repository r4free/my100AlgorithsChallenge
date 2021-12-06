function ArrayMaximalAdjacentDifference(arrayInput : number[]) : number
{
    let maxValue = 0;
    for(let i = 0; i < arrayInput.length; i++){
        const diference = Math.abs(arrayInput[i] -  (arrayInput[i+1] ?? 0))
        maxValue = maxValue > diference ? maxValue :  diference
        console.log(maxValue);
        
    }
    return Math.abs(maxValue)
}

console.log(ArrayMaximalAdjacentDifference([1,3,45,35]))