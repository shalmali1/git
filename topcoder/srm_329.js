//http://community.topcoder.com/stat?c=problem_statement&pm=7290

//SRM 329


function VowelEncryptor(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        var nonVowelStr = '';
        for (var j = 0; j < str.length; j++) {
            if (str[j] !== 'a' && str[j] !== 'e' &&
                str[j] !== 'i' && str[j] !== 'o' &&
                str[j] !== 'u') 
            {
               nonVowelStr = nonVowelStr + str[j];
            }
        }
        if (nonVowelStr.length === 0) {
            nonVowelStr = str;
        }
        result.push(nonVowelStr);
    }
    return result;
}

VowelEncryptor(["he", "who", "is", "greedy", "is", "disgraced", "aeitou"]);