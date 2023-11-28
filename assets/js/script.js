<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: 24,
    autoplay:{
      delay:2000,
      disabledOnInteraction:false,
      pauseOnMouseEnter:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
     
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: "2",
    spaceBetween: 24,
    autoplay:{
      delay:3000,
      disabledOnInteraction:false,
      pauseOnMouseEnter:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
     
    },
  });
</script>