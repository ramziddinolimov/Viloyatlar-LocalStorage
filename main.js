

<<<<<<< HEAD
// const DATA = [
//     {
//      name: "Xudoyorxon saroyi",
//      img: "https://pastvu.com/_p/d/i/j/p/ijpst3jnf4fg1spzze.jpg",
//      region: "Fergana",
//      costForChildren: 3000,
//      cost: 10000
//     },
//     {
//      name: "Registon saroyi",
//      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Registan%2C_Samarkand%2C_Uzbekistan.JPG/800px-Registan%2C_Samarkand%2C_Uzbekistan.JPG",
//      region: "Samarkand",
//      costForChildren: 5000,
//      cost: 20000
//     },
//     {
//      name: "Ichanqala",
//      img: "https://media-cdn.tripadvisor.com/media/photo-s/15/3c/24/ce/ichan-qal-a.jpg",
//      region: "Xiva",
//      costForChildren: 1000,
//      cost: 5000
//     }
//    ]


   let data = JSON.parse(localStorage.getItem('data')) || []
=======
let data = JSON.parse(localStorage.getItem('data')) || []
>>>>>>> 4028e13593dc9d6a4861477abb95b103d2655408


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
<<<<<<< HEAD
    "Tashkent": ['city1', 'city2', 'city3', 'city4'],
    "Tashkent region": ['city1', 'city2', 'city3', 'city4', 'city5', 'city6', 'city7'],
    "Samarkand": ['city1'],
    "Qashqadaryo": ['city1', 'city2', 'city3', 'city4'],
    "Navoiy": ['city1', 'city2', 'city3', 'city4'],
    "Namangan": ['city1', 'city2', 'city3', 'city4'],
    "Xorazm": ['city1', 'city2', 'city3', 'city4'],
    "Jizzakh": ['city1', 'city2', 'city3', 'city4'],
    "Fergana": ['city1', 'city2', 'city3', 'city4'],
    "Bukhara": ['city1', 'city2', 'city3', 'city4'],
    "Andijan": ['city1', 'city2', 'city3', 'city4'],
    "Karakalpakstan": ['city1', 'city2', 'city3', 'city4']
=======
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
>>>>>>> 4028e13593dc9d6a4861477abb95b103d2655408
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





<<<<<<< HEAD




  
=======
>>>>>>> 4028e13593dc9d6a4861477abb95b103d2655408
