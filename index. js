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
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '94f93722f0msh77dde61d8d67535p1ca6f4jsne1de877646e0',
					'X-RapidAPI-Host': 'text-to-image7.p.rapidapi.com'
				}
			};
		const url = "https://text-to-image7.p.rapidapi.com/?prompt=box&batch_size=1";
		let response = 
		await fetch(url,options); 
		console.log(response);
		if (!response.ok) { 
			throw new Error('Unable to fetch the data'); 
		} 
		imageContainerText.innerText = 
		"Below is your generated Image:"; 
		imageContainer.style.display = "block"; 
		imageGenerated.src = response.url; 
		console.log(response.url); 
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
