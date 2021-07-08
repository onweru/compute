jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,s,o){return jQuery.easing[jQuery.easing.def](t,e,i,s,o)},easeInQuad:function(t,e,i,s,o){return s*(e/=o)*e+i},easeOutQuad:function(t,e,i,s,o){return-s*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e+i:-s/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,s,o){return s*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,s,o){return s*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e*e+i:s/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,s,o){return s*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,s,o){return-s*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e*e*e+i:-s/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,s,o){return s*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,s,o){return s*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e*e*e*e+i:s/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,s,o){return-s*Math.cos(e/o*(Math.PI/2))+s+i},easeOutSine:function(t,e,i,s,o){return s*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,s,o){return-s/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,s,o){return 0==e?i:s*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,s,o){return e==o?i+s:s*(1-Math.pow(2,-10*e/o))+i},easeInOutExpo:function(t,e,i,s,o){return 0==e?i:e==o?i+s:(e/=o/2)<1?s/2*Math.pow(2,10*(e-1))+i:s/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,s,o){return-s*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,s,o){return s*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,s,o){return(e/=o/2)<1?-s/2*(Math.sqrt(1-e*e)-1)+i:s/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,s,o){var n=1.70158,a=0,r=s;if(0==e)return i;if(1==(e/=o))return i+s;if(a||(a=.3*o),r<Math.abs(s)){r=s;n=a/4}else n=a/(2*Math.PI)*Math.asin(s/r);return-r*Math.pow(2,10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/a)+i},easeOutElastic:function(t,e,i,s,o){var n=1.70158,a=0,r=s;if(0==e)return i;if(1==(e/=o))return i+s;if(a||(a=.3*o),r<Math.abs(s)){r=s;n=a/4}else n=a/(2*Math.PI)*Math.asin(s/r);return r*Math.pow(2,-10*e)*Math.sin((e*o-n)*(2*Math.PI)/a)+s+i},easeInOutElastic:function(t,e,i,s,o){var n=1.70158,a=0,r=s;if(0==e)return i;if(2==(e/=o/2))return i+s;if(a||(a=o*(.3*1.5)),r<Math.abs(s)){r=s;n=a/4}else n=a/(2*Math.PI)*Math.asin(s/r);return e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/a)*-.5+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/a)*.5+s+i},easeInBack:function(t,e,i,s,o,n){return void 0==n&&(n=1.70158),s*(e/=o)*e*((n+1)*e-n)+i},easeOutBack:function(t,e,i,s,o,n){return void 0==n&&(n=1.70158),s*((e=e/o-1)*e*((n+1)*e+n)+1)+i},easeInOutBack:function(t,e,i,s,o,n){return void 0==n&&(n=1.70158),(e/=o/2)<1?s/2*(e*e*((1+(n*=1.525))*e-n))+i:s/2*((e-=2)*e*((1+(n*=1.525))*e+n)+2)+i},easeInBounce:function(t,e,i,s,o){return s-jQuery.easing.easeOutBounce(t,o-e,0,s,o)+i},easeOutBounce:function(t,e,i,s,o){return(e/=o)<1/2.75?s*(7.5625*e*e)+i:e<2/2.75?s*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?s*(7.5625*(e-=2.25/2.75)*e+.9375)+i:s*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,s,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,s,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,s,o)+.5*s+i}}),function(t){t.bootstrapDropdownOnHover=function(e,i){var s={mouseOutDelay:500,responsiveThreshold:992,hideBackdrop:!0},o=this;o.settings={};var n=t(e),a=t(window),r=-1;o.init=function(){o.settings=t.extend({},s,i),n.find("[data-toggle='dropdown']").each(function(e,i){var s=t(i),n=s.parent().find(".dropdown-menu"),a=s.parent();s.on("mouseenter.bnoh",function(){u()||(clearTimeout(r),a.hasClass("open")||(s.dropdown("toggle"),o.settings.hideBackdrop&&a.find(".dropdown-backdrop").remove()))}),s.on("mouseleave.bnoh",function(){u()||(r=setTimeout(function(){a.hasClass("open")&&0===a.find(".dropdown-backdrop").length&&(s.dropdown("toggle"),s.blur())},o.settings.mouseOutDelay))}),n.on("mouseenter.bnoh",function(){u()||clearTimeout(r)}),n.on("mouseleave.bnoh",function(){u()||(r=setTimeout(function(){a.hasClass("open")&&(s.dropdown("toggle"),s.blur())},o.settings.mouseOutDelay))})})},o.destroy=function(){n.find("[data-toggle='dropdown']").unbind(".bnoh"),n.find(".dropdown-menu").unbind(".bnoh"),n.removeData("bootstrapDropdownOnHover")};var u=function(){return a.width()<=o.settings.responsiveThreshold};o.init()},t.fn.bootstrapDropdownOnHover=function(e){return this.each(function(){if(void 0===t(this).data("bootstrapDropdownOnHover")){var i=new t.bootstrapDropdownOnHover(this,e);t(this).data("bootstrapDropdownOnHover",i)}})}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(jQuery)}(function($){var menuTrees=[],IE=!!window.createPopup,mouse=!1,touchEvents="ontouchstart"in window,mouseDetectionEnabled=!1,requestAnimationFrame=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},cancelAnimationFrame=window.cancelAnimationFrame||function(t){clearTimeout(t)};function initMouseDetection(t){var e=".smartmenus_mouse";if(mouseDetectionEnabled||t)mouseDetectionEnabled&&t&&($(document).unbind(e),mouseDetectionEnabled=!1);else{var i=!0,s=null;$(document).bind(getEventsNS([["mousemove",function(t){var e={x:t.pageX,y:t.pageY,timeStamp:(new Date).getTime()};if(s){var o=Math.abs(s.x-e.x),n=Math.abs(s.y-e.y);if((o>0||n>0)&&o<=2&&n<=2&&e.timeStamp-s.timeStamp<=300&&(mouse=!0,i)){var a=$(t.target).closest("a");a.is("a")&&$.each(menuTrees,function(){if($.contains(this.$root[0],a[0]))return this.itemEnter({currentTarget:a[0]}),!1}),i=!1}}s=e}],[touchEvents?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut",function(t){isTouchEvent(t.originalEvent)&&(mouse=!1)}]],e)),mouseDetectionEnabled=!0}}function isTouchEvent(t){return!/^(4|mouse)$/.test(t.pointerType)}function getEventsNS(t,e){e||(e="");var i={};return $.each(t,function(t,s){i[s[0].split(" ").join(e+" ")+e]=s[1]}),i}return $.SmartMenus=function(t,e){this.$root=$(t),this.opts=e,this.rootId="",this.accessIdPrefix="",this.$subArrow=null,this.activatedItems=[],this.visibleSubMenus=[],this.showTimeout=0,this.hideTimeout=0,this.scrollTimeout=0,this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.idInc=0,this.$firstLink=null,this.$firstSub=null,this.disabled=!1,this.$disableOverlay=null,this.$touchScrollingSub=null,this.cssTransforms3d="perspective"in t.style||"webkitPerspective"in t.style,this.wasCollapsible=!1,this.init()},$.extend($.SmartMenus,{hideAll:function(){$.each(menuTrees,function(){this.menuHideAll()})},destroy:function(){for(;menuTrees.length;)menuTrees[0].destroy();initMouseDetection(!0)},prototype:{init:function(t){var e=this;if(!t){menuTrees.push(this),this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,""),this.accessIdPrefix="sm-"+this.rootId+"-",this.$root.hasClass("sm-rtl")&&(this.opts.rightToLeftSubMenus=!0);var i=".smartmenus";this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind(getEventsNS([["mouseover focusin",$.proxy(this.rootOver,this)],["mouseout focusout",$.proxy(this.rootOut,this)],["keydown",$.proxy(this.rootKeyDown,this)]],i)).delegate("a",getEventsNS([["mouseenter",$.proxy(this.itemEnter,this)],["mouseleave",$.proxy(this.itemLeave,this)],["mousedown",$.proxy(this.itemDown,this)],["focus",$.proxy(this.itemFocus,this)],["blur",$.proxy(this.itemBlur,this)],["click",$.proxy(this.itemClick,this)]],i)),i+=this.rootId,this.opts.hideOnClick&&$(document).bind(getEventsNS([["touchstart",$.proxy(this.docTouchStart,this)],["touchmove",$.proxy(this.docTouchMove,this)],["touchend",$.proxy(this.docTouchEnd,this)],["click",$.proxy(this.docClick,this)]],i)),$(window).bind(getEventsNS([["resize orientationchange",$.proxy(this.winResize,this)]],i)),this.opts.subIndicators&&(this.$subArrow=$("<span/>").addClass("sub-arrow"),this.opts.subIndicatorsText&&this.$subArrow.html(this.opts.subIndicatorsText)),initMouseDetection()}if(this.$firstSub=this.$root.find("ul").each(function(){e.menuInit($(this))}).eq(0),this.$firstLink=this.$root.find("a").eq(0),this.opts.markCurrentItem){var s=/(index|default)\.[^#\?\/]*/i,o=window.location.href.replace(s,""),n=o.replace(/#.*/,"");this.$root.find("a").each(function(){var t=this.href.replace(s,""),i=$(this);t!=o&&t!=n||(i.addClass("current"),e.opts.markCurrentTree&&i.parentsUntil("[data-smartmenus-id]","ul").each(function(){$(this).dataSM("parent-a").addClass("current")}))})}this.wasCollapsible=this.isCollapsible()},destroy:function(t){if(!t){var e=".smartmenus";this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(e).undelegate(e),e+=this.rootId,$(document).unbind(e),$(window).unbind(e),this.opts.subIndicators&&(this.$subArrow=null)}this.menuHideAll();var i=this;this.$root.find("ul").each(function(){var t=$(this);t.dataSM("scroll-arrows")&&t.dataSM("scroll-arrows").remove(),t.dataSM("shown-before")&&((i.opts.subMenusMinWidth||i.opts.subMenusMaxWidth)&&t.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap"),t.dataSM("scroll-arrows")&&t.dataSM("scroll-arrows").remove(),t.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""})),0==(t.attr("id")||"").indexOf(i.accessIdPrefix)&&t.removeAttr("id")}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"),this.$root.find("a.has-submenu").each(function(){var t=$(this);0==t.attr("id").indexOf(i.accessIdPrefix)&&t.removeAttr("id")}).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"),this.opts.subIndicators&&this.$root.find("span.sub-arrow").remove(),this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current"),t||(this.$root=null,this.$firstLink=null,this.$firstSub=null,this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),menuTrees.splice($.inArray(this,menuTrees),1))},disable:function(t){if(!this.disabled){if(this.menuHideAll(),!t&&!this.opts.isPopup&&this.$root.is(":visible")){var e=this.$root.offset();this.$disableOverlay=$('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex(!0),opacity:0}).appendTo(document.body)}this.disabled=!0}},docClick:function(t){this.$touchScrollingSub?this.$touchScrollingSub=null:(this.visibleSubMenus.length&&!$.contains(this.$root[0],t.target)||$(t.target).is("a"))&&this.menuHideAll()},docTouchEnd:function(t){if(this.lastTouch){if(this.visibleSubMenus.length&&(void 0===this.lastTouch.x2||this.lastTouch.x1==this.lastTouch.x2)&&(void 0===this.lastTouch.y2||this.lastTouch.y1==this.lastTouch.y2)&&(!this.lastTouch.target||!$.contains(this.$root[0],this.lastTouch.target))){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var e=this;this.hideTimeout=setTimeout(function(){e.menuHideAll()},350)}this.lastTouch=null}},docTouchMove:function(t){if(this.lastTouch){var e=t.originalEvent.touches[0];this.lastTouch.x2=e.pageX,this.lastTouch.y2=e.pageY}},docTouchStart:function(t){var e=t.originalEvent.touches[0];this.lastTouch={x1:e.pageX,y1:e.pageY,target:e.target}},enable:function(){this.disabled&&(this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),this.disabled=!1)},getClosestMenu:function(t){for(var e=$(t).closest("ul");e.dataSM("in-mega");)e=e.parent().closest("ul");return e[0]||null},getHeight:function(t){return this.getOffset(t,!0)},getOffset:function(t,e){var i;"none"==t.css("display")&&(i={position:t[0].style.position,visibility:t[0].style.visibility},t.css({position:"absolute",visibility:"hidden"}).show());var s=t[0].getBoundingClientRect&&t[0].getBoundingClientRect(),o=s&&(e?s.height||s.bottom-s.top:s.width||s.right-s.left);return o||0===o||(o=e?t[0].offsetHeight:t[0].offsetWidth),i&&t.hide().css(i),o},getStartZIndex:function(t){var e=parseInt(this[t?"$root":"$firstSub"].css("z-index"));return!t&&isNaN(e)&&(e=parseInt(this.$root.css("z-index"))),isNaN(e)?1:e},getTouchPoint:function(t){return t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0]||t},getViewport:function(t){var e=t?"Height":"Width",i=document.documentElement["client"+e],s=window["inner"+e];return s&&(i=Math.min(i,s)),i},getViewportHeight:function(){return this.getViewport(!0)},getViewportWidth:function(){return this.getViewport()},getWidth:function(t){return this.getOffset(t)},handleEvents:function(){return!this.disabled&&this.isCSSOn()},handleItemEvents:function(t){return this.handleEvents()&&!this.isLinkInMegaMenu(t)},isCollapsible:function(){return"static"==this.$firstSub.css("position")},isCSSOn:function(){return"block"==this.$firstLink.css("display")},isFixed:function(){var t="fixed"==this.$root.css("position");return t||this.$root.parentsUntil("body").each(function(){if("fixed"==$(this).css("position"))return t=!0,!1}),t},isLinkInMegaMenu:function(t){return $(this.getClosestMenu(t[0])).hasClass("mega-menu")},isTouchMode:function(){return!mouse||this.opts.noMouseOver||this.isCollapsible()},itemActivate:function(t,e){var i=t.closest("ul"),s=i.dataSM("level");if(s>1&&(!this.activatedItems[s-2]||this.activatedItems[s-2][0]!=i.dataSM("parent-a")[0])){var o=this;$(i.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(i).each(function(){o.itemActivate($(this).dataSM("parent-a"))})}if(this.isCollapsible()&&!e||this.menuHideSubMenus(this.activatedItems[s-1]&&this.activatedItems[s-1][0]==t[0]?s:s-1),this.activatedItems[s-1]=t,!1!==this.$root.triggerHandler("activate.smapi",t[0])){var n=t.dataSM("sub");n&&(this.isTouchMode()||!this.opts.showOnClick||this.clickActivated)&&this.menuShow(n)}},itemBlur:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&this.$root.triggerHandler("blur.smapi",e[0])},itemClick:function(t){var e=$(t.currentTarget);if(this.handleItemEvents(e)){if(this.$touchScrollingSub&&this.$touchScrollingSub[0]==e.closest("ul")[0])return this.$touchScrollingSub=null,t.stopPropagation(),!1;if(!1===this.$root.triggerHandler("click.smapi",e[0]))return!1;var i=$(t.target).is("span.sub-arrow"),s=e.dataSM("sub"),o=!!s&&2==s.dataSM("level");if(s&&!s.is(":visible")){if(this.opts.showOnClick&&o&&(this.clickActivated=!0),this.itemActivate(e),s.is(":visible"))return this.focusActivated=!0,!1}else if(this.isCollapsible()&&i)return this.itemActivate(e),this.menuHide(s),!1;return!(this.opts.showOnClick&&o||e.hasClass("disabled")||!1===this.$root.triggerHandler("select.smapi",e[0]))&&void 0}},itemDown:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&e.dataSM("mousedown",!0)},itemEnter:function(t){var e=$(t.currentTarget);if(this.handleItemEvents(e)){if(!this.isTouchMode()){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);var i=this;this.showTimeout=setTimeout(function(){i.itemActivate(e)},this.opts.showOnClick&&1==e.closest("ul").dataSM("level")?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",e[0])}},itemFocus:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&(!this.focusActivated||this.isTouchMode()&&e.dataSM("mousedown")||this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0]==e[0]||this.itemActivate(e,!0),this.$root.triggerHandler("focus.smapi",e[0]))},itemLeave:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&(this.isTouchMode()||(e[0].blur(),this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0)),e.removeDataSM("mousedown"),this.$root.triggerHandler("mouseleave.smapi",e[0]))},menuHide:function(t){if(!1!==this.$root.triggerHandler("beforehide.smapi",t[0])&&(t.stop(!0,!0),"none"!=t.css("display"))){var e=function(){t.css("z-index","")};this.isCollapsible()?this.opts.collapsibleHideFunction?this.opts.collapsibleHideFunction.call(this,t,e):t.hide(this.opts.collapsibleHideDuration,e):this.opts.hideFunction?this.opts.hideFunction.call(this,t,e):t.hide(this.opts.hideDuration,e),t.dataSM("ie-shim")&&t.dataSM("ie-shim").remove().css({"-webkit-transform":"",transform:""}),t.dataSM("scroll")&&(this.menuScrollStop(t),t.css({"touch-action":"","-ms-touch-action":"","-webkit-transform":"",transform:""}).unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()),t.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded","false"),t.attr({"aria-expanded":"false","aria-hidden":"true"});var i=t.dataSM("level");this.activatedItems.splice(i-1,1),this.visibleSubMenus.splice($.inArray(t,this.visibleSubMenus),1),this.$root.triggerHandler("hide.smapi",t[0])}},menuHideAll:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);for(var t=this.opts.isPopup?1:0,e=this.visibleSubMenus.length-1;e>=t;e--)this.menuHide(this.visibleSubMenus[e]);this.opts.isPopup&&(this.$root.stop(!0,!0),this.$root.is(":visible")&&(this.opts.hideFunction?this.opts.hideFunction.call(this,this.$root):this.$root.hide(this.opts.hideDuration),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").remove())),this.activatedItems=[],this.visibleSubMenus=[],this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.$root.triggerHandler("hideAll.smapi")},menuHideSubMenus:function(t){for(var e=this.activatedItems.length-1;e>=t;e--){var i=this.activatedItems[e].dataSM("sub");i&&this.menuHide(i)}},menuIframeShim:function(t){IE&&this.opts.overlapControlsInIE&&!t.dataSM("ie-shim")&&t.dataSM("ie-shim",$("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))},menuInit:function(t){if(!t.dataSM("in-mega")){t.hasClass("mega-menu")&&t.find("ul").dataSM("in-mega",!0);for(var e=2,i=t[0];(i=i.parentNode.parentNode)!=this.$root[0];)e++;var s=t.prevAll("a").eq(-1);s.length||(s=t.prevAll().find("a").eq(-1)),s.addClass("has-submenu").dataSM("sub",t),t.dataSM("parent-a",s).dataSM("level",e).parent().dataSM("sub",t);var o=s.attr("id")||this.accessIdPrefix+ ++this.idInc,n=t.attr("id")||this.accessIdPrefix+ ++this.idInc;s.attr({id:o,"aria-haspopup":"true","aria-controls":n,"aria-expanded":"false"}),t.attr({id:n,role:"group","aria-hidden":"true","aria-labelledby":o,"aria-expanded":"false"}),this.opts.subIndicators&&s[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function(t){var e,i,s=t.dataSM("parent-a"),o=s.closest("li"),n=o.parent(),a=t.dataSM("level"),r=this.getWidth(t),u=this.getHeight(t),h=s.offset(),l=h.left,d=h.top,c=this.getWidth(s),m=this.getHeight(s),p=$(window),f=p.scrollLeft(),v=p.scrollTop(),b=this.getViewportWidth(),w=this.getViewportHeight(),g=n.parent().is("[data-sm-horizontal-sub]")||2==a&&!n.hasClass("sm-vertical"),S=this.opts.rightToLeftSubMenus&&!o.is("[data-sm-reverse]")||!this.opts.rightToLeftSubMenus&&o.is("[data-sm-reverse]"),M=2==a?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,T=2==a?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY;if(g?(e=S?c-r-M:M,i=this.opts.bottomToTopSubMenus?-u-T:m+T):(e=S?M-r:c-M,i=this.opts.bottomToTopSubMenus?m-T-u:T),this.opts.keepInViewport){var y=l+e,I=d+i;if(S&&y<f?e=g?f-y+e:c-M:!S&&y+r>f+b&&(e=g?f+b-r-y+e:M-r),g||(u<w&&I+u>v+w?i+=v+w-u-I:(u>=w||I<v)&&(i+=v-I)),g&&(I+u>v+w+.49||I<v)||!g&&u>w+.49){var x=this;t.dataSM("scroll-arrows")||t.dataSM("scroll-arrows",$([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],$('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){t.dataSM("scroll").up=$(this).hasClass("scroll-up"),x.menuScroll(t)},mouseleave:function(e){x.menuScrollStop(t),x.menuScrollOut(t,e)},"mousewheel DOMMouseScroll":function(t){t.preventDefault()}}).insertAfter(t));var C=".smartmenus_scroll";t.dataSM("scroll",{y:this.cssTransforms3d?0:i-m,step:1,itemH:m,subH:u,arrowDownH:this.getHeight(t.dataSM("scroll-arrows").eq(1))}).bind(getEventsNS([["mouseover",function(e){x.menuScrollOver(t,e)}],["mouseout",function(e){x.menuScrollOut(t,e)}],["mousewheel DOMMouseScroll",function(e){x.menuScrollMousewheel(t,e)}]],C)).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:e+(parseInt(t.css("border-left-width"))||0),width:r-(parseInt(t.css("border-left-width"))||0)-(parseInt(t.css("border-right-width"))||0),zIndex:t.css("z-index")}).eq(g&&this.opts.bottomToTopSubMenus?0:1).show(),this.isFixed()&&t.css({"touch-action":"none","-ms-touch-action":"none"}).bind(getEventsNS([[touchEvents?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp",function(e){x.menuScrollTouch(t,e)}]],C))}}t.css({top:"auto",left:"0",marginLeft:e,marginTop:i-m}),this.menuIframeShim(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").css({zIndex:t.css("z-index"),width:r,height:u,marginLeft:e,marginTop:i-m})},menuScroll:function(t,e,i){var s,o=t.dataSM("scroll"),n=t.dataSM("scroll-arrows"),a=o.up?o.upEnd:o.downEnd;if(!e&&o.momentum){if(o.momentum*=.92,(s=o.momentum)<.5)return void this.menuScrollStop(t)}else s=i||(e||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(o.step));var r=t.dataSM("level");if(this.activatedItems[r-1]&&this.activatedItems[r-1].dataSM("sub")&&this.activatedItems[r-1].dataSM("sub").is(":visible")&&this.menuHideSubMenus(r-1),o.y=o.up&&a<=o.y||!o.up&&a>=o.y?o.y:Math.abs(a-o.y)>s?o.y+(o.up?s:-s):a,t.add(t.dataSM("ie-shim")).css(this.cssTransforms3d?{"-webkit-transform":"translate3d(0, "+o.y+"px, 0)",transform:"translate3d(0, "+o.y+"px, 0)"}:{marginTop:o.y}),mouse&&(o.up&&o.y>o.downEnd||!o.up&&o.y<o.upEnd)&&n.eq(o.up?1:0).show(),o.y==a)mouse&&n.eq(o.up?0:1).hide(),this.menuScrollStop(t);else if(!e){this.opts.scrollAccelerate&&o.step<this.opts.scrollStep&&(o.step+=.2);var u=this;this.scrollTimeout=requestAnimationFrame(function(){u.menuScroll(t)})}},menuScrollMousewheel:function(t,e){if(this.getClosestMenu(e.target)==t[0]){var i=((e=e.originalEvent).wheelDelta||-e.detail)>0;t.dataSM("scroll-arrows").eq(i?0:1).is(":visible")&&(t.dataSM("scroll").up=i,this.menuScroll(t,!0))}e.preventDefault()},menuScrollOut:function(t,e){mouse&&(/^scroll-(up|down)/.test((e.relatedTarget||"").className)||(t[0]==e.relatedTarget||$.contains(t[0],e.relatedTarget))&&this.getClosestMenu(e.relatedTarget)==t[0]||t.dataSM("scroll-arrows").css("visibility","hidden"))},menuScrollOver:function(t,e){if(mouse&&!/^scroll-(up|down)/.test(e.target.className)&&this.getClosestMenu(e.target)==t[0]){this.menuScrollRefreshData(t);var i=t.dataSM("scroll"),s=$(window).scrollTop()-t.dataSM("parent-a").offset().top-i.itemH;t.dataSM("scroll-arrows").eq(0).css("margin-top",s).end().eq(1).css("margin-top",s+this.getViewportHeight()-i.arrowDownH).end().css("visibility","visible")}},menuScrollRefreshData:function(t){var e=t.dataSM("scroll"),i=$(window).scrollTop()-t.dataSM("parent-a").offset().top-e.itemH;this.cssTransforms3d&&(i=-(parseFloat(t.css("margin-top"))-i)),$.extend(e,{upEnd:i,downEnd:i+this.getViewportHeight()-e.subH})},menuScrollStop:function(t){if(this.scrollTimeout)return cancelAnimationFrame(this.scrollTimeout),this.scrollTimeout=0,t.dataSM("scroll").step=1,!0},menuScrollTouch:function(t,e){if(isTouchEvent(e=e.originalEvent)){var i=this.getTouchPoint(e);if(this.getClosestMenu(i.target)==t[0]){var s=t.dataSM("scroll");if(/(start|down)$/i.test(e.type))this.menuScrollStop(t)?(e.preventDefault(),this.$touchScrollingSub=t):this.$touchScrollingSub=null,this.menuScrollRefreshData(t),$.extend(s,{touchStartY:i.pageY,touchStartTime:e.timeStamp});else if(/move$/i.test(e.type)){var o=void 0!==s.touchY?s.touchY:s.touchStartY;if(void 0!==o&&o!=i.pageY){this.$touchScrollingSub=t;var n=o<i.pageY;void 0!==s.up&&s.up!=n&&$.extend(s,{touchStartY:i.pageY,touchStartTime:e.timeStamp}),$.extend(s,{up:n,touchY:i.pageY}),this.menuScroll(t,!0,Math.abs(i.pageY-o))}e.preventDefault()}else void 0!==s.touchY&&((s.momentum=15*Math.pow(Math.abs(i.pageY-s.touchStartY)/(e.timeStamp-s.touchStartTime),2))&&(this.menuScrollStop(t),this.menuScroll(t),e.preventDefault()),delete s.touchY)}}},menuShow:function(t){if((t.dataSM("beforefirstshowfired")||(t.dataSM("beforefirstshowfired",!0),!1!==this.$root.triggerHandler("beforefirstshow.smapi",t[0])))&&!1!==this.$root.triggerHandler("beforeshow.smapi",t[0])&&(t.dataSM("shown-before",!0).stop(!0,!0),!t.is(":visible"))){var e=t.dataSM("parent-a");if((this.opts.keepHighlighted||this.isCollapsible())&&e.addClass("highlighted"),this.isCollapsible())t.removeClass("sm-nowrap").css({zIndex:"",width:"auto",minWidth:"",maxWidth:"",top:"",left:"",marginLeft:"",marginTop:""});else{if(t.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1),(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth)&&(t.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&t.css("min-width",this.opts.subMenusMinWidth),this.opts.subMenusMaxWidth)){var i=this.getWidth(t);t.css("max-width",this.opts.subMenusMaxWidth),i>this.getWidth(t)&&t.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}this.menuPosition(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").insertBefore(t)}var s=function(){t.css("overflow","")};this.isCollapsible()?this.opts.collapsibleShowFunction?this.opts.collapsibleShowFunction.call(this,t,s):t.show(this.opts.collapsibleShowDuration,s):this.opts.showFunction?this.opts.showFunction.call(this,t,s):t.show(this.opts.showDuration,s),e.attr("aria-expanded","true"),t.attr({"aria-expanded":"true","aria-hidden":"false"}),this.visibleSubMenus.push(t),this.$root.triggerHandler("show.smapi",t[0])}},popupHide:function(t){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var e=this;this.hideTimeout=setTimeout(function(){e.menuHideAll()},t?1:this.opts.hideTimeout)},popupShow:function(t,e){if(this.opts.isPopup){if(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),this.$root.dataSM("shown-before",!0).stop(!0,!0),!this.$root.is(":visible")){this.$root.css({left:t,top:e}),this.menuIframeShim(this.$root),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:t,top:e}).insertBefore(this.$root);var i=this,s=function(){i.$root.css("overflow","")};this.opts.showFunction?this.opts.showFunction.call(this,this.$root,s):this.$root.show(this.opts.showDuration,s),this.visibleSubMenus[0]=this.$root}}else alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.')},refresh:function(){this.destroy(!0),this.init(!0)},rootKeyDown:function(t){if(this.handleEvents())switch(t.keyCode){case 27:var e=this.activatedItems[0];e&&(this.menuHideAll(),e[0].focus(),(i=e.dataSM("sub"))&&this.menuHide(i));break;case 32:var i,s=$(t.target);s.is("a")&&this.handleItemEvents(s)&&(i=s.dataSM("sub"))&&!i.is(":visible")&&(this.itemClick({currentTarget:t.target}),t.preventDefault())}},rootOut:function(t){if(this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),!this.opts.showOnClick||!this.opts.hideOnClick)){var e=this;this.hideTimeout=setTimeout(function(){e.menuHideAll()},this.opts.hideTimeout)}},rootOver:function(t){this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},winResize:function(t){if(this.handleEvents()){if(!("onorientationchange"in window)||"orientationchange"==t.type){var e=this.isCollapsible();this.wasCollapsible&&e||(this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0].blur(),this.menuHideAll()),this.wasCollapsible=e}}else if(this.$disableOverlay){var i=this.$root.offset();this.$disableOverlay.css({top:i.top,left:i.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})}}}}),$.fn.dataSM=function(t,e){return e?this.data(t+"_smartmenus",e):this.data(t+"_smartmenus")},$.fn.removeDataSM=function(t){return this.removeData(t+"_smartmenus")},$.fn.smartmenus=function(options){if("string"==typeof options){var args=arguments,method=options;return Array.prototype.shift.call(args),this.each(function(){var t=$(this).data("smartmenus");t&&t[method]&&t[method].apply(t,args)})}var dataOpts=this.data("sm-options")||null;if(dataOpts)try{dataOpts=eval("("+dataOpts+")")}catch(t){dataOpts=null,alert('ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.')}return this.each(function(){new $.SmartMenus(this,$.extend({},$.fn.smartmenus.defaults,options,dataOpts))})},$.fn.smartmenus.defaults={isPopup:!1,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:!0,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollAccelerate:!0,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(t,e){t.fadeOut(200,e)},collapsibleShowDuration:0,collapsibleShowFunction:function(t,e){t.slideDown(200,e)},collapsibleHideDuration:0,collapsibleHideFunction:function(t,e){t.slideUp(200,e)},showOnClick:!1,hideOnClick:!0,noMouseOver:!1,keepInViewport:!0,keepHighlighted:!0,markCurrentItem:!1,markCurrentTree:!0,rightToLeftSubMenus:!1,bottomToTopSubMenus:!1,overlapControlsInIE:!0},$}),function(t){"function"==typeof define&&define.amd?define(["jquery","jquery.smartmenus"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){return t.extend(t.SmartMenus.Bootstrap={},{keydownFix:!1,init:function(){var e=t("ul.navbar-nav:not([data-sm-skip])");e.each(function(){function e(){o.find("a.current").parent().addClass("active"),o.find("a.has-submenu").each(function(){var e=t(this);e.is('[data-toggle="dropdown"]')&&e.dataSM("bs-data-toggle-dropdown",!0).removeAttr("data-toggle"),e.is('[role="button"]')&&e.dataSM("bs-role-button",!0).removeAttr("role")})}function i(t){var e=n.getViewportWidth();if(e!=s||t){var i=o.find(".caret");n.isCollapsible()?(o.addClass("sm-collapsible"),o.is("[data-sm-skip-collapsible-behavior]")||i.addClass("navbar-toggle sub-arrow")):(o.removeClass("sm-collapsible"),o.is("[data-sm-skip-collapsible-behavior]")||i.removeClass("navbar-toggle sub-arrow")),s=e}}var s,o=t(this),n=o.data("smartmenus");n||(o.smartmenus({subMenusSubOffsetX:2,subMenusSubOffsetY:-6,subIndicators:!1,collapsibleShowFunction:null,collapsibleHideFunction:null,rightToLeftSubMenus:o.hasClass("navbar-right"),bottomToTopSubMenus:o.closest(".navbar").hasClass("navbar-fixed-bottom")}).bind({"show.smapi":function(e,i){var s=t(i),o=s.dataSM("scroll-arrows");o&&o.css("background-color",t(document.body).css("background-color")),s.parent().addClass("open")},"hide.smapi":function(e,i){t(i).parent().removeClass("open")}}),e(),(n=o.data("smartmenus")).isCollapsible=function(){return!/^(left|right)$/.test(this.$firstLink.parent().css("float"))},n.refresh=function(){t.SmartMenus.prototype.refresh.call(this),e(),i(!0)},n.destroy=function(e){o.find("a.current").parent().removeClass("active"),o.find("a.has-submenu").each(function(){var e=t(this);e.dataSM("bs-data-toggle-dropdown")&&e.attr("data-toggle","dropdown").removeDataSM("bs-data-toggle-dropdown"),e.dataSM("bs-role-button")&&e.attr("role","button").removeDataSM("bs-role-button")}),t.SmartMenus.prototype.destroy.call(this,e)},o.is("[data-sm-skip-collapsible-behavior]")&&o.bind({"click.smapi":function(e,i){if(n.isCollapsible()){var s=t(i),o=s.parent().dataSM("sub");if(o&&o.dataSM("shown-before")&&o.is(":visible"))return n.itemActivate(s),n.menuHide(o),!1}}}),i(),t(window).bind("resize.smartmenus"+n.rootId,i))}),e.length&&!t.SmartMenus.Bootstrap.keydownFix&&(t(document).off("keydown.bs.dropdown.data-api",".dropdown-menu"),t.fn.dropdown&&t.fn.dropdown.Constructor&&t(document).on("keydown.bs.dropdown.data-api",'.dropdown-menu:not([id^="sm-"])',t.fn.dropdown.Constructor.prototype.keydown),t.SmartMenus.Bootstrap.keydownFix=!0)}}),t(t.SmartMenus.Bootstrap.init),t}),function(t){var e=0;t.fn.scrolled=function(i,s){"function"==typeof i&&(s=i,i=200);var o="scrollTimer"+e++;this.scroll(function(){var e=t(this),n=e.data(o);n&&clearTimeout(n),n=setTimeout(function(){e.removeData(o),s.call(e[0])},i),e.data(o,n)})},t.fn.AniView=function(e){var i=t.extend({animateThreshold:0,scrollPollInterval:20},e),s=this;function o(e){t(e).each(function(e,s){var o,n,a,r=t(s).parent(".av-container");t(s).is("[data-av-animation]")&&!t(r).hasClass("av-visible")&&(a=(n=t(o=r).offset()).top+t(o).scrollTop(),n.top,t(o).scrollTop(),t(o).height(),a<t(window).scrollTop()+t(window).height()-i.animateThreshold)&&(t(s).css("opacity",1),t(r).addClass("av-visible"),t(s).addClass("animated "+t(s).attr("data-av-animation")))})}t(s).each(function(e,i){t(i).wrap('<div class="av-container"></div>'),t(i).css("opacity",0)}),o(s),t(window).scrolled(i.scrollPollInterval,function(){o(s)})}}(jQuery),function(){function t(t){var e=null,i=null,s=$(t),o=$(".dropdown-menu",t),n=s.parents("ul.nav");return n.size()>0&&(e=n.data("dropdown-in")||null,i=n.data("dropdown-out")||null),{target:t,dropdown:s,dropdownMenu:o,effectIn:o.data("dropdown-in")||e,effectOut:o.data("dropdown-out")||i}}function e(t,e){e&&(t.dropdown.addClass("dropdown-animating"),t.dropdownMenu.addClass("animated"),t.dropdownMenu.addClass(e))}function i(t,e){t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.dropdown.removeClass("dropdown-animating"),t.dropdownMenu.removeClass("animated"),t.dropdownMenu.removeClass(t.effectIn),t.dropdownMenu.removeClass(t.effectOut),"function"==typeof e&&e()})}$(".dropdown, .dropup").on({"show.bs.dropdown":function(){var i=t(this);e(i,i.effectIn)},"shown.bs.dropdown":function(){var e=t(this);e.effectIn&&e.effectOut&&i(e,function(){})},"hide.bs.dropdown":function(s){var o=t(this);o.effectOut&&(s.preventDefault(),e(o,o.effectOut),i(o,function(){o.dropdown.removeClass("open")}))}})}();
;

