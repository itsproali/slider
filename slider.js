const displayImage = document.getElementById('image-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const images = [
    "img/image-1.jpg",
    "img/image-2.jpg",
    "img/image-3.jpg",
    "img/image-4.jpg",
    "img/image-5.jpg",
    "img/image-6.jpg",
    "img/image-7.jpg",
];

let imageIndex = 0;
displayImage.innerHTML = `
<img class="image" src="${images[imageIndex]}">
`;
setInterval(() => {
    if (imageIndex >= images.length -1) {
        imageIndex = 0;
        --imageIndex;
    }
    ++imageIndex;
    const imageUrl = images[imageIndex];
    displayImage.innerHTML = `
    <img class="image" src="${imageUrl}">
    `;
}, 4000);

nextBtn.addEventListener('click', () => {
    if (imageIndex >= images.length-1) {
        imageIndex = -1;
    }
    ++imageIndex;
    const imageUrl = images[imageIndex];
    displayImage.innerHTML = `
    <img class="image" src="${imageUrl}">
    `;
})

prevBtn.addEventListener('click', () => {
    if (imageIndex < 1) {
        imageIndex = images.length;
    }
    --imageIndex;
    const imageUrl = images[imageIndex];
    displayImage.innerHTML = `
    <img class="image" src="${imageUrl}">
    `;
})

