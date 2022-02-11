"use strict"; // implemtiert Strikter Modus


// Elemente in Variablen speichern

var indicator = document.querySelector('.nav-indicator'); 
var items = document.querySelectorAll('.nav-item');


function handleIndicator(el) {                      // eventHandler
  items.forEach(function (item) {                   // für jedes Nav-Item
    item.classList.remove('is-active');             // entferne is-active Styling
    item.removeAttribute('style');                  // entferne Attribut style
  });
  indicator.style.width = "".concat(el.offsetWidth, "px");            // Indikator Breite wird angepasst
  indicator.style.left = "".concat(el.offsetLeft, "px");              // Indikator wird verschoben 
  indicator.style.backgroundColor = el.getAttribute('active-color');  // Hintergrundfarbe des Indikors bekommt Farbe
  el.classList.add('is-active');                                      // Nav-Element bekommt Zustand 'is-active'  class
  el.style.color = el.getAttribute('active-color');                   // Nav-Element bekommt Farbe
}




items.forEach(function (item, index) {                            // gilt für jede item Variable

  item.addEventListener('click', function (e) {         // Click Event -> Klick auf neues Nav-Element
    handleIndicator(e.target);                          // Führe obere Funktion aus mit gecklickten Element
  });

  item.classList.contains('is-active') && handleIndicator(item);  // jedes Element kann den 'is-active' Zustand bekommen & den handleindicator verwenden
});


     

