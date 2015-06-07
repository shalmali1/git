//http://community.topcoder.com/stat?c=problem_statement&pm=13378

SRM 630


function DoubleLetter(str) {
    while (true) 
    {
        var consecutive = false;
        for (var i = 0; i < str.length-1; i++) 
        {
            if (str.charAt(i) == str.charAt(i+1)) 
            {
                str = str.substring(0,i) + str.substring(i+2, str.length);
                consecutive = true;
                break;
            }
        }
        if (str.length === 0)
            return "Possible";
        if (consecutive === false) 
        {
            return "Impossible";
        }
    }
}

DoubleLetter("aabccbb");