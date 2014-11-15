if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
  var s = skrollr.init();
  skrollr.menu.init(s, {
     animate: true,
     easing: 'sqrt',
     scale: 2,
     duration: function(currentTop, targetTop) {
         return 500;
     },
     complexLinks: false
   });
}
var userFeed = new Instafeed({
  get: 'user',
  userId: 1361946594,
  accessToken: '1361946594.467ede5.39525b0165fd4536a1c53b2b335edcf8',
  limit: '8',
  resolution: 'standard_resolution',
  template: '<li class="grid__col--3"><a href="{{link}}"><img src="{{image}}" itemprop="image"/></a><li>'
});
userFeed.run();

$(document).ready(function(){

$('#sentForm').hide();
var $gotcha = $('#gotcha').hide();

var map = new GMaps({
 el: '#map',
 lat: 38.735919,
 lng: -85.378563
});
map.addMarker({
 lat: 38.735919,
 lng: -85.378563,
 title: 'Paramount Tattoo & Art Gallery'
});

$('#simpleForm').submit(function(){
 var myname = $('#name').val();
 var $gotcha = $('#gotcha').val();

 if ($gotcha === "") {
   var sendit = $.ajax({
     dataType: 'jsonp',
     url: "http://getsimpleform.com/messages/ajax?form_api_token=4ace024a8ca5b1b4bcf77ebac77664ba",
     data: $('#simpleForm').serialize(),
     success: function(){
       $('#simpleForm').hide();
       $('#sentForm').html('<div id="sentForm"><h2>Message has been sent!</h2><p>Thanks, '+ myname +'!<br/> We will get back to you soon.</p></div>')
       $('#sentForm').show();
     },
     error: function(){
       alert("WHOOPS! Something went wrong. Try sending the form again.");
     }
   });
 }

 return false; //don't submit the form
});

var ltoggle = $("ltoggle");
var nav = responsiveNav(".nav-collapse",{
 animate: true,
 transition: 284,
 label: "Menu",
 insert: "before",
 customToggle: "ltoggle",
 closeOnNavClick: false,
 openPos: "relative",
 navClass: "nav-collapse",
 navActiveClass: "js-nav-active",
 jsClass: "js",
 init: function(){

 },
 open: function(){
     ltoggle.className = "latte__toggle fa fa-times fa-3x";
 },
 close: function(){
     ltoggle.className = "latte__toggle fa fa-bars fa-3x";
 }

});

});
