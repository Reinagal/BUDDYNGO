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

import {initChart4} from "../plugins/chart";

if(document.getElementById("myChart4")){
  initChart4();
}

// import { showSpinner } from "../plugins/spinner";
// document.addEventListener("DOMContentLoaded", function(event) {
//   if(document.getElementById('spinnerbtn')){
//     showSpinner('spinnerbtn')
//   }
// });

import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();

import {initSortable1} from "../plugins/sortable"
import {initSortable2} from "../plugins/sortable"
if(document.getElementById("simpleList1")){
  initSortable1();
}
if(document.getElementById("simpleList2")){
  initSortable2();
}

$(document).ready(function(){
  $(".list-group-item.choice-date").click(function(){
    $(this).toggleClass("active");
  });
});

