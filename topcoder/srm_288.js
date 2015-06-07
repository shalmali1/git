http://community.topcoder.com/stat?c=problem_statement&pm=6036

SRM 288

function AccountBalance(num,arr) 
{
    var result = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        var money = arr[i];
        for (var j = 0; j < money.length; j++) 
        {
            if (money.charAt(j) == 'C') 
            {
                num = num + parseInt(money.match(/[0-9]+/g));
            }
            if (money.charAt(j) == 'D') 
            {
                num = num - parseInt(money.match(/[0-9]+/g));
            }
        }
    }
    return num;
}

AccountBalance(53874, ["D 1234", "C 987", "D 2345", "C 654", "D 6789", "D 34567"]);
