import "bootstrap";
import "../plugins/flatpickr";
import {initChart} from "../plugins/chart";

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


import {initSortable} from "../plugins/sortable"
if(document.getElementById("simpleList")){
  initSortable();
}

$(document).ready(function(){
  $(".list-group-item.choice-date").click(function(){
    $(this).toggleClass("active");
  });
});

