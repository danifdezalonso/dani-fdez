$(document)
                .ready(function () {
                    
                    $( ".socialnav a.linkedin" ).hover(
                        function() {
                            $(".footer").addClass("footer-linkedin");
                        }, function() {
                            $(".footer").removeClass("footer-linkedin");
                        }
                    );
            });