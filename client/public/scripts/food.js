const renderFood = async () =>{
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/foods')
    const data = await response.json()
    
    const foodContent = document.getElementById('food-content')
    
    if(data){
        
        food = data.find(food => food.id ===requestedID)
        

        document.getElementById('image').src = food.imageUrl
        document.getElementById('name').textContent = food.name
        document.getElementById('area').textContent = 'Area: ' + food.country
        
        
        document.getElementById('description').textContent = food.description
        document.getElementById('recipe').textContent = 'Recipe: ' + food.recipe
        document.title = `flavourLand - ${food.name}`
    }else{
        const message = document.createElement('h2')
        message.textContent = 'No foods Available'
        foodContent.appendChild(message)
    }

}

renderFood()