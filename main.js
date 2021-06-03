let data = JSON.parse (localStorage.getItem('data')) || [
    
]


data.forEach(value => {
    const newLiElement = document.createElement('li')
    newLiElement.textContent = value
    list.appendChild(newLiElement)
})

form_element.addEventListener('submit', event => {
    event.preventDefault()
    const newLiElement = document.createElement('li')
    newLiElement.textContent = name_element.value
    
    list.appendChild(newLiElement)
    data.push({
        name: name_element.value
       
    })
    localStorage.setItem('data', JSON.stringify(data))

    form_element.reset()
})