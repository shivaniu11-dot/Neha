// script.js — slider, gallery lightbox, booking -> whatsapp handler
document.addEventListener('DOMContentLoaded', function(){
  // simple slider
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  const show = i=>{
    slides.forEach(s=>s.classList.remove('active'));
    slides[i].classList.add('active');
  };
  show(idx);
  const next = ()=>{ idx = (idx+1)%slides.length; show(idx); };
  const prev = ()=>{ idx = (idx-1+slides.length)%slides.length; show(idx); };
  const t = setInterval(next, 6000);
  document.querySelector('.slider-next').addEventListener('click', ()=>{ next(); clearInterval(t); });
  document.querySelector('.slider-prev').addEventListener('click', ()=>{ prev(); clearInterval(t); });

  // Booking form -> open whatsapp with prefilled message
  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value || '');
    const phone = encodeURIComponent(document.getElementById('phone').value || '');
    const service = encodeURIComponent(document.getElementById('service').value || '');
    const date = encodeURIComponent(document.getElementById('date').value || '');
    const note = encodeURIComponent(document.getElementById('note').value || '');
    const message = `Hello Neha's Glam Studio%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}%0ANote: ${note}`;
    const url = `https://wa.me/917992044749?text=${message}`;
    window.open(url, '_blank');
  });

  // simple gallery click-to-open
  document.querySelectorAll('.gallery-grid img').forEach(img=>{
    img.style.cursor='pointer';
    img.addEventListener('click', ()=> {
      const overlay = document.createElement('div');
      overlay.style.position='fixed';
      overlay.style.inset='0';
      overlay.style.background='rgba(0,0,0,0.85)';
      overlay.style.display='flex';
      overlay.style.alignItems='center';
      overlay.style.justifyContent='center';
      overlay.style.zIndex=9999;
      const im = document.createElement('img');
      im.src = img.src;
      im.style.maxWidth='90%';
      im.style.maxHeight='90%';
      im.style.borderRadius='8px';
      overlay.appendChild(im);
      overlay.addEventListener('click', ()=> overlay.remove());
      document.body.appendChild(overlay);
    });
  });
});
