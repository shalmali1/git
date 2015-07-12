//http://community.topcoder.com/stat?c=problem_statement&pm=8395

//SRM 380

function sumDigits(str) {
    var sum = 0;
    for (var x = 0; x < str.length; x++) {
        sum = sum + parseInt(str[x]);
    }
    return sum;
}

function LuckyTicketSubstring(str) {
    var len = 0;
    /*checking max substring first is more efficient. so comparing from big            *substring to small substring
     */
    for (var n = Math.floor(str.length/2); n >= 1; n--) {
        for (var j = 0; j < str.length; j++) {
            if (j+(2*n) <= str.length) {
                var string1 = str.substring(j, j+n);
                var string2 = str.substring(j+n, j+(2*n));
                if (sumDigits(string1) == sumDigits(string2)) {
                    len = 2*n;
                }
            }
        }
        if (len > 0)
            break;
    }
    return len;
}


LuckyTicketSubstring("123231");
