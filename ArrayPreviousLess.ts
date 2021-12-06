
//First understood was to find if the previous in array was smaller
function ArrayPreviousLess(arrayInput : number[]) : number[]
{
    let arrayOutput : number[] = []

    for(let i = 0; i< arrayInput.length; i++)
    {
        arrayOutput.push(arrayInput[i-1] && arrayInput[i-1] < arrayInput[i] ? arrayInput[i-1] : -1)
    }

    return arrayOutput
}

//Second understood
function ArrayPreviousLess2(arrayInput : number[]) : number[]
{
    let arrayOutput : number[] = []

   
    for(let i = 0; i< arrayInput.length; i++)
    {
            let founded;

            for(let j = i-1; j >= 0; j--){
                
                if(arrayInput[j] < arrayInput[i]) {
                    founded = arrayInput[j]
                    break;
                }       
                
            }
            arrayOutput.push(founded ? founded : -1)
    }
 
    return arrayOutput
}

// third solution accordig to the course
function ArrayPreviousLess3(arrayInput : number[]) : number[]
{
    let arrayOutput : number[] = []

   
    for(let i =arrayInput.length -1 ; i>= 0; i--)
    {
        for(let j = i; j>=0; j-- ){
            if(arrayInput[i] > arrayInput[j]){
                arrayOutput.unshift(arrayInput[j])
                break;
            }else if(j === 0 ){
                arrayOutput.unshift(-1)
            }
        }
        
    }
    return arrayOutput
}


/** In my undertand unshit has more coust cause it needs to reorganize every array items so the 
 * array.push should be best aproach
 */


const testArray = [3,5,2,6,5,7,101,1,0]
console.log(ArrayPreviousLess([3,5,2,6,5]));

console.time("ArrayPreviousLess2");
console.log(ArrayPreviousLess2(testArray));
console.timeEnd("ArrayPreviousLess2")


console.time("ArrayPreviousLess3");
console.log(ArrayPreviousLess3(testArray));
console.timeEnd("ArrayPreviousLess3")

