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

function sendPaymentWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;
  const note = document.getElementById("note").value;

  if (!name || !phone || !amount) {
    alert("Please fill Name, Phone and Amount");
    return;
  }

  const message =
    `Hello Neha's Glam Studio,%0A%0A` +
    `💄 *Payment Request* 💅%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Service: ${service}%0A` +
    `Date: ${date}%0A` +
    `Amount: ₹${amount}%0A` +
    `Message: ${note || "N/A"}%0A%0A` +
    `Please share WhatsApp Pay / UPI payment link to complete the booking.`;

  const whatsappURL = `https://wa.me/917992044749?text=${message}`;
  window.open(whatsappURL, "_blank");
}

function toggleGallery() {
  const gallery = document.getElementById("moreGallery");
  const btn = document.getElementById("galleryBtn");

  if (gallery.classList.contains("hidden")) {
    gallery.classList.remove("hidden");
    btn.textContent = "Show Less Photos";
  } else {
    gallery.classList.add("hidden");
    btn.textContent = "View More Photos";
  }
}

let currentIndex = 0;

const images = [
"bin/1 (2).jpg",
"bin/1 (3).jpg",
"bin/1 (4).jpg",
"bin/1 (9).jpg",
"bin/1 (10).jpg",
"bin/1 (13).jpg",
"bin/1 (1).jpg",
"bin/1 (5).jpg",
"bin/1 (6).jpg",
"bin/1 (7).jpg",
"bin/1 (8).jpg",
"bin/1 (11).jpg",
"bin/1 (12).jpg"
];

function openLightbox(index){
currentIndex = index;

document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src = images[index];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeImage(step){

currentIndex += step;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

if(currentIndex >= images.length){
currentIndex = 0;
}

document.getElementById("lightbox-img").src = images[currentIndex];
}

