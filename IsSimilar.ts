function isSimilar(elements : number[] , elements2 : number[] ) : boolean {
    return elements.sort().toString() === elements2.sort().toString()
}

function isSimilar2(elements : number[] , elements2 : number[] ) : boolean {
    if(elements.length !== elements2.length)
        return false
    if(elements.toString() === elements2.toString())
        return true    
    return elements.sort().toString() === elements2.sort().toString()
}

console.time("Function 1")
console.log(isSimilar([1,1,3,4,25,32,44,35],[1,1,3,4,25,32,44,35]))
console.timeEnd("Function 1")
console.time("Function 2")
console.log(isSimilar2([1,1,3,4,25,32,44,35],[1,1,3,4,25,32,44,3]))
console.timeEnd("Function 2")