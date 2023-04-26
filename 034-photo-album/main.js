async function getImages() {
    // Try / catch blocks in case the api call fails
    try {
        // Fetch the data from the api
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/3/photos?_limit=9');
        // Convert the response 
        const images = await response.json();
        // Return the data
        return images;
    } catch (error) {
        console.log(error);
    }
}

async function displayImages() {
    // Get the array of image objects
    const images = await getImages();
    // Get the container element
    const container = document.getElementById('container');
    // Loop through the array of image objects and create an img element for each
    // using the .url property of each image object
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        container.appendChild(img);
    });
}

displayImages();