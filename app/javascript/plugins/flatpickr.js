import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

flatpickr(".datepicker", {});

function initFlatpickr() {
  flatpickr(".datepicker", {});
}
window.initFlatpickr = initFlatpickr;
