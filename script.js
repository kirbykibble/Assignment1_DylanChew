$(document).ready(function() {
    display = document.getElementById("display");
    
    $.ajax({
        url: "top.html",
        dataType: "html",
        
        success: function(addTop) {
            console.log(addTop)
            
            $.ajax({
                url: "middle.html",
                dataType: "html",
                
                success: function(addMiddle) {
                    $.ajax({
                        url: "bottom.html",
                        dataType: "html",
                        
                        success: function(addBottom) {
                            display.innerHTML = addTop + addMiddle + addBottom;
                        }
                    });                
                }
            });
        }
        
    });
    
});