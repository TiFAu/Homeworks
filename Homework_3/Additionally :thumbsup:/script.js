function changeIndex ( event ) {
    if ( event.target.className == "lev4" ) return
    var elem = document.querySelector ( '.lev4' )
    elem.className = event.target.className
    event.target.className = "lev4"
  }
  window.onload = function () {
    document.collection = document.getElementsByTagName ( 'article' )
    for ( var j = 0; j < document.collection.length; j++ ) {
      document.collection [j].addEventListener ( 'click', changeIndex )
    }
  }