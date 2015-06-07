//http://community.topcoder.com/stat?c=problem_statement&pm=12950

SRM 605

function AlienAndPassword(str) {
   
        var result = 1;
        for(var i = 0; i < str.length-1; i++){
            if(str.charAt(i) != str.charAt(i+1)) 
                result++;
        }
        return result;
    }

 AlienAndPassword("AGAAGAHHHHFTQLLAPUURQQRRRUFJJSBSZVJZZZ");
 