import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"

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

