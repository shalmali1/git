
//http://community.topcoder.com/stat?c=problem_statement&pm=961

SRM 202

function LetterStrings(words) {
    var count = 0;
    for (var i = 0; i < words.length; i++) 
    {
        var word = words[i];
        for (var j = 0; j < word.length; j++) 
        {
            if (word.charAt(j) >= 'a' && word.charAt(j) <= 'z'
           || word.charAt(j) >= 'A' && word.charAt(j) <= 'Z') {
               count = count + 1;
           }
            
        }
    }
    return count;
}

LetterStrings(["-A-B-C-D", "--------EFGHI", "JKLMNOPQR", "---STU-VW-XYZ"]);