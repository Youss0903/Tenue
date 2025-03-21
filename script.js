let currentStep = 1;
let imageIndex = 0;

const tshirts = [
    'images/tshirt/tshirt1.png',
    'images/tshirt/tshirt2.png',
    'images/tshirt/tshirt3.png'
];

const hauts = [
    'images/haut/haut1.png',
    'images/haut/haut2.png',
    'images/haut/haut3.png',
    'images/haut/haut4.png',
    'images/haut/haut5.png',
    'images/haut/haut6.png',
    'images/haut/haut7.png',
    'images/haut/haut8.png',
    'images/haut/haut9.png',
    'images/haut/haut10.png'
];

const basOptions = [
    'images/bas/bas1.png',
    'images/bas/bas2.png',
    'images/bas/bas3.png',
    'images/bas/bas4.png'
];

let selections = {
    tshirt: '',
    haut: '',
    bas: '',
    doudoune: null
};

function updateImage() {
    let imgElement = document.getElementById('current-item');
    let array = currentStep === 1 ? tshirts : currentStep === 2 ? hauts : basOptions;
    imgElement.src = array[imageIndex];
}

function nextImage() {
    let array = currentStep === 1 ? tshirts : currentStep === 2 ? hauts : basOptions;
    imageIndex = (imageIndex + 1) % array.length;
    updateImage();
}

function validateItem() {
    const currentImg = document.getElementById('current-item').src;
    if (currentStep === 1) {
        selections.tshirt = currentImg;
        document.getElementById('preview').innerHTML = `<img src="${currentImg}">`;
        currentStep = 2;
    } else if (currentStep === 2) {
        selections.haut = currentImg;
        document.getElementById('preview').innerHTML += `<img src="${currentImg}">`;
        currentStep = 3;
    } else if (currentStep === 3) {
        selections.bas = currentImg;
        document.getElementById('preview').innerHTML += `<img src="${currentImg}">`;
        document.getElementById('doudoune-selection').style.display = 'block';
        return;
    }
    imageIndex = 0;
    updateImage();
}

function chooseDoudoune(choice) {
    selections.doudoune = choice;
    document.getElementById('doudoune-selection').style.display = 'none';
    document.getElementById('preview').innerHTML += `<div>${choice ? '✅ Doudoune' : '❌ Doudoune'}</div>`;
    showFinal();
}

function showFinal() {
    const final = document.getElementById('final-preview');
    final.innerHTML = `
        <img src="${selections.tshirt}">
        <img src="${selections.haut}">
        <img src="${selections.bas}">
        <div style="font-size:18px;">${selections.doudoune ? '✅ Doudoune' : '❌ Doudoune'}</div>
    `;
    document.getElementById('final-screen').style.display = 'block';
    document.getElementById('preview-container').style.display = 'none';
}

// Reset bouton
document.getElementById('reset-button').addEventListener('click', () => {
    location.reload();
});

// Kamis bouton (tu peux mettre un lien ou un autre comportement ici)
document.getElementById('kamis-button').addEventListener('click', () => {
    alert('Accès aux Kamis à venir...');
});
