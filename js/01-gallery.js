import { galleryItems } from './gallery-items.js';
const galleryContent = document.querySelector('.gallery');
galleryContent.innerHTML = markup(galleryItems);
galleryContent.addEventListener('click', onGetImage);

function markup(items) {
  return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__img" src="${preview}" 
                data-source="${original}" alt="${description}" /></a></li>`;}).join('');}

function onGetImage(e) {
  e.preventDefault();
  const { target } = e;
  if (!target.classList.contains('gallery_img')) {
    return; }
  const instance = basicLightbox.create(`<img src="${target.dataset.cource}"/>`,
    { onShow: () => window.addEventListener('keydown', onActiveButton),
      onClose: () => window.removeEventListener('keydown', onActiveButton), });
  instance.show(); 

  function onActiveButton(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}