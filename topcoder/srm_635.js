//http://community.topcoder.com/stat?c=problem_statement&pm=13487

//SRM 635


function IdentifyingWood(s,t)    {

    var YES = "Yep, its wood";
    var NO = "Nope";
		
	var j = 0;
	for (var i = 0; i < s.length && j < t.length; i++) {
			if (s.charAt(i) == t.charAt(j)) {
				j++;
			}
		}
		
		return (j == t.length) ? YES : NO;
	}
	
IdentifyingWood("absdefgh","asdf");

