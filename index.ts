function sum (num1:number ,num2: number){
    return num1 + num2;
} 
const result = sum(1,2)

result

// chalenge 2
// function sumEntries(...numbers){
//     return numbers.reduce((a,b)=>a+b,0)
// }
// function sumEntries2(...numbers){
//     let sum = 0;
//     for(let i = 0;i<numbers.length;i++){
//             sum+=numbers[i];
//     }
//     return sum;
// }
// function sumEntries3(...numbers){
//     let sum = 0;
//     numbers.forEach(n=>sum+=n)
//     return sum;
// }
function sumEntries4(...numbers:number[]):number{
    let sum = 0;
    numbers.forEach(n=>sum+=n)
    return sum;
}

// const s = sumEntries4(1,2,4);
// s

function addBorder(params:[]):[]{
    const border :string = '*******';
    params = params.map(a=>{
        return a;
    })
    return params;
}

const personalInfo  = {
    name:'Rafael',
    surname:'Miranda',
    email:'rafael.miranda@edu.unifor.br',
    registration:'2012896'
}

