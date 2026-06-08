const renderFoods = async ()=>{
    const response = await fetch('/foods')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if(data){
        data.map(food=>{
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${food.imageUrl})`

            const name = document.createElement('h3')
            name.textContent = food.name
            bottomContainer.appendChild(name)

            const country = document.createElement('p')
            country.textContent = 'Area: ' + food.country
            bottomContainer.appendChild(country)

            const description = document.createElement('p')
            description.textContent = 'Descritption: '+ food.description
            bottomContainer.appendChild(description)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/foods/${food.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })

    }
    else{
        const message = document.createElement('h2')
        message.textContent = 'No foods Available'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if(requestedUrl){
    window.location.href='../404.html'
}else{
renderFoods()
}
