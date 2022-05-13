//Example fetch
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('#characterName').value
  choice = capitalizeFirstLetter(choice)
  let url = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data[0].name.includes('(') && !data[1].name.includes('(')) {
          document.querySelector('h2').innerText = data[1].name
          document.querySelector('img').src = data[1].photoUrl
          document.querySelector('#ally').innerText = data[1].allies
          document.querySelector('#enemy').innerText = data[1].enemies
          document.querySelector('#affiliation').innerText = data[1].affiliation
        }
        else{
        document.querySelector('h2').innerText = data[0].name
        document.querySelector('img').src = data[0].photoUrl
        document.querySelector('#ally').innerText = data[0].allies
        document.querySelector('#enemy').innerText = data[0].enemies
        document.querySelector('#affiliation').innerText = data[0].affiliation
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


function capitalizeFirstLetter(str){
  let result = str.toLowerCase().split(' ')
  let final = result.map(x => x.charAt(0).toUpperCase() + x.slice(1))
  final = final.join(' ')
  return final
}