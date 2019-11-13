'use strict';

import images from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const buttonCloseModal = document.querySelector(
  '.lightbox__button[data-action="close-lightbox"]',
);

const makeItem = object => `
<li class="gallery__item">
  <a class="gallery__link" href="${object.original}">
    <img 
      class="gallery__image" src="${object.preview}" data-source="${object.original}" alt="${object.description}"
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>
`;

const galleryList = images.map(image => makeItem(image)).join('');

gallery.insertAdjacentHTML('afterbegin', galleryList);

const openModal = event => {
  event.preventDefault();
  lightbox.classList.add('is-open');
  lightboxImage.setAttribute('src', event.target.dataset.source);
  lightboxImage.setAttribute('alt', event.target.alt);
  window.addEventListener('keydown', closeEsc);
  window.addEventListener('keydown', nextPicture);
};

const closeModal = event => {
  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
  window.removeEventListener('keydown', closeEsc);
  window.removeEventListener('keydown', nextPicture);
};

const closeBackdrop = event => {
  if (event.target === lightboxImage) {
    return;
  }
  closeModal();
};

const closeEsc = event => {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
};

const nextPicture = event => {
  if (event.code !== 'ArrowRight') {
    return;
  }

  lightboxImage.setAttribute(
    'src',
    event.target.parentNode.nextElementSibling.firstElementChild
      .firstElementChild.dataset.source,
  );
};

gallery.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);
lightbox.addEventListener('click', closeBackdrop);
