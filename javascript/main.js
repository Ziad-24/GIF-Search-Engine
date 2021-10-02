// grab
var button = document.getElementById('button');
var inputt = document.getElementById('input');
var url = "http://api.giphy.com/v1/gifs/search?q="+inputt.value+"&api_key=dc6zaTOxFJmzC";
var container = document.getElementById('container');
    
    inputt.addEventListener('keyup',function(e)
    {
        //if searching with ENTER key
        if(e.which === 13)
        {
            container.innerHTML = null; 
            inputt = document.getElementById('input').value;
            var url = "https://api.giphy.com/v1/gifs/search?q="+inputt+"&api_key=dc6zaTOxFJmzC";    
    
            var GiphyAJAXCall = new XMLHttpRequest();
            GiphyAJAXCall.open( 'GET', url );
            GiphyAJAXCall.send();
    
            GiphyAJAXCall.addEventListener('load',function(e){
                var data = e.target.response;
                console.log(data);
                pushToDOM(data);
              });
    
        }
    })
        //If searching with the button
      button.addEventListener('click',function(){
        container.innerHTML = null; 
        inputt = document.getElementById('input').value;
        var url = "http://api.giphy.com/v1/gifs/search?q="+inputt+"&api_key=dc6zaTOxFJmzC";    

        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load',function(e){
            var data = e.target.response;
            console.log(data);
            pushToDOM(data);
          });

    })



//how to show on screen
    function pushToDOM(input)
    {
        var response = JSON.parse(input);
    // [14].images.fixed_height.url; 
        var imageURLs = response.data;

        imageURLs.forEach(function(pics){
            var src = pics.images.fixed_height.url;
    container.innerHTML += "<img src=\""+ src +"\" class=\"container-image\">";
        });
        
    }
