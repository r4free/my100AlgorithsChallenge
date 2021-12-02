function getLongestWords(wordsArray : string[]) : string[]{
    const longestWordsArray = [];
    let longestWordsLength = 0;
    wordsArray.forEach((word : string)=>{
        longestWordsLength = word.length <= longestWordsLength ? longestWordsLength: word.length;
    });

    wordsArray.forEach((word : String) =>{
        if(word.length === longestWordsLength) {
            longestWordsArray.push(word)
        }
    });

    return longestWordsArray;
}

console.log(getLongestWords(
    ['rafael','ades','tutano','ovo','pera','uva','maçã','salada','tetano']
    ))