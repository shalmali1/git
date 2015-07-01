//http://community.topcoder.com/stat?c=problem_statement&pm=1667

//SRM 147


function CCipher(str,num) {
    
    var result = "";
    for (var i = 0; i < str.length; i++) 
    {
        var charCode = str.charAt(i);
        var newCode  = str.charCodeAt(i) - num;
        if (charCode >= 'a' && charCode <= 'z') 
        {
            if (String.fromCharCode(newCode) < 'a' ) 
            {
                newCode += 26;
            }
            result = result + String.fromCharCode(newCode);
        } 
        else if (charCode >= 'A' && charCode <= 'Z') 
        {
            if (String.fromCharCode(newCode) < 'A') 
            {
                newCode += 26;
            }
            result = result + String.fromCharCode(newCode);
        } 
        else 
        {
            result = result + str.charAt(i);
        }
    }
    return result;
}


CCipher("ZWBGLZ",25);