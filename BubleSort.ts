function bubbleSort(input : number[]) : number[] 
{
    for(let i = 0; i< input.length;i++){
        for(let j = i+1; j< input.length;j++){
            if(input[i] > input[j]){
                let aux = input[i]
                input[i] = input[j]
                input[j] = aux
            }
        }
    }
    return input;
}

function bubbleSortJsStyle(input : number[],direction = 'asc') : number[] 
{
    for(let i = 0; i < input.length;i++){
        for(let j = i+1; j < input.length;j++){
            if(direction == 'asc'){
                if(input[i] > input[j]){
                    [input[i], input[j]] =  [input[j], input[i]]
                }
            }else{
                if(input[i] < input[j]){
                    [input[j], input[i]] =  [input[i], input[j]]
                }
            }
       }
    }
    return input;

}

const exampleArray = [3,4,6,1,9,45,22,33] 
console.log(bubbleSort(exampleArray));
console.log(bubbleSortJsStyle(exampleArray,'desc'),'desc');
