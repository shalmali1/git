//http://community.topcoder.com/stat?c=problem_statement&pm=3020

SRM 214

function bloggoShortcuts(text) {
    var r = "";
    var b = false, it = false;
    for (var i = 0; i < text.length; i++) {
        if (text[i] == '_') {
            it ^= 1 ;
            
            /*here intial it value is false means 0. so it = false EXOR true
             *i.e. 0 EXOR 1 which is 1(true) if true put <i>.next iteration it    
             *value would be true and it=1. so true ^ true = false.so put </i>
             */
			
				r += it ? "<i>" : "</i>";
			} else if (text[i] == '*') {
				b ^= 1;
				r += b ? "<b>" : "</b>";
			} else {
				r += text[i];
			}
		}
		return r;
    }

bloggoShortcuts(" _ _ __  _ yabba dabba _   *  dooooo  * ****");