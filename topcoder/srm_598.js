http://community.topcoder.com/stat?c=problem_statement&pm=12863


SRM 598

function ErasingCharacters(str) {
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
            return str;
        if (consecutive === false) 
        {
            return str;
        }
    }
}

ErasingCharacters("bacaabaccbaaccabbcabbacabcbba");