/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var uname;

function connect() {
    //var uname = $("#userid").val();
  // Create and init the SockJS object
  var socket = new SockJS('http://10.1.8.18:8080/ws');

  stompClient = Stomp.over(socket);

  // Subscribe the '/notify' channell
  stompClient.connect({}, function(frame) {
      
    stompClient.subscribe('/queue/notify/'+uname, function(notification) {

      // Call the notify function when receive a notification
      notify(JSON.parse(notification.body).content);

    });
  });

  return;
}
function sendAction(event) {

  event.preventDefault();
  //var uname = "admin"//$("#userid").val();
  connect();

  var uu = "http://10.1.8.18:8080/remotecall?userName="+uname;
  $.ajax({
    url: uu,
    type: "POST",
    contentType: "application/json",
    dataType: "json"
  });
  return;
} // function sendAction

/**
 * Init operations.
 */
    $(document).ready(function() {
        
        
        connect();
  
        uname = $("#userLabel").text();     
        //$("#do-some-action").click({uuu:uuuu}, sendAction);
        $("#do-some-action").on("click", sendAction);

    });
function notify(message) {
  //$("#notifications-area").append(message + "\n");
  $("#greetings").append( "<a href='"+message+"'>"+message+"</a>");
  stompClient.disconnect();
  
  return;
}