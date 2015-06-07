//http://community.topcoder.com/stat?c=problem_statement&pm=4788

SRM 271

function CheckFunction(str){
    var result = 0;
    var lookup = [6,2,5,5,4,5,6,3,7,6];
    for (var i = 0; i < str.length; i++) {
        result = result + lookup[str[i]];
    }
    return result;
}

CheckFunction("13579");
