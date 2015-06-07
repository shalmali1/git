//http://community.topcoder.com/stat?c=problem_statement&pm=13048

SRM 614
 
 
 function MicroStrings(a,d) {
    var result = "";
    var n = 1;
    while (a >= (n*d)) {
        result = result + (a-(n*d))
        n++;
    }
    return a + result;
}

MicroStrings(30,6);
