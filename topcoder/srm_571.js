
//http://community.topcoder.com/stat?c=problem_statement&pm=12438

SRM 571 

function FoxandGame(words) {
    var count = 0;
   
    for (var i = 0; i < words.length; i++) 
    {
        var word = words[i];
        for (var j = 0; j < word.length; j++) 
        {
            if (word.charAt(j) == 'o') {
                count++;
            }
        }
    }
    return count;
}    

FoxandGame(["ooo","o--"]);