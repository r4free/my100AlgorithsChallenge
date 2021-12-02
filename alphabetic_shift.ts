
function alphabeticShift(inputString:any)
{
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for(let i of inputString){
        const newIndex = alphabet.indexOf(i) + 1;
        result+= alphabet[ newIndex >= alphabet.length ? 0 : newIndex ]
    }
    return result;
}

console.log(alphabeticShift('rafaelz'))
