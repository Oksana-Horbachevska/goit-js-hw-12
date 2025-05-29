import{a as M,S as B,i as m}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const g=15;async function p(e,r){const t="https://pixabay.com/"+"api/",o=new URLSearchParams({key:"50383604-c913cf66ede56daf64b093a7e",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:g});return(await M.get(t,{params:o})).data}const h=new B(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery"),y=document.querySelector(".loader-wrapper"),L=document.querySelector(".load-more-btn");function b(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
   <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
</li>
`}function P(e){const r=e.map(b).join(`
`);u.innerHTML=r,h.refresh()}function q(e){const r=e.map(b).join(`
`);u.insertAdjacentHTML("beforeend",r),h.refresh();const{height:n}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}function x(){u.innerHTML=""}function w(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}function O(){L.classList.remove("hidden")}function S(){L.classList.add("hidden")}const d={formElem:document.querySelector(".form"),galleryElem:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more-btn")};let i,a=0,f=0;d.formElem.addEventListener("submit",async e=>{if(e.preventDefault(),S(),w(),i=e.target.elements["search-text"].value.trim(),a=1,i!==""){x();const r=await p(i,a);r.hits.length>0?(P(r.hits),c(),f=Math.ceil(r.totalHits/g),E(),v()):(c(),m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#ffffff",close:!0,closeOnClick:!0,icon:"icon-error"}),d.galleryElem.innerHTML="")}e.target.reset()});function E(){a<f?O():S()}function v(){a===f&&m.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#ffffff"})}d.loadMoreBtn.addEventListener("click",async e=>{w(),a+=1,E(),v();const r=await p(i,a);r.hits.length>0&&(q(r.hits),c())});
//# sourceMappingURL=index.js.map
