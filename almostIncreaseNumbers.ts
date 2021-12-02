function almostIncreaseSequence(sequence : Number[]) : Boolean
{
    let count = 0;
    for(let i = 0; i < sequence.length ; i++){
        if(sequence[i] <= sequence[i - 1])
        {
            count++;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1])
            {
                return false;
            }
        }
    }
    return count <= 1;
}

const sequence_1 = [1,3,2,1]

const sequence_2 = [1,3,2,4,5,6,9,8]

console.log(almostIncreaseSequence(sequence_1))
console.log(almostIncreaseSequence(sequence_2)) 

console.log(Number(sequence_1[-2]))