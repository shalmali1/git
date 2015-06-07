//http://community.topcoder.com/stat?c=problem_statement&pm=13043

SRM 612

function LeftAndRightHandedDiv2(str) {
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'R' && str.charAt(i+1) == 'L') {
            count++;
        } 
    }
    return count;
}

LeftAndRightHandedDiv2("LRLRRR");
