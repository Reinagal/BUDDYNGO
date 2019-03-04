function tabsEvent (evt, eventName) {
 $(document).ready(function(){
  $(".tab a").click(function(){
    $(this).tab('show');
  });
  $('.tab a').on('shown.bs.tab', function(event){
    var x = $(event.target).text();         // active tab
    var y = $(event.relatedTarget).text();  // previous tab
    $(".act span").text(x);
    $(".prev span").text(y);
  });
});
}

export {tabsEvent}
