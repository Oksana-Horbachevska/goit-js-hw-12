import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader-wrapper');
const loadMoreBtn = document.querySelector('.load-more-btn');
// ==================== розміткa ====================

function imageTemplate(obj) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${obj.largeImageURL}">
    <img
      class="gallery-image"
      src="${obj.webformatURL}"
      alt="${obj.tags}"
    />
  </a>
   <div class="info">
          <p><b>Likes:</b> ${obj.likes}</p>
          <p><b>Views:</b> ${obj.views}</p>
          <p><b>Comments:</b> ${obj.comments}</p>
          <p><b>Downloads:</b> ${obj.downloads}</p>
        </div>
</li>
`;
}

export function createGallery(images) {
  const markup = images.map(imageTemplate).join('\n');
  galleryElem.innerHTML = markup;
  lightbox.refresh();
}

export function LoadMoreGallery(images) {
  const markup = images.map(imageTemplate).join('\n');
  galleryElem.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// ================= очищає вміст контейнера ====================

export function clearGallery() {
  galleryElem.innerHTML = '';
}

// =================прибирає клас до Loader ====================

export function showLoader() {
  loaderElem.classList.remove('hidden');
}

// =================  додає клас до Loader ====================

export function hideLoader() {
  loaderElem.classList.add('hidden');
}

// ================= прибирає клас до Load more ====================

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

// ================= додає клас до Load more ====================

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
