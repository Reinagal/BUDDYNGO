import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Note this is important!

flatpickr(".datepicker", {});

function initFlatpickr() {
  flatpickr(".datepicker", {});
}
window.initFlatpickr = initFlatpickr;
// import rangePlugin from "flatpickr/dist/plugins/rangePlugin"

// flatpickr("#range_start", {
//   altInput: true,
//   plugins: [new rangePlugin({ input: "#range_end"})]
// })
