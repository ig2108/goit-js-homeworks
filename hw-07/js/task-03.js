'use strict';

const log = function(item) {
  console.log(item);
};

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const createGallery = function(array) {
  const items = [];
  array.map(el => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');
    const image = createImg(el);
    galleryItem.append(image);
    items.push(galleryItem);
  });
  return items;
};

const createImg = function(object) {
  const imgWrap = document.createElement('div');
  imgWrap.classList.add('img-wrap');
  // 1 вариант
  const img = document.createElement('img');
  img.classList.add('gallery-img');
  img.src = object.url;
  img.alt = object.alt;
  // ===========================================
  // 2 вариант
  // imgWrap.insertAdjacentHTML(
  //   'afterbegin',
  //   `<img src="${object.url}" alt="${
  //     object.alt
  //   }" class="gallery-img">`,
  // );
  // const img = document.querySelector('.img');
  // // ===========================================
  imgWrap.append(img);
  return imgWrap;
};

const galleryItems = createGallery(images);

gallery.append(...galleryItems);
