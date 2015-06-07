//http://community.topcoder.com/stat?c=problem_statement&pm=10616

SRM 448 
 
 function TheBlackJackDivTwo(arr) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str.charAt(0) >='2' && str.charAt(0) <= '9') {
            sum = sum + parseInt(str.charAt(0));
        } else {
            switch (str.charAt(0)) {
                case 'J':
                case 'K':
                case 'Q':
                case 'T':
                    sum+=10;
                    break;
                case 'A':
                    sum+=11;
                    break;
            }
        }
    }
    return sum;
}

TheBlackJackDivTwo(["3S", "KC", "AS", "7C", "TC", "9C", "4H", "4S", "2S"]);