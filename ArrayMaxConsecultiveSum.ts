
function arrayMaxConsecultiveSum(arrayValues : number[], jump : number = 1) : number
{
    try{
        if(arrayValues.length < jump +1){
            throw new Error("array length should be greater then jump")
        }
        let productArray : number[] = []
        for(let i = jump; i < arrayValues.length; i+= jump) 
            productArray.push(arrayValues[i]+ (arrayValues[i+1]??0))
            console.log(productArray)
    
        return productArray.sort((a,b)=>a > b ? -1 : 1)[0];
    }catch(err){
        console.error(err)
    }
    

}



console.time();
console.log(arrayMaxConsecultiveSum([2,3,5,1,6],3))
console.timeEnd()
