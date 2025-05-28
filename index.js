import{a as v,S as M,i as m}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function f(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=f(t);fetch(t.href,o)}})();const p=15;async function g(e,r){const t="https://pixabay.com/"+"api/",o=new URLSearchParams({key:"50383604-c913cf66ede56daf64b093a7e",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:p});return(await v.get(t,{params:o})).data}const h=new M(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery"),y=document.querySelector(".loader-wrapper"),L=document.querySelector(".load-more-btn");function b(e){return`<li class="gallery-item">
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
`);d.innerHTML=r,h.refresh()}function x(e){const r=e.map(b).join(`
`);d.insertAdjacentHTML("beforeend",r),h.refresh()}function q(){d.innerHTML=""}function S(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}function B(){L.classList.remove("hidden")}function O(){L.classList.add("hidden")}const c={formElem:document.querySelector(".form"),galleryElem:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more-btn")};let s,a=0,u=0;c.formElem.addEventListener("submit",async e=>{if(e.preventDefault(),S(),s=e.target.elements["search-text"].value.trim(),a=1,s!==""){q();const r=await g(s,a);r.hits.length>0?(P(r.hits),l(),u=Math.ceil(r.totalHits/p),w(),E()):(l(),m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#ffffff",close:!0,closeOnClick:!0,icon:"icon-error"}),c.galleryElem.innerHTML="")}e.target.reset()});function w(){a<u?B():O()}function E(){a===u&&m.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#ffffff"})}c.loadMoreBtn.addEventListener("click",async e=>{S(),a+=1,w(),E();const r=await g(s,a);r.hits.length>0&&(x(r.hits),l())});
//# sourceMappingURL=index.js.map
