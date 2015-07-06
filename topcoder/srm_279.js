
//SRM 279

function DancingSentence(str) {
    var k = 0;
    while (k < str.length && str[k] === ' ')
        k++;
    if (k === str.length) {
        //all spaces so return the original string
        return str;
    }
    var prevLower = false;
    var result = str[k].toUpperCase();
    
    for (k = k+1; k < str.length; k++) 
    {
        if (str[k] !== ' ') 
        {
            if (prevLower) 
            {
                result = result + str[k].toUpperCase();
                prevLower = false;
            } 
            else 
            {
                result = result + str[k].toLowerCase();
                prevLower = true;
            }
        } 
        else 
        {
            result = result + str[k];
        }
    }
    return result;
}

DancingSentence(" This   is         a  dancing   sentence  ");

