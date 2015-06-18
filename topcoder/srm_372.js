
http://community.topcoder.com/stat?c=problem_statement&pm=8222

SRM 372

function findDifference(B, remainingD) {
    for (var k = 0; k < B.length; k++) {
        for (var j = 0; j < remainingD.length; j++) {
            var bFound = false;
            if (B.charAt(k) === remainingD.charAt(j)) {
                remainingD = remainingD.substring(0, j) +
                             remainingD.substring(j+1, remainingD.length);
                bFound = true;
                break;
            }
        }
        if (bFound === false) {
            return "cheater";
        }
    }
    return remainingD;
}
    
function DietPlan(D,B,L) {
   var remainingD = findDifference(B, D);
   if (remainingD === "cheater") {
       return remainingD;
   }
   var result = findDifference(L, remainingD);
   return result;
}

DietPlan("ABCD","AB","C");
