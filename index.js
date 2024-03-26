let generateImageForm = 
	document.getElementById('generate-image-form'); 
let formInput = 
	document.getElementById('input-value'); 
let imageContainerText = 
	document.getElementById('imageContainerText'); 
let imageGenerated = 
	document.getElementById('generated-image'); 
let imageContainer = 
	document.getElementById('images-visible'); 

async function fetchImages(category) { 
	try { 
		const options = {
				method: 'POST',
				headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': '94f93722f0msh77dde61d8d67535p1ca6f4jsne1de877646e0',
				'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
				},
				body: {text: category}
			};
		console.log(options);
		const url = "https://chatgpt-42.p.rapidapi.com/texttoimage";
		// let response = 
		// await fetch(url,options); 
		// let result = response.text();
		// console.log(result);
		// console.log(result['generated_image']);
		// console.log(result.generated_image);
		fetch('https://example.com/api/data')
		  .then(response => {
		    if (!response.ok) {
		      throw new Error('Network response was not ok');
		    }
		    return response.text(); // This returns a promise
		  })
		  .then(textPromise => {
		    return textPromise.then(text => {
		      console.log(text); // This prints the response text
		    });
		  })
		  .catch(error => {
		    console.error('Error fetching data:', error);
		  });
				
		if (!response.ok) { 
			throw new Error('Unable to fetch the data'); 
		} 
		// imageContainerText.innerText = 
		// "Below is your generated Image:"; 
		// imageContainer.style.display = "block"; 
		// imageGenerated.src = result['generated_image'];
	} 
	catch (error) { 
		console.log(error); 
	} 
} 

generateImageForm.addEventListener('submit', (e) => { 
	e.preventDefault(); 
	let enteredText = formInput.value; 
	if (enteredText !== "") { 
		fetchImages(enteredText); 
	} 
	else { 
		imageContainerText.innerText = 
			"Input field can not be empty!"; 
	} 
})
