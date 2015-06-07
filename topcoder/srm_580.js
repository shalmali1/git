//http://community.topcoder.com/stat?c=problem_statement&pm=12578

SRM 580


function ShoutterDiv2(s,t) 
{
    var pairs =0;
    for (var i = 1; i < s.length; i++) 
    {
	    for (var j = 0; j < i; j++) 
	    {
	        if ( s[j] <= t[i] && s[i] <= t[j] ) 
	        {
	            pairs++;
	        }
	    }
	}
	return pairs;
}

ShoutterDiv2([1, 2, 4],[3, 4, 6]);

