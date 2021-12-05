/** Get an array of integers, itarate that array as many as possible while its length > 1, for first iteratior (odd) 
 * sum the pair values for the second iteration (evens) multiply pair values
 * 
 */

function arrayConversion(values : number[]) : number
{
    let isOdd = true;
    while(values.length > 1){
        values = sumProducts(values, isOdd)
        isOdd =!isOdd;
    }
    return values[0]
}

function sumProducts(arrayValues : number[], isOdd : boolean = true) : number[]
{
    let productArray : number[] = []

    if(isOdd) 
        for(let i = 0; i < arrayValues.length; i+=2) 
            productArray.push(arrayValues[i]+ (arrayValues[i+1]??0))
    else
        for(let i = 0; i < arrayValues.length; i+=2) 
            productArray.push(arrayValues[i]* (arrayValues[i+1]??1))
    
    return productArray;

}

console.log(sumProducts(sumProducts(sumProducts([1,2,3,4,5,6,7,8]),false))) 

let conversionArray = [1,2,3,4,5,6,7,8]
console.log(arrayConversion(conversionArray))