/*fetch('http://localhost:3000/characters')
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
}*/

fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((chars) => renderNames(chars))

function renderNames(chars) {

    const characterBar = document.querySelector('#character-bar')

    chars.forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char.name

        characterBar.appendChild(span)

        span.addEventListener('click', renderCharInfo)

        function renderCharInfo() {
            const nameLocation = document.querySelector('#name')
            const imageLocation = document.querySelector('#image')
            const voteLocation = document.querySelector('#vote-count')

            nameLocation.textContent = char.name
            imageLocation.src = char.image
            voteLocation.textContent = char.votes
        }

    
    })

    const form = document.querySelector('#votes-form')

    form.addEventListener('submit', addVotes)

    function addVotes(e) {
        e.preventDefault()

        let previousVotes = document.querySelector('#vote-count').textContent
        let currentVotes = e.target.votes.value

        let totalVotes = parseInt(previousVotes) + parseInt(currentVotes)

        const voteLocation = document.querySelector('#vote-count')

        voteLocation.textContent = totalVotes
    }

}