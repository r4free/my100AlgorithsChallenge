function alphabeticSubsequence(inputString : string) : boolean
{
    let lastArrayIndex = 0;
    let result = true;
    for(let i = 0; i < inputString.length; i++){
        const newIndex = inputString.charCodeAt(i);
        if( newIndex > lastArrayIndex && newIndex != lastArrayIndex){
            lastArrayIndex = newIndex;
        }else{
            result =  false;
            break;
        }
    }
    return result;
}


console.log(alphabeticSubsequence('efg'))

