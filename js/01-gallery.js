import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");
const galleryCard = createGalleryCards(galleryItems);

galleryDiv.innerHTML = galleryCard;
// galleryDiv.insertAdjacentHTML('afterbegin', galleryCard);

function createGalleryCards(images) {
    return images.map(image => 
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`
    ).join('');
}

galleryDiv.addEventListener('click', openImage);

function openImage(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG'){
        return;
    };

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,

);

    instance.show();
    
galleryDiv.addEventListener('keydown', event => {
		if (event.code === 'Escape') {
			instance.close()
		}
	})
}

