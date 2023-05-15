const widthElement = document.getElementById('width')
const varnishingYesElement = document.getElementById("varnishing-yes")
const varnishingNoElement = document.getElementById("varnishing-no")
const packagingYesElement = document.getElementById("packaging-yes")
const packagingNoElement = document.getElementById("packaging-no")
const bagetYesElement = document.getElementById("baget-yes")
const bagetNoElement = document.getElementById("baget-no")
const priceElement = document.getElementById("price")

function handlePrice() {
    const widthPrice = +widthElement.value
    const varnishingPrice = varnishingYesElement.checked ? 300 : 0
    const packagingPrice = packagingYesElement.checked ? 500 : 0
    const bagetPrice = bagetYesElement.checked ? 700 : 0
    console.log({ widthPrice, varnishingPrice });
    console.log(widthPrice + varnishingPrice)
    const cost = widthPrice + varnishingPrice + packagingPrice + bagetPrice
    priceElement.textContent = cost
}

widthElement.addEventListener('change', handlePrice)
varnishingYesElement.addEventListener('change', handlePrice)
varnishingNoElement.addEventListener('change', handlePrice)
packagingYesElement.addEventListener('change', handlePrice)
packagingNoElement.addEventListener('change', handlePrice)
bagetYesElement.addEventListener('change', handlePrice)
bagetNoElement.addEventListener('change', handlePrice)

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSendz(e) {
        e.preventDefault();
    
        let formData = new FormData(form);
    formData.append('image', formImage.files[0]);

    if (error === 0) {
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (responce.ok){
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
        } else {
            alert("Ошибка");
        }        
    }else {
        alert('Заполните обязательные поля');
    }
    }    
});
  




const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
});

function uploadFile(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешены только изображения.');
        formImage.value = '';
        return;
    }

    if (file.size > 10 * 1024 * 1024) {
        alert('Файл должен быть менее 2 МБ');
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="foto">`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');
    };
    reader.readAsDataURL(file);   
}

const formImagepopup = document.getElementById('formImagepopup');
const formPreviewpopup = document.getElementById('formPreviewpopup');

formImagepopup.addEventListener('change', () => {
    uploadFiles(formImagepopup.files[0]);
});

function uploadFiles(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешены только изображения.');
        formImagepopup.value = '';
        return;
    }

    if (file.size > 10 * 1024 * 1024) {
        alert('Файл должен быть менее 2 МБ');
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        formPreviewpopup.innerHTML = `<img src="${e.target.result}" alt="foto">`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');
    };
    reader.readAsDataURL(file);   
}


const widthElementTwo = document.getElementById('width-two')
const varnishingYesElementTwo = document.getElementById("varnishing-yes-two")
const varnishingNoElementTwo = document.getElementById("varnishing-no-two")
const packagingYesElementTwo = document.getElementById("packaging-yes-two")
const packagingNoElementTwo = document.getElementById("packaging-no-two")
const bagetYesElementTwo = document.getElementById("baget-yes-two")
const bagetNoElementTwo = document.getElementById("baget-no-two")
const priceElementTwo = document.getElementById("price-two")

function handlePriceTwo() {
    const widthPriceTwo = +widthElementTwo.value
    const varnishingPriceTwo = varnishingYesElementTwo.checked ? 300 : 0
    const packagingPriceTwo = packagingYesElementTwo.checked ? 500 : 0
    const bagetPriceTwo = bagetYesElementTwo.checked ? 700 : 0
    console.log({ widthPriceTwo, varnishingPriceTwo });
    console.log(widthPriceTwo + varnishingPriceTwo)
    const cost = widthPriceTwo + varnishingPriceTwo + packagingPriceTwo + bagetPriceTwo
    priceElementTwo.textContent = cost
}

widthElementTwo.addEventListener('change', handlePriceTwo)
varnishingYesElementTwo.addEventListener('change', handlePriceTwo)
varnishingNoElementTwo.addEventListener('change', handlePriceTwo)
packagingYesElementTwo.addEventListener('change', handlePriceTwo)
packagingNoElementTwo.addEventListener('change', handlePriceTwo)
bagetYesElementTwo.addEventListener('change', handlePriceTwo)
bagetNoElementTwo.addEventListener('change', handlePriceTwo)

const popUp = document.querySelector('.pop__up')
const popUpClose = document.querySelector('.pop__up--close')

function close() {
    let popUp = document.querySelector('.pop__up')
    popUp.classList.remove('active')
}

popUpClose.addEventListener('click', close)

let btns = document.querySelectorAll(".pop__up--btn");
let popups = document.querySelectorAll(".pop__up");

function openPopup() {
    const popUp = document.querySelector('.pop__up');
    popUp.classList.toggle('active');
}

btns.forEach(btn => btn.addEventListener('click', openPopup));
