function copy() {
  var mailText = encodeMail();                     
  navigator.clipboard.writeText(mailText).then(function() {
    var a = document.getElementById("mail")
    if (a.querySelector("span") == null){
      a.appendChild(createSpan("Email copied!"));
      setTimeout(remove,1000)
    }
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }, function() {
    /* clipboard write failed */
  });
 
  
}

function createSpan(text){
  var span = document.createElement("SPAN");
  span.setAttribute("class", "popuptext")       
  span.setAttribute("id", "myPopup")                  
  var t = document.createTextNode(text);     
  span.appendChild(t);            
  return span                          

}
function remove(){
  var a = document.getElementById("mail")
  var span = document.getElementById("myPopup")
  a.removeChild(span);
}
function encodeMail(){
  var mail = "tjnbmeb94Ahnbjm/dpn"
  var coded = ''
  for(i=0; i<mail.length ; i++){
     coded += String.fromCharCode(mail.charCodeAt(i)-1);
  }
  return coded
}
 