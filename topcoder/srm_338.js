//http://community.topcoder.com/stat?c=problem_statement&pm=7385

//SRM 338


function BinaryIncrementation(str) {
    var exp = 0;
    var decimal = 0;
    
    for (var i = str.length-1; i >= 0; i--) {
        var curnum = parseInt(str[i]);
        var curdec = curnum * Math.pow(2,exp);
        exp++;
  
        decimal = decimal + curdec;
    }
    var dec = decimal+1;
    return parseInt(dec,10).toString(2);
}

BinaryIncrementation("1111")

