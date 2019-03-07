// import $ from 'jquery';

function message1(){
  const input = document.querySelector('#textspinner');
  input.innerText = "...Scanning Booking.com..."
}

function message2(){
  const input = document.querySelector('#textspinner');
  input.innerText = "...Scanning SkyScanner.net...."
}

function message3(){
  const input = document.querySelector('#textspinner');
  input.innerText = "...Scanning AirBnB.com....."
}

function message4(){
  const input = document.querySelector('#textspinner');
  input.innerText = "...Factoring your mother's opinion...."
}

function message5(){
  const input = document.querySelector('#textspinner');
  input.innerText = "...Saying Hi to NSA...."
}

function message6(){
  const input = document.querySelector('#textspinner');
  input.innerText = "...Jah Loves You...."
}

function call(){
  const token = $( 'meta[name="csrf-token"]' ).attr( 'content' );
  const event_id = document.querySelector('#spinner').dataset.eventId
  $.ajax({
    url: `/events/${event_id}`,
    method: 'PATCH',
    dataType: 'script',
    beforeSend: function ( xhr ) {
      xhr.setRequestHeader( 'X-CSRF-Token', token );
    }

  })
}

function showSpinner(){
  setTimeout(function(){message1()}, 1000);
  setTimeout(function(){message2()}, 2000);
  setTimeout(function(){message3()}, 3000);
  setTimeout(function(){message4()}, 4000);
  setTimeout(function(){message5()}, 5000);
  setTimeout(function(){message6()}, 6000);
  setTimeout(function(){call()}, 7000);
}
export { showSpinner }
// document.getElementById('spinnerbtn')
