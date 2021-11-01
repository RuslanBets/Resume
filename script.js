const photos = document.querySelectorAll('.wrapper img')
const glass = document.querySelector('.glass')
const photo = glass.firstChild
let rotationAngle = 0
let screenRatio,photoRatio

 

photos.forEach(photo => photo.onclick = handleClickToEnlarge)

glass.onclick = hidePhoto

document.body.onkeydown = e => {
  if (e.key === 'ArrowRight') rotatePhoto()
  else if (e.key === 'ArrowLeft') rotatePhoto(true)
}

function handleClickToEnlarge(e) {
  showPhoto(e.target.src)
}


function showPhoto(path) {
  glass.hidden = false
  photo.src = path
}

function hidePhoto() {
  glass.hidden = true
}

function rotatePhoto(anticlockwise = false) {
  rotationAngle = rotationAngle + 90 - 180 * anticlockwise
  photo.style.transform = `rotate(${rotationAngle}deg)`
}


function updatePhotoRatio() {

}

function updateScreenRatio() {
  screenRatio = innerWidth / innerHeight
}
