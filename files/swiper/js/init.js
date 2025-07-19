const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

/* Testimonials slider -> */
const testimonialsSlider = document.getElementById('testimonials-slider');
if (testimonialsSlider) {
   new Swiper(testimonialsSlider, {
      navigation: {
         prevEl: '#testimonials-btn-prev',
         nextEl: '#testimonials-btn-next',
      },
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 80,
      loop: true,
      speed: 1000,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1,
            spaceBetween: 30,
         },
         575: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         1100: {
            slidesPerView: 3,
            spaceBetween: 40,
         },
         1281: {
            slidesPerView: 3,
            spaceBetween: 80,
         }
      },
   });
}
/* <- Testimonials slider */

/* Post slider -> */
let swiperInstance = null;
const breakpoint = 640;
const slider = document.getElementById('post-slider');

function initOrDestroySlider() {
   const screenWidth = Math.min(window.innerWidth, window.innerHeight); // учитываем ориентацию

   if (screenWidth <= breakpoint && !swiperInstance && slider) {
      
      swiperInstance = new Swiper(slider, {
         navigation: {
            prevEl: '#post-button-prev',
            nextEl: '#post-button-next',
         },
         autoHeight: false,
         slidesPerView: 1,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 2,
         loop: true,
         speed: 1000,
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: true,
            loadPrewNext: true,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
      });
   }

   if (screenWidth > breakpoint && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
   }
}

// запустить при загрузке
window.addEventListener('load', initOrDestroySlider);
// пересчитывать при изменении размера или ориентации
window.addEventListener('resize', initOrDestroySlider);
window.addEventListener('orientationchange', initOrDestroySlider);
/* <- Post slider */