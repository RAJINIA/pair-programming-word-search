const wordSearch = (letters, word) => { 
    // Test case #2
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log("horizontalJoin : ", horizontalJoin);
    
    let colLength = horizontalJoin.length;
    //console.log(colLength);
    let result = [];
    for( let j = 0; j < letters[0].length; j++){
        let wordB = '';
        for (let i = 0; i < colLength; i++) {
            
            //console.log(horizontalJoin[i][j]);
            wordB += horizontalJoin[i][j];
        }
        result.push(wordB);
    }
    //console.log("verticalJoin :", result);
        
    for (l of horizontalJoin) {
        result.push(l);
        //console.log(result);
    }
    //console.log("result : ",result);
    for (value of result) {
        if (value.includes(word)) {
            return true;
        } 
    } return false;
} 




module.exports = wordSearch


