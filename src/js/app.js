const cellphoneImageArea = document.getElementById('cellphoneImageArea')
const cellphoneImage = document.querySelector('img')

const storageSelectionButton = [
  document.getElementById('64GbBtn'),
  document.getElementById('128Gbbtn')
]

const [sixtyFourGbButton, hundredTwentyEightButton] = storageSelectionButton

let howManyStorage = '64GB'

sixtyFourGbButton.addEventListener('click', () => {
  howManyStorage = '64GB'
})

hundredTwentyEightButton.addEventListener('click', () => {
  howManyStorage = '128GB'
})

const colorSelectionOptions = [
  '#187fce',
  '#e4664f',
  '#1b1b1d',
  '#ffffff'
]

const [blueIphone, coralIphone, blackIphone, whiteIphone] = colorSelectionOptions


const colorsButton = [
  document.getElementById('blueColorBtn'),
  document.getElementById('coralColorBtn'),
  document.getElementById('blackColorBtn'),
  document.getElementById('redColorBtn'),
]

const [blueColorBtn, coralColorBtn, blackColorBtn, redColorBtn] = colorsButton


const selectedIphoneText = document.getElementById('selectedIphone')

const changeBackgroundAndIphoneColor = () => {

  blueColorBtn.addEventListener('click', () => {
    cellphoneImage.src = 'images/iphonexr-blue.jpg'
    cellphoneImageArea.style.background = blueIphone
    selectedIphoneText.innerHTML = `<p>Selected <span>iPhone XR Blue ${howManyStorage}</span></p>`
  })

  coralColorBtn.addEventListener('click', () => {
    cellphoneImage.src = 'images/iphonexr-coral.png'
    cellphoneImageArea.style.background = coralIphone
    selectedIphoneText.innerHTML = `<p>Selected <span>iPhone XR Coral ${howManyStorage}</span></p>`
  })

  blackColorBtn.addEventListener('click', () => {
    cellphoneImage.src = 'images/iphonexr-black.png'
    cellphoneImageArea.style.background = blackIphone
    selectedIphoneText.innerHTML = `<p>Selected <span>iPhone XR Black ${howManyStorage}</span></p>`
  })
}

changeBackgroundAndIphoneColor()