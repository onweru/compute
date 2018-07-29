function elem(selector, parent = document){
  return parent.querySelector(selector);
}

function elems(selector) {
  let elems = document.querySelectorAll(selector);
  return elems.length ? elems : false; 
}

function findText(parent, child) {
  return parent.querySelector(child).innerHTML;
}

function setText(el, text) {
  el.innerHTML = text;
}

function fillModal(name, title, description, url) {
  let modal = elem('.member_modal');
  let new_name = elem('.modal_name', modal);
  let new_title = elem('.modal_title', modal);
  let new_description = elem('.modal_description', modal);
  let img = elem('img', modal);
  setText(new_name, name);
  setText(new_description, description);
  setText(new_title, title);
  img.src = url;
}

function modal() {
  let modal = elem('.member_modal');
  let modal_class = modal.classList;
  let overlay = modal.parentNode;
  let overlay_class = overlay.classList;
  return [modal_class, overlay_class];
}

function toggleModal() {
  let open = 'member_modal-open';
  modal()[0].contains(open) ? modal()[0].remove(open) : modal()[0].add(open);
  let hide = 'hide';
  modal()[1].contains(hide) ? modal()[1].remove(hide) : modal()[1].add(hide);
}

(function hideModal() {
  let triggers = ['.modal_close', '.modal_overlay'];
  triggers.map(function(trigger) {
    let button = elem(trigger);
    if (button) {
    button.addEventListener('click', function(e) {
        button == e.target ? toggleModal() : false;
      });
    }
  });
})();

(function teamModal() {
  let members = elems('.member');
  Array.from(members).map(function(member, index) {
    member.addEventListener('click', function() {
      let name = findText(member, '.member_name');
      let title = findText(member, '.member_title');
      let description = findText(member, '.member_description');
      let imgUrl = member.querySelector('img').src;
      fillModal(name, title, description, imgUrl);
      toggleModal();
    }); 
  }); 
})();

function serveNonWebp() {
  let non_webp = document.documentElement.classList.contains('no-webp');
  return non_webp;
}

function switchToNonWebp () {
  let images = elems('img');
  Array.from(images).map(function(image, index) {
    let src = image.src;
    let webp = '.webp';
    let jpg = '.jpg';
    let new_src = src.replace(webp, jpg);
    image.src = new_src;
  });
};

$(document).ready(function() {
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);  
  (function initWebp() {
    serveNonWebp() ? switchToNonWebp() : false;
  })();
});

$(window).resize(function() {
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);
});

$(document).ready(function(){
  $('.aniview').AniView();
});

//For the contact form sub
$("#contactForm").submit(function(event){
  event.preventDefault();
  submitForm();
});

//Initializing tab layout
$('.nav-tabs a').click(function(){
  $(this).tab('show');
})

function testModal(target) {
  return {
    modalTarget:target,
    animatedIn:'fadeIn',
    animatedOut:'zoomOut',
    color:'#fff',
    // Callbacks
    beforeOpen: function() {
      console.log("The animation was called");
    },           
    afterOpen: function() {
      console.log("The animation is completed");
    }, 
    beforeClose: function() {
      console.log("The animation was called");
    }, 
    afterClose: function() {
      console.log("The animation is completed");
    }
  }
}

// // $("#demo01").animatedModal(testModal('animatedModal'));

// // //demo 02
// // $("#demo02").animatedModal(testModal('modal-02'));

// // //demo 03
// // $("#demo03").animatedModal(testModal('modal-03'));

// // //demo 04
// // $("#demo04").animatedModal(testModal('modal-04'));

// // //demo 03
// // $("#demo05").animatedModal(testModal('modal-05'));

// //Modals in the Solutions page
// //MiRevenue modal
// $("#MiRevenue-demo").animatedModal(testModal('MiRevenue-modal'));

// //MiPricing modal
// $("#MiPricing-demo").animatedModal(testModal('MiPricing-modal'));

