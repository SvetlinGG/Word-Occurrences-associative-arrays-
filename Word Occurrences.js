function words(arr){
    let currWord = {};
    for ( let word of arr){
        if ( !currWord.hasOwnProperty(word)){
            currWord[word] = 1;
        }else {
            currWord[word] +=1;
        }
    }
    let sortedArr = Object.entries(currWord).sort((a,b) => b[1] - a[1]);
    
    for ( let element of sortedArr){
        console.log(`${element[0]} -> ${element[1]} times`);
    }

}
words(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);