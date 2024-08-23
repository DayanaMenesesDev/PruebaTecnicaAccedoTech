const API_URL = 'https://emoji-api.com/emojis?access_key=8d1760fb77c8b33f8c4ec059d5d7c9442edf570b'
const btnEmoji = document.querySelector('.fa-face-laugh-beam')
const containerEmoji = document.getElementById('containerEmoji')
const closeContainerEmoji = document.querySelector('.fa-xmark')
const fetchEmoji = async () => {
    try {
        const res = await fetch(API_URL)
        const emojis = await res.json()
        return emojis
    } catch (error) {
        console.log(error);
    }
}

const addEmojis = async ()=> {
    const emojis = await fetchEmoji()
    for (let i = 0; i < 80; i++) {
        const span = document.createElement('span')
        span.setAttribute('class', 'emoji')
        span.style.cursor = 'pointer'
        span.innerHTML = emojis[i].character
        containerEmoji.appendChild(span)
    }
}
const OpenContainerEmojis = async () => {
    containerEmoji.classList.toggle('openContainerEmoji')
    const emoji = document.querySelectorAll('.emoji')
    emoji.forEach(emj => {
        emj.addEventListener('click', (e)=> {
            console.log(e.target.textContent);
            textarea.value = textarea.value + textarea.innerHTML.concat(e.target.textContent)
        })
    })
}

addEmojis()



btnEmoji.addEventListener('click', OpenContainerEmojis)

closeContainerEmoji.addEventListener('click', ()=> {
    containerEmoji.classList.toggle('openContainerEmoji')
})

/* 
document.addEventListener('click',(e)=> {
    if (e.target !== closeContainerEmoji && !containerEmoji.contains(e.target)) {
        containerEmoji.classList.toggle('openContainerEmoji')
    }
}) */

