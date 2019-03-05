function call(){
  $.ajax(
    url: '/event/',
    method: 'patch',
    data: { event_id: btn.dataSet.event_id}
    dataType: 'html'
  )
}

function showSpinner(element_id){
  document.querySelector(element_id).addEventListener('click',(e)=>{
    e.preventDefault()
    document.getElementById('spinner').classList.add('visible')
    setTimeout(call, 2000)
  })
}
showSpinner('spinner')

// export { showSpinner }
