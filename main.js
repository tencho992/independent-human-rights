function getResults(){
  
  const userInput = document.querySelector('#userInput').value.toLowerCase()

  fetch(`/api/${userInput}`)
  .then(response => response.json())
  .then((data) => {

    console.log(data);
    document.querySelector('#placeToSee').textContent= `${data.age}, ${data.birthName}, ${data.birthLocation}`


  });

}
document.querySelector('#submit').addEventListener('click', getResults)
