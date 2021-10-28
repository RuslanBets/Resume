const photos = document.querySelectorAll('.wrapper img')
const glass = document.querySelector('.glass')
const photo = glass.firstChild

photos.forEach(photo => photo.onclick = handleClickToEnlarge)

glass.onclick = hidePhoto

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