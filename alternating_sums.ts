function alternating_suming(personWeights :  number[]) : number[]{
    let firstTeam = [];
    let secondTeam = [];

    personWeights.forEach((element, index) => {
        if(index % 2){
            secondTeam.push(element)
        }else{
            firstTeam.push(element)
        }
    });

    return [
        firstTeam.reduce((a,b)=>a+b),
        secondTeam.reduce((a,b)=>a+b),
    ]
}

function alternating_suming2(personWeights :  number[]) : number[]{
    return [
        personWeights.filter((c,i)=> i%2==0).reduce((a,b)=>a+b),
        personWeights.filter((c,i)=> i%2>0).reduce((a,b)=>a+b),
    ]
}

function alternating_suming3(personWeights :  number[]) : number[]{
    let evenSum = 0;
    let oddSum  = 0;
    personWeights.forEach((el, index) => {
        if(index%2){
            oddSum += el
        }else{
            evenSum += el
        }
    })
    return [ evenSum, oddSum]
}

console.time("Function 1");
console.log(alternating_suming([50,60,60,45,70]))
console.timeEnd("Function 1");
console.time("Function 1");
console.log(alternating_suming2([50,60,60,45,70]))
console.timeEnd("Function 1");
console.time("Function 1");
console.log(alternating_suming3([50,60,60,45,70]))
console.timeEnd("Function 1");