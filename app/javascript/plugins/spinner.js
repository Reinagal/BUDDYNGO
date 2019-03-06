// import $ from 'jquery';

function call(){
  const token = $( 'meta[name="csrf-token"]' ).attr( 'content' );

  $.ajax({
    url: `/events/${spinnerbtn.dataset.event_id}`,
    method: 'patch',
    dataType: 'html',
    beforeSend: function ( xhr ) {
      xhr.setRequestHeader( 'X-CSRF-Token', token );
    }
  })
}

function showSpinner(element_id){
  const btn = document.getElementById(element_id)
  btn.addEventListener('click',(e)=>{
    e.preventDefault()
    document.getElementById('spinner-wrapper').classList.remove('spinner-hidden')
    setTimeout(call, 2000)
  })
}

export { showSpinner }
// document.getElementById('spinnerbtn')
