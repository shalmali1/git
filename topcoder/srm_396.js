//http://community.topcoder.com/stat?c=problem_statement&pm=8740

//SRM 396

function VerifyCreditCard(str) {
    var result = [];
    if (str.length % 2 === 1) 
    {
        for (var i = 0; i < str.length; i++) 
        { 
            if ((i+1) % 2 === 0) 
            {
                result.push(parseInt(str[i]) * 2);
            } 
            else 
            {
                result.push(parseInt(str[i]));
            }
        }
    }
    else
    {
        for (i = 0; i < str.length; i++) { 
            if ((i+1) % 2 !== 0) 
            {
                result.push(parseInt(str[i]) * 2);
            } 
            else 
            {
                result.push(parseInt(str[i]));
            }
        }
    }
    var s = result.join('');
    
    if (s < 10) return s;
        
        var sum = 0;
        while (s > 0)
        {
            sum += Math.floor(s % 10);
            s = Math.floor(s / 10);
        }
       final= sum % 10 ? "INVALID":"VALID";
       
    return final;
}

VerifyCreditCard("542987223412");