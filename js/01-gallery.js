import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContent = document.querySelector('.gallery');
galleryContent.innerHTML = markup(galleryItems);
galleryContent.addEventListener('click', onGetImage);
function markup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__img" src="${preview}" data-src="${original}" alt="${description}" />
            </a>
            </li>`; }).join('');}
function onActiveButton(element) {
    if (element.code === "Escape") {
      instance.close();}
    }
function onGetImage(element) {
  element.preventDefault();
  const { target } = element;
  if (!target.classList.contains('gallery_img')) {
    return; }
  const content = basicLightbox.create(`<img src="${target.dataset.cource}"/>`,
    { onShow: () => window.addEventListener('keydown', onActiveButton),
      onClose: () => window.removeEventListener('keydown', onActiveButton), });
  content.show(); 
}
console.log(galleryItems);  
