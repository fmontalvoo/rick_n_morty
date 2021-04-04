(()=>{"use strict";const n="https://rickandmortyapi.com/api/character",a=async a=>{const e=a?`${n}/${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.error("Fetch error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/home",s=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',t={"/home":async()=>`\n        <div class="Characters">\n            ${(await a()).results.map((n=>`\n                <article class="Characters-card">\n                    <a href="#/${n.id}">\n                        <img src="${n.image}" alt="${n.name}" />\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n            `)).join("")}\n        </div>\n    `,"/:id":async()=>{const n=e(),s=await a(n);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${s.image}" alt="${s.name}" />\n                <h2>${s.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${s.episode.length}</span></h3>\n                <h3>Status: <span>${s.status}</span></h3>\n                <h3>Species: <span>${s.species}</span></h3>\n                <h3>Gender: <span>${s.gender}</span></h3>\n                <h3>Origin: <span>${s.origin.name}</span></h3>\n                <h3>Last Location: ${s.location.name}</h3>\n            </article>\n        </div>\n    `}},r=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="#/home/">\n                        Rick N Morty\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about/">\n                    About\n                </a>\n            </div>\n        </div>\n    ';let r=e(),i=await(n=>n.length<=3?"/home"===n?n:"/:id":`/${n}`)(r),c=t[i]?t[i]:s;a.innerHTML=await c()};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();