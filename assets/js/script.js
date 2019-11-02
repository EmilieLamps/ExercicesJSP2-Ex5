// utiliser onmouseover, voir exercice 1;
// /!\ N'utiliser qu'une seule fonction JS

 let pictureChange = function() {
   this.src = 'assets/img/' + this.id + '_2.jpg';
 }
 document.getElementById('image1').onmouseenter = pictureChange ;
 document.getElementById('image2').onmouseenter = pictureChange ;
 document.getElementById('image3').onmouseenter = pictureChange ;
 document.getElementById('image4').onmouseenter = pictureChange ;
 document.getElementById('image5').onmouseenter = pictureChange ;
