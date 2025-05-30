// File: js/preview.js
const data = JSON.parse(localStorage.getItem('clothingSiteData')||'{}');
const brandName = data.brand || 'Your Brand';
document.querySelectorAll('#brandLogo').forEach(el=> el.textContent = brandName);

document.title = brandName + ' – Shop';

const seasons = [
  {key:'summer',title:'SUMMER'},
  {key:'fall',  title:'FALL'},
  {key:'winter',title:'WINTER'},
  {key:'spring',title:'SPRING'}
];

const grid = document.getElementById('shopGrid');
seasons.forEach(season=>{
  const wrap = document.createElement('article');
  wrap.className = 'cardSeason';

  wrap.innerHTML = `
    <h2>${season.title}</h2>
    <img src="${data.images?.[season.key] || 'https://picsum.photos/400?random=' + season.title}" alt="${season.title}">
    <div class="qtyGroup">
      <button class="dec">−</button>
      <span class="qty">1</span>
      <button class="inc">+</button>
    </div>
    <button class="btnCart">ADD TO CART</button>
  `;

  const qtyEl = wrap.querySelector('.qty');
  wrap.querySelector('.dec').addEventListener('click',()=>{
    let v = +qtyEl.textContent; if(v>1) qtyEl.textContent = v-1;
  });
  wrap.querySelector('.inc').addEventListener('click',()=>{
    let v = +qtyEl.textContent; qtyEl.textContent = v+1;
  });
  wrap.querySelector('.btnCart').addEventListener('click',()=>{
    alert(`Pretend we added ${qtyEl.textContent}× ${season.title} collection to cart!`);
  });

  grid.appendChild(wrap);
});