!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(i!==t?"hidden"===o.overflowY&&(n("scroll"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(n("hidden"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,c=function(){e.clientWidth!==u&&l()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:p,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});

;
const formCountries = [
  'Kenya',
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Angola',
  'Anguilla',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'DRC',
  'Cook Islands',
  'Costa Rica',
  'Cote D\'Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Vatican',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian',
  'Rwanda',
  'Saint Helena',
  'Saint Lucia',
  'Samoa',
  'San Marino',
  'Saudi Arabia',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Somalia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad',
  'Tunisia',
  'Turkey',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'UAE',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Viet Nam',
  'Virgin Islands',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

;
function countries(list, node) {
  list.forEach(function (country) {
    let option = document.createElement('option');
    option.textContent = country;
    option.value = country;
    node.appendChild(option);
  });
}

(function populateOptions() {
  let field = elem('.form_country');
  field ? countries(formCountries, field) : false;
})();

function formFeedBack(parent, success = false) {
  let bold, modal, icon, clipBoard, title, message, messages;
  messages = {
    success: {
      title: "Message sent!",
      message: `Thank you for contacting Computech. You'll hear from us soon.`,
      icon: "icon-success.png"
    },
    failure: {
      title: "Something is off!",
      message: `<a href = 'mailto:marketing@computechlimited.com'<u>Contact us</u></a> directly and we'll get you set up in no time.`,
      icon: "icon-failure.png"
    }
  }

  let feedback = success ? messages.success : messages.failure;
  let modalClass = 'modal_form';

  modal = createEl();
  modal.className = modalClass;
  clipBoard = createEl();
  title = createEl('h3');
  title.textContent = feedback.title;
  bold = createEl('strong');
  bold.innerHTML = feedback.message;
  message = createEl('p')
  message.appendChild(bold);
  icon = createEl('img');
  icon.src = `/icons/${feedback.icon}`;
  icon.className = 'modal_icon';

  clipBoard.appendChild(icon);
  clipBoard.appendChild(title);
  clipBoard.appendChild(message);
  modal.appendChild(clipBoard);

  // append modal only once
  // parent node
  let node = parent.parentNode;
  let children = node.children;
  let hasModal = containsClass(children[children.length - 1], modalClass);

  if (!hasModal) {
    node.appendChild(modal);
    window.scrollTo(0, 201);
  }

  // remove modal after 3 seconds
  setTimeout(function () {
    modal.remove();
  }, 3000)
}

function formValues(form) {
  const isValidElement = element => {
    return element.name && element.value;
  };

  const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
  };

  const isCheckbox = element => element.type === 'checkbox';
  const isMultiSelect = element => element.options && element.multiple;

  const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
  }, []);

  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (isValidElement(element) && isValidValue(element)) {
      if (isCheckbox(element)) {
        data[element.name] = (data[element.name] || []).concat(element.value);
      } else if (isMultiSelect(element)) {
        data[element.name] = getSelectValues(element);
      } else {
        data[element.name] = element.value;
      }
    }
    const currentPage = window.location.href;
    let referrer = document.referrer;
    referrer ? data.previousPage = referrer : "self";
    data.currentPage = currentPage;
    return data;
  }, {});

  const data = formToJSON(form.elements);
  return JSON.stringify(data, null, "  ");

}

function submitForm(form) {
  let formAction = form.dataset.action;
  console.log(formAction);

  let data = formValues(form);
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: data
  }

  fetch(formAction, options)
    .then(response => response.text())
    .then(() => {
      formFeedBack(form, true);
    })
    .catch(() => {
      formFeedBack(form)
    });
}

(function handleForm() {
  // request options
  let formID = '#contactform';
  let form = elem(formID);
  let submitButton = elem('#submit');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitButton.disabled = true;
      submitForm(form);
      form.reset();
      return false;
    });
  }
})();
