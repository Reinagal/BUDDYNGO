function closeModal() {
  close = document.getElementById("btn-close-modal");
  close.addEventListener("click", (event) => {
    modal = $('#centralModalSuccess').modal('toggle');
    console.log("tot");
  });
}

window.closeModal = closeModal;
