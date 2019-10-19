        

        var num = 1;
        var imgg=document.getElementById('image1');
        imgg.src="img/logo.png";

$(window).scroll(function () { 
  num = $(window).scrollTop() / 3;
  
 if( parseInt(num) === num){
            var imgg=document.getElementById('image1');

            imgg.src="img/formalab.png";


  
 if (num<10){
            var imgg=document.getElementById('image1');

            imgg.src="img/logo.png";

 }


}});