

let data = JSON.parse(localStorage.getItem('data')) || []


data.forEach(value => {
    const newLiElement = document.createElement('li')
    const name = document.createElement('p')
    const region = document.createElement('p')
    const city = document.createElement('p')
    name.textContent = value.name
    region.textContent = value.regions
    city.textContent = value.cities
    
    newLiElement.appendChild(name)
    newLiElement.appendChild(region)
    newLiElement.appendChild(city)
    list.appendChild(newLiElement)
})

form_element.addEventListener('submit', event => {
    event.preventDefault()
    const newLiElement = document.createElement('li')
    const name = document.createElement('p')
    const region = document.createElement('p')
    const city = document.createElement('p')
    name.textContent = name_element.value
    region.textContent = regions.value
    city.textContent = cities.value
    
    newLiElement.appendChild(name)
    newLiElement.appendChild(region)
    newLiElement.appendChild(city)
    list.appendChild(newLiElement)
    data.push({
        name: name_element.value,
        regions: regions.value,
        cities: cities.value
    })
    localStorage.setItem('data', JSON.stringify(data))
    
    form_element.reset()
})



const DATA = [
    {
        id: 1,
        name: name_element,
        // regions: regions.value,
        // cities: cities.value
    }
]

let regions = document.querySelector("#regions")
let cities = document.querySelector("#cities")

let city = {
    "Tashkent": ['Chilonzor Tumani', 'Yunusobod Tumani', 'Shayxontohur Tumani', 'Olmazor Tumani'],
    "Tashkent region": ['Bekobod Tumani', 'Zangiota Tumani', 'Qibray Tumani'],
    "Samarkand": ['Ishtixon Tumani', 'Jomboy Tumani', 'Narpay Tumani'],
    "Qashqadaryo": ['Qarshi Tumani', 'Kitob Tumani', 'Shahrisabz Tumani'],
    "Navoiy": ['Qiziltepa Tumani', 'Zarafshon Tumani', 'Nurota Tumani'],
    "Namangan": ['Chortoq Tumani', 'Kosonsoy Tumani'],
    "Xorazm": ['Xiva Tumani', 'Shovot Tumani'],
    "Jizzakh": ['Dostlik Tumani', 'Paxtakor Tumani', 'Zomin Tumani'],
    "Fergana": ['Oltiariq Tumani', 'Beshariq Tumani'],
    "Bukhara": ['Olot Tumani', 'Kogon Tumani', 'Vobkent Tumani', 'Gijduvon Tumani'],
    "Andijan": ['Asaka Tumani', 'Marhamat Tumani'],
    "Karakalpakstan": ['Amudaryo Tumani', 'Beruniy Tumani']
}

regions.addEventListener('change', () => {
    let selectedOption = city[regions.value]
    
    while(cities.options.length > 0) {
        cities.options.remove(0)
    }
    
    selectedOption.forEach( (el) => {
        let option = new Option(el, el)
        cities.appendChild(option)
    })
})





