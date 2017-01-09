'use strict'

function count(input, list)
{
  var count = 0;
  for(var i=0; i < list.length; i++)
  {
    if (input === list[i])
    { 
    	count++ ;
    } 
  }
  return count;
}

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
			if(!result[i])
		    {
		    	key	= input[i];
		      	result[key] = count(key, input);
		    }
		}
		return result;
	}

}