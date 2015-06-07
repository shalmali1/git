http://community.topcoder.com/stat?c=problem_statement&pm=11399

SRM 505

function xyz(str) {
    var ans = "";
    var firstWord = true;
    
    /* 
     * split the string on spaces such that each element of an array
     * contains one word.
     */
    var arr = str.split(" ");
    
    for (var k = 0; k < arr.length; k++) {
        /* currStr will have one word every time we iterate */
        var currStr = arr[k];
        
        if (firstWord === true) {
            /* We will come here if this is the first word in the sentence */
            currStr =  currStr.substring(0, 1).toUpperCase() + 
                       currStr.substring(1, currStr.length);
        }
        
        if (currStr.charAt(currStr.length-1) === '.') {
            /* the next word is the beginning of a new sentence */
            firstWord = true;
        } else {
            firstWord = false;
        }
        
        /* add the word as it is as it is not a start word. */
        ans = ans + currStr + " ";
    }
    /* remove the last space from the sentence */
    return ans.substring(0, ans.length-1);
}


console.log(xyz("hi meshrut this is x. a. this could. not be any better."));
console.log(xyz ("a. b. c. d. f. g."));
