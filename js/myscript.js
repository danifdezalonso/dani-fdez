// Flecha arriba al hacer scrolldown
// When the user scrolls down 20px from the top of the document, show the button
  function checkGoTopArraw() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // scroll de anchoras suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Esconder menu en imagenes con la class "hideMenu" + data-idmenu="menu-XXXXX"
  document.getElementsByTagName('body')[0].onscroll = function() {
    const menu = document.getElementById('menu-lateral')
    
    let shouldHideMenu = false;
    const images = document.getElementsByClassName('hideMenu');
    [].forEach.call(images, function (el) {
      if (!shouldHideMenu) {
        shouldHideMenu = isCollapsed(menu, el);
      }
    })
    
    if (shouldHideMenu) {
      menu.classList.add('hide');
    }
    else {
      menu.classList.remove('hide');
    }
  };
  
  function isCollapsed(menu, el){
    var object_1 = menu.getBoundingClientRect();
    var object_2 = el.getBoundingClientRect();
    
    if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
    object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
      return true;
    }
    else{
      return false;
    }
  }
  // FIN de Esconder menu en imagenes

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };


  
  $(window).on('resize scroll', function() {
    checkGoTopArraw();


    // Check menu items
    $('.menuTitle').each(function() {
      const itemMenu = $('#' + $(this).data('idmenu'));
      if ($(this).isInViewport()) {
        itemMenu.addClass('active')
      } else {
        itemMenu.removeClass('active')
      }
    });
  });

// tiempo loading
$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 1250); 
});

