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
	},

	words: function(input){
		var result = {};
		var key;

		input = input.replace(/\s/g," ");
		input = input.replace(/\s\s+/gi," ");
		input = input.split(" ");
		  
		for(var i=0; i < input.length; i++)
		{
			key	= input[i];
			if(result.hasOwnProperty(key))
		    {
		    	// If the key exists in the dictionary
		    	// Increment the current value by 1 
		    	result[key] += 1;
		    }
		    else{
		    	// If the key doesn't exist in the dictionary.
		    	// Add the key to the dictionary and initialize it to 1
		    	result[key] = 1; 
		    }
		}
		return result;
	}

}