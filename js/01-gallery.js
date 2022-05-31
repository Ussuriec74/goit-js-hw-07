import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteinerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryConteinerRef.insertAdjacentHTML("afterbegin", galleryMarkup);

console.log(createGalleryMarkup(galleryItems));

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


console.log(basicLightbox);
console.log(galleryItems);
