function searchGiphy(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    
    // Get the value of the input element
    const searchTerm = input.value;
    
    // Make a request to GIPHY using axios
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: searchTerm,
        api_key: '9gJE3YnhPbfuxrGlnJCmtElYnAUeXMbh',
        limit: 10
      }
    })
    .then(response => {
      // Get a random GIF from the response data
      const gif = response.data.data[Math.floor(Math.random() * response.data.data.length)];
    
      // Create a new image element with the GIF URL
      const img = document.createElement('img');
      img.src = gif.images.original.url;
    
      // Append the image element to the body of the page
      document.body.appendChild(img);
    })
    .catch(error => {
      console.error(error);
    });
  }
  function removeGifs() {
    // Remove all GIFs from the page
    const gifs = document.querySelectorAll('img');
    gifs.forEach(gif => gif.remove());
  }
  
  // Get references to the form and input elements
  const form = document.querySelector('form');
  const input = document.querySelector('#search-term');
  
  // Add an event listener to the form for the submit event
  form.addEventListener('submit', searchGiphy);
  
  // Get a reference to the remove button and add a click event listener
  const removeButton = document.querySelector('#remove-gifs');
  removeButton.addEventListener('click', removeGifs);