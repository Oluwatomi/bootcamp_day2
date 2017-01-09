'use strict'



module.exports = {
	reverseString: function(str){
		if(str === ""){
			return null;
		}
		var str_reversed = "";

		for (var i = str.length - 1; i >= 0; i--) {
			str_reversed += str[i];
		}

		if(str === str_reversed){
			return true;
		}else{
			return str_reversed;
		}
	}

}