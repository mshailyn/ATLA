document.querySelector('body').addEventListener('mouseover', playAudioStart)
document.querySelector('a').addEventListener('click', muteOrPlay)
const muteButton = document.getElementById('mute')

function muteOrPlay(){
  if(muteButton.classList.contains('fa-volume-high')){
    muteButton.classList.toggle('fa-volume-high')
    muteButton.classList.add('fa-volume-xmark')
    muteAudio()
  }else{
    muteButton.classList.toggle('fa-volume-xmark')
    muteButton.classList.add('fa-volume-high')
    playAudio
  }
}

function playAudioStart(){
  if (muteButton.classList.contains('fa-volume-high')){
  const audio = document.getElementById('audioelement')
  audio.volume = 0.1;
  audio.play()
  }
}

function playAudio(){
  const audio = document.getElementById('audioelement')
  audio.volume = 0.1;
  audio.play()

}

function muteAudio(){
  const audio = document.getElementById('audioelement')
  audio.pause()
}

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
          document.querySelector('#name').innerText = data[1].name
          document.querySelector('img').src = data[1].photoUrl
          document.querySelector('#ally').innerText = data[1].allies
          document.querySelector('#enemy').innerText = data[1].enemies
          document.querySelector('#affiliation').innerText = data[1].affiliation
        }
        else{
        document.querySelector('#name').innerText = data[0].name
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