fetch('http://localhost:3000/characters')
    .then((resp) => resp.json())
    .then((characterObjects) => characterObjects.forEach((characters) => renderCharacter(characters)))

const characters1 = document.querySelector('#character-bar')

function renderCharacter(characters) {
    const charactersCard = document.createElement('span')
    charactersCard.className = 'card'
    console.log(charactersCard)

    const p = document.createElement('p')
    p.textContent = characters.name
    console.log(p)

    const img = document.createElement('img')
    img.src = characters.image
    img.className = 'characters-avatar'
    console.log(img)

    const h4 = document.createElement('h4')
    h4.textContent = `Total votes ${votes-form}`
    console.log(h4)
    
    // charactersCard.append()
    charactersCard.append(p)
    charactersCard.append(img)
    charactersCard.append(h4)
    
    characters1.appendChild(charactersCard)

}

const form = document.querySelector('#characterInfo')

function handleSubmit(e) {
    e.preventDefault()

    const characterObject = {
        "id": e.target.id.value,
        "name": e.target.name.value,
        "image": e.target.image.value,
        "votes": e.target.votes.value
    }

    renderCharacter(characterObject)

    e.target.reset()
}