document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(560,30,90,5)';
  document.querySelector('body').textContent = 'Awesome Choice My GUYYYYYYY'

}

function partyGreen() {
  document.querySelector('body').style.backgroundColor= 'green';
  document.querySelector('body').textContent = 'Not GoNnA LiE iTs BettEr thAN Naruto'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor= 'blue';
  document.querySelector('body').textContent = 'You CAn Not Go WronG With this Choice Cause tHe One Piece Is REALLLLL!!!'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('body').textContent = 'LoL i Have Not gOtten The ChAnce to start thIs But i Hear GOOD THINGSSS' 
}