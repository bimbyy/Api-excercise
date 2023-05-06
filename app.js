function searchGiphy(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    
    // Get the value of the input element
    const searchTerm = $('#search-term').val();
    
    // Make a request to GIPHY using ajax
    $.ajax({
    url:'http://api.giphy.com/v1/gifs/search', 
      data: {
        q: searchTerm,
        api_key: '9gJE3YnhPbfuxrGlnJCmtElYnAUeXMbh',
        limit: 10
      },
    success: function(response) {
      // Get a random GIF from the response data
      const gif = response.data[Math.floor(Math.random() * response.data.length)];
    
      // Create a new image element with the GIF URL
      const img = $('<img>').addClass('giphy-image').attr('src', gif.images.original.url);
    
      // Append the image element to the body of the page
      $('body').append(img);
      //clear search field
      $('#search-term').val('');
    },
    error: function (error){
      console.error(error);
    }
  });
  }
  function removeGifs() {
    // Remove all GIFs from the page
    $('img').remove();
  }
  
  // Get references to the form and input elements
  
  
  // Add an event listener to the form for the submit event
  $('form').submit(searchGiphy);
  
  // Get a reference to the remove button and add a click event listener
  $('#remove-gifs').click(removeGifs);