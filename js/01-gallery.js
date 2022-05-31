import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteinerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);


galleryConteinerRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryConteinerRef.addEventListener("click", onClickGalleryItem);
window.addEventListener("keydown", onCloseModal);


function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
  }).join("");
}

let modal;

function onClickGalleryItem(event) {
  event.preventDefault();
  const galleryItemLargeImg = event.target.dataset.source;

  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal = basicLightbox.create(
    `<img src = ${galleryItemLargeImg} width = "1280" height = "auto">`
  );
  modal.show();
}

function onCloseModal(event) {
  if (event.code === "Escape") {
    console.log('qwerty')
    modal.close()
  }  
}

console.log(galleryItems);