// //MiEarnings modal
// $("#MiEarnings-demo").animatedModal(testModal('MiEarnings-modal'));

// //MiBilling modal
// $("#MiBilling-demo").animatedModal(testModal('MiBilling-modal'));

// //Aria modal
// $("#Aria-demo").animatedModal(testModal('Aria-modal'));

// //Microsoft Licensing modal
// $("#MLicensing-demo").animatedModal(testModal('MLicensing-modal'));

// //Microsoft Manages Services modal
// $("#MManaged-demo").animatedModal(testModal('MManaged-modal'));

// //Microsoft Manages Services modal
// $("#Security-demo").animatedModal(testModal('Security-modal'));

// $('.tab-content').not('.active').hide();

// $('.tab-nav a').click(function(e) {
//   e.preventDefault();
//   $('.tab-nav a').removeClass('active');
//   $(this).addClass('active');

//   $('.tab-content').hide();
//   $($.attr(this, 'href')).fadeIn(300);
// });

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  || location.hostname == this.hostname) {
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// sea.tabs.js

$(function(){
  $('.seaTabs_tab').each(function(item){
    $(this).click(function(){
      $(this).addClass('seaTabs_switch_active').siblings().removeClass('seaTabs_switch_active');
      $($('.seaTabs_item')[item]).addClass('seaTabs_content_active').siblings().removeClass('seaTabs_content_active');
    });
  });
});


jQuery(function () {
  jQuery('.showSingle').click(function () {
    var index = $(this).parent().index(),
    newTarget = jQuery('.targetDiv').eq(index);
    jQuery('.targetDiv').not(newTarget).slideUp('fast')
    newTarget.delay('fast').slideToggle('fast')
    $(this).toggleClass('clicked')
    return false;
  })
  //    For the second row
  jQuery('.showSingle1').click(function () {
    var index = $(this).parent().index(),
    newTarget = jQuery('.targetDiv1').eq(index);
    jQuery('.targetDiv1').not(newTarget).slideUp('fast')
    newTarget.delay('fast').slideToggle('fast')
    $(this).toggleClass('clicked')
    return false;
  })
  //    End of the second row
  //    For the third row
  jQuery('.showSingle2').click(function () {
    var index = $(this).parent().index(),
    newTarget = jQuery('.targetDiv2').eq(index);
    jQuery('.targetDiv2').not(newTarget).slideUp('fast')
    newTarget.delay('fast').slideToggle('fast')
    $(this).toggleClass('clicked')
    return false;
  })
  //    End of the third row
  //    For the third row
  jQuery('.showSingle3').click(function () {
    var index = $(this).parent().index(),
    newTarget = jQuery('.targetDiv3').eq(index);
    jQuery('.targetDiv3').not(newTarget).slideUp('fast')
    newTarget.delay('fast').slideToggle('fast')
    $(this).toggleClass('clicked')
    return false;
  })
  //    End of the third row
  //    For the third row
  jQuery('.showSingle4').click(function () {
    var index = $(this).parent().index(),
    newTarget = jQuery('.targetDiv4').eq(index);
    jQuery('.targetDiv4').not(newTarget).slideUp('fast')
    newTarget.delay('fast').slideToggle('fast')
    $(this).toggleClass('clicked')
    return false;
  })
  //    End of the third row
});

/*
* modalEffects.js v1.0.0
*/
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();

/*!
* classie v1.0.1
*/

( function( window ) {
  
  'use strict';
  
  // class helper functions from bonzo https://github.com/ded/bonzo
  
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  
  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;
  
  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }
  
  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }
  
  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  
  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = classie;
  } else {
    // browser global
    window.classie = classie;
  }
  
})( window );

(function year(){
  var date = new Date();
  var year = date.getFullYear();
  document.querySelector('.year').innerHTML = year;
})();

(function autoResizeTextField() {
  let textarea = document.querySelector('textarea');
  textarea ? autosize(textarea) : false;
})();