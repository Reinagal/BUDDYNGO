import "bootstrap";

import { initUpdateNavbarOnScroll } from '../components/navbar';
import "../plugins/flatpickr";
initUpdateNavbarOnScroll();

const sortable = Sortable.create(simpleList, {
               animation: 300,
               ghostClass: 'main-green-background',
               chosenClass: 'light-green-background',
               dragClass: 'light-green-background',
               dataIdAttr: 'data-id' });

const button = document.querySelector("#dirty-button");

button.addEventListener("click", (event) => {
      console.log(sortable.toArray());
      });

$(document).ready(function(){
  $(".list-group-item.choice-date").click(function(){
    $(this).toggleClass("active");
  });
});
