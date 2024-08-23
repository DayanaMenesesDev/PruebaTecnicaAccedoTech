const imgContainer = document.getElementById('img');
const playContainer = document.getElementById('play');
const audioContainer = document.getElementById('audio');
const containerText = document.querySelector('.main__newPublication__form__containerText');
const mainPublications = document.querySelector('.main__publications');
const submit = document.getElementById('submit');
const optionsPost = document.getElementById('optionsPost')
const UserName = 'Pepito Pérez';
const textarea = document.getElementById('textarea')
const main__newPublication = document.querySelector('.main__newPublication')
const main__options = document.querySelector('.main__options')
textarea.addEventListener('click',()=> {
    textarea.style.height = '10em'
    optionsPost.style.display = 'flex'
})
document.addEventListener('click',(e)=> {
    if (e.target !== textarea && !main__newPublication.contains(e.target)) {
        textarea.style.height = '3.5em'
        optionsPost.style.display = 'none'
    }
})



const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result;
            img.alt = 'Uploaded Multimedia';
            containerText.appendChild(img);
            localStorage.setItem('file', reader.result);
        };
        reader.readAsDataURL(file);
    }
};

[imgContainer, playContainer, audioContainer].forEach(container => 
    container.addEventListener('change', handleFileChange)
);

submit.addEventListener('click', () => {
    const text = document.getElementById('textarea').value.trim();
    console.log(text);
    
    if (text) localStorage.setItem('textPublic', text);
});

const generateRandomMetrics = (max) => ({
    likes: max >= 1000 ? `${Math.floor(max / 1000)}k` : max,
    comments: Math.floor(Math.random() * 1000),
    shares: Math.floor(Math.random() * 69)
});

const createPost = () => {
    const postSave = localStorage.getItem('file') || 'img.png';
    const textSave = localStorage.getItem('textPublic') || '';
    
    if (postSave) {
        const metrics = generateRandomMetrics(Math.floor(Math.random() * 1500));
        
        const article = document.createElement('article');
        article.classList.add('main__publications__publication');
        article.innerHTML = `
            <div>
                <div>
                    <img src="./public/upload/avatar.jpg" alt="Avatar">
                    <h3>${UserName}</h3>
                    <p>Just now <i class="fa-solid fa-earth-americas"></i></p>
                </div>
                <div><i>...</i></div>
            </div>
            <p>${textSave}</p>
            <img id="imgPublic" src="${postSave}" alt="User Uploaded File">
            <h5>
                <span><i class="fa-brands fa-gratipay"></i> ${metrics.likes} Likes</span>
                <span><i class="fa-solid fa-comment"></i> ${metrics.comments} Comments</span>
                <span><i class="fa-solid fa-share"></i> ${metrics.shares} Shares</span>
            </h5>
        `;
        mainPublications.appendChild(article);
        localStorage.clear();
    }
};

document.addEventListener('DOMContentLoaded', createPost);
