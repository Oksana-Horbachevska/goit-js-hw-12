import axios from 'axios';

// ===============функція js-fetch запиту =================

// export function getImagesByQuery(query) {
//   const BASE_URL = 'https://pixabay.com/';
//   const END_POINTS = 'api/';
//   const params = new URLSearchParams({
//     key: '50383604-c913cf66ede56daf64b093a7e',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });

//   const url = `${BASE_URL}${END_POINTS}?${params}`;

//   return fetch(url).then(res => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error('Something vent wrong...Please try again');
//     }
//   });
// }

// ===============функція js-axios запиту =================
export const PAGE_SIZE = 15;

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINTS = 'api/';
  const url = BASE_URL + END_POINTS;

  const params = new URLSearchParams({
    key: '50383604-c913cf66ede56daf64b093a7e',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: PAGE_SIZE,
  });

  const res = await axios.get(url, { params });

  return res.data;
}
