
function arrayReplace (input : number[], elemToReplace : number, substitutionElem : number) : number[] 
{
    let output : number[] = []
    for(let i = 0; i < input.length;i++){
        output.push(input[i] === elemToReplace ? substitutionElem : input[i])
    }
    return output
}

//Js way
function arrayReplace2 (input : number[], elemToReplace : number, substitutionElem : number) : number[] 
{
    return input.map(el => el === elemToReplace ? substitutionElem : el)
}

const test = [1,2,1,4,51,2,7,6,123,1,2,3,5,4];

console.time('arrayReplace')
console.log(arrayReplace(test,1,3));
console.timeEnd('arrayReplace')

console.time('arrayReplace2')
console.log(arrayReplace2(test,1,3));
console.timeEnd('arrayReplace2')
