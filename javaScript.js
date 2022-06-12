
      $(function() {
    
          $('#slider3').carousel({
              interval: 2000,
              keyword: false,
              pause: false,
              wrap: false
          });
      });

      $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    $(document).ready(function(){
        $("#test1").on({
            mouseenter:function(){
                $(this).css("background-color","blue");
            },
            mouseleave: function(){
                $(this).css("background-color","gray");
            },
            click: function(){
                $(this).css("background-color","red");
            }
         });
    });
    
    
 