// File: js/builder.js
const form = document.getElementById('builderForm');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const brand = document.getElementById('brandName').value.trim();
  const ids   = ['imgSummer','imgFall','imgWinter','imgSpring'];

  const fileToDataURL = file => new Promise(res=>{
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.readAsDataURL(file);
  });

  const images = {};
  for(const id of ids){
    const file = document.getElementById(id).files[0];
    images[id.replace('img','').toLowerCase()] = file ? await fileToDataURL(file) : '';
  }

  localStorage.setItem('clothingSiteData', JSON.stringify({brand,images}));
  window.location.href = 'preview.html';
});
