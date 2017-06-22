var twitterdata = $("#twitterdata");

function generateQuote(){
    $.getJSON('https://random-quote-generator.herokuapp.com/api/quotes/random',
    function(json){
                 $("#quote").text(json.quote);
                 $("#name").text(json.author);
                twitterdata.attr('href', 'https://twitter.com/intent/tweet?text=' 
            + encodeURIComponent('"' + json.quote + '" ' + json.author));
        })
}

$(document).ready(function(){
     generateQuote();
	 $("#clickButton").on("click", generateQuote);

})
    
        
  