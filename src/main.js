import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PAGE_SIZE } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  LoadMoreGallery,
} from './js/render-functions';

const refs = {
  formElem: document.querySelector('.form'),
  galleryElem: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let userValue;
let currentPage = 0;
let maxPage = 0;

// =============== основний код =================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  showLoader();

  userValue = e.target.elements['search-text'].value.trim();
  currentPage = 1;

  if (userValue !== '') {
    clearGallery();
    const data = await getImagesByQuery(userValue, currentPage);
    if (data.hits.length > 0) {
      createGallery(data.hits);
      hideLoader();

      maxPage = Math.ceil(data.totalHits / PAGE_SIZE);
      updateBtnStatus();
      arcticleNotification();
    } else {
      hideLoader();
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        maxWidth: '432px',
        messageColor: '#ffffff',
        close: true,
        closeOnClick: true,
        icon: 'icon-error',
      });

      refs.galleryElem.innerHTML = '';
    }
  }

  e.target.reset();
});

// ============== регулює Load more ================

function updateBtnStatus() {
  if (currentPage < maxPage) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}

function arcticleNotification() {
  if (currentPage === maxPage) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomRight',
      backgroundColor: '#ef4040',
      maxWidth: '432px',
      messageColor: '#ffffff',
    });
  }
}
// ==================== Пагінація ===================

refs.loadMoreBtn.addEventListener('click', async e => {
  showLoader();

  currentPage += 1;

  updateBtnStatus();
  arcticleNotification();
  const data = await getImagesByQuery(userValue, currentPage);
  if (data.hits.length > 0) {
    LoadMoreGallery(data.hits);
    hideLoader();
  }
});
