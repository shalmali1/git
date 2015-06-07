//http://community.topcoder.com/stat?c=problem_statement&pm=4564

SRM 242


function TeamSplit(strength) {
    var res1 = 0;
    var res2 = 0
    strength.sort(function(a, b){return a-b});
    
    for (var i = 0; i < strength.length; i=i+2) {
        res1 = res1 + strength[i];
    }
    for (var j = 1; j < strength.length; j = j+2) {
        res2 = res2 + strength[j];
    }
    return Math.abs(res1-res2);
}

TeamSplit([9,8,7,6]);
