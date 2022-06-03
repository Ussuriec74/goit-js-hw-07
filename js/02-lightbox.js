import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteinerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);


galleryConteinerRef.insertAdjacentHTML("afterbegin", galleryMarkup);



function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
</a>
    `;
  }).join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

console.log(galleryItems);

