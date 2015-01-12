
$(document).ready(function(){

    $(".thumbs a").click(function(){

        var largePath = $(this).attr("href");
        var largeAlt = $(this).attr("title");

        $("#largeImg").attr({ src: largePath, alt: largeAlt });

        $("h2 em").html(" (" + largeAlt + ")"); return false;
    });
 
 });
  $(function() {
    $( "#accordion" ).accordion();
  });
  
   $(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });
  
    $(function() {
    $( "#dialog" ).dialog();
  });
     $(function() {
    $( "#dialo" ).dialog();
  });
     $(function() {
    $( "#dial" ).dialog();
  });
  
  
$(function() {
    $( "#button" ).click(function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  });