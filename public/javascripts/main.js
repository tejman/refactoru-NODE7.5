$(function(){

  var myAjax = function(filter){
    $.ajax("/countries", 
      {success: function (data){
        $("#list").text("");
        $.each(data["countries"], function(ind, val) {
          var singleElem = "<li><h1>{name}</h1><p>French Name: {frenchName}</p><p>Local Name: {localName}</p><p>Region: {region}</p></li>".supplant(val);
          var allNames = (val.name+" "+val.frenchName+" "+val.localName+" "+val.region).toLowerCase();
          if (!filter||allNames.indexOf(filter)>=0) {
            $(singleElem).appendTo("#list");
          };
      });
    }});
  };

  $(document).on("click", "#load", function(){
    myAjax();
  });

  $(document).on("keyup", "#search", function(){
    filter = $("#search").val().toLowerCase();
    myAjax(filter);

});