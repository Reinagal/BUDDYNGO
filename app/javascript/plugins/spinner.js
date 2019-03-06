// import $ from 'jquery';

function call(){
  $.ajax({
    url: '/event/',
    method: 'patch',
    data: { event_id: spinnerbtn.dataSet.event_id},
    dataType: 'html'
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
