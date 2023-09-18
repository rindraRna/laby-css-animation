const element = document.getElementById('lab3'); 
const fillAvailableWidth = window.getComputedStyle(element).width;
const fillAvailableWidthInPixels = parseInt(fillAvailableWidth, 10);
const htmlElement = document.documentElement;
const valeur = 230+fillAvailableWidthInPixels; //230 = left actuel
htmlElement.style.setProperty('--translation-value', valeur+'px'); // Modifiez la valeur de la variable CSS personnalisée dans :root