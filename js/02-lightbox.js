import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);
//1
const galleryContent = document.querySelector('ul.gallery');
function markup(items) {
  return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
              <img class="gallery__img" src="${preview}" alt="${description}" /></a></li>`;
  }).join('');
}
galleryContent.innerHTML = markup(galleryItems);
//4
let gallery = new SimpleLightbox('ul.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
