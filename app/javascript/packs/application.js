import "bootstrap";
import "../plugins/flatpickr";
import {initChart} from "../plugins/chart";
import "../components/close_flashes"

if(document.getElementById("myChart")){
  initChart();
}

import {initChart2} from "../plugins/chart";

if(document.getElementById("myChart2")){
  initChart2();
}

import {initChart3} from "../plugins/chart";

if(document.getElementById("myChart3")){
  initChart3();
}

import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();

const sortable = Sortable.create(simpleList, {
               animation: 300,
               ghostClass: 'main-green-background',
               chosenClass: 'light-green-background',
               dragClass: 'light-green-background',
               dataIdAttr: 'data-id' });

const button = document.querySelector("#dirty-button");
if (button) {
  button.addEventListener("click", (event) => {
        const input = document.getElementById('answer_theme_ranking');
        input.value = sortable.toArray();
        });
}

$(document).ready(function(){
  $(".list-group-item.choice-date").click(function(){
    $(this).toggleClass("active");
  });
});

