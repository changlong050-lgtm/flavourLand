const header = document.querySelector('header')

// create a div element with a class name header-container
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.jpg'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'flavourLand'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.setAttribute('role', 'button')
headerButton.addEventListener('click', function handleClick (event){
    window.location='/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)