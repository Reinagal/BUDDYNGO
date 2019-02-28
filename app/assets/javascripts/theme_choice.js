// $(document).ready(function(){
//   $(".theme-choice").click(function(){
//     $(this).toggleClass("active");
//   });
// });

const cards = document.querySelectorAll('.theme-choice')
cards.forEach((card) => {
  card.addEventListener('click', event => {
    event.target.classList.toggle('active')
  })
})
