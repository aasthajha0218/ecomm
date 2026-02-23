document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // simple cart toast
  const toast = document.getElementById('toast');
  function showToast(msg){
    toast.textContent = msg; toast.style.display='block';
    setTimeout(()=>{toast.style.display='none'},2200);
  }

  // product add handlers
  let cartCount = 0;
  const cartCountEl = document.querySelector('.cart-count');
  const cartBtn = document.querySelector('.cart-btn');
  document.querySelectorAll('.add-cart').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const card = e.target.closest('.product');
      const name = card.dataset.name; const price = card.dataset.price;
      cartCount += 1;
      showToast(`${name} added — $${price} (cart ${cartCount})`);
      if(cartCountEl){
        cartCountEl.textContent = cartCount;
      }
      if(cartBtn){
        cartBtn.classList.add('cart-pulse');
        setTimeout(()=>cartBtn.classList.remove('cart-pulse'),260);
      }
    });
  });

  // newsletter form
  const form = document.getElementById('newsletter-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      showToast('Thanks — we will reach out shortly');
      form.reset();
    });
  }
});
