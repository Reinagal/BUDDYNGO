import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css" // A path to the theme CSS

flatpickr(".datepicker", {
    dateFormat: "d-m-Y",
    minDate: "today",
})

function initFlatpickr() {
  flatpickr(".datepicker", {
    dateFormat: "d-m-Y",
    minDate: "today",
  })
}

window.initFlatpickr = initFlatpickr;
