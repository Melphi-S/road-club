(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function i(t,n,o){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e(this,i),this._sliderId=t,this.slider=document.querySelector(t),this._slides=Array.from(this.slider.querySelectorAll(n)),this._visibleSlidesOptions=o,this._togglingElementsSelectors=s,this._visibleSlides={}}var n,o;return n=i,(o=[{key:"activateSlider",value:function(){var e=0;for(var t in this._visibleSlidesOptions)this._visibleSlides[t]=this._slides[e],e+=1;this._enableElements()}},{key:"_toggleElements",value:function(e){var t=this;if(this._togglingElementsSelectors){var i=[];return this._togglingElementsSelectors.forEach((function(n){i.push(t._visibleSlides[e].querySelector(n))})),i}}},{key:"_enableElements",value:function(){var e=this,t=function(t){e._visibleSlides[t].classList.add(e._visibleSlidesOptions[t].selector),e._togglingElementsSelectors&&!1===e._visibleSlidesOptions[t].invisibleElements&&e._toggleElements(t).forEach((function(i){return i.style.display=e._visibleSlidesOptions[t].display}))};for(var i in this._visibleSlidesOptions)t(i)}},{key:"_disableElements",value:function(){for(var e in this._visibleSlidesOptions)this._togglingElementsSelectors&&this._toggleElements(e).forEach((function(e){return e.style.display="none"})),this._visibleSlides[e].classList.remove(this._visibleSlidesOptions[e].selector)}},{key:"_moveForward",value:function(){var e=0;for(var t in this._visibleSlides){var i=this._slides.indexOf(this._visibleSlides[t]);i<this._slides.length-1?i+=1:(i=e,e+=1),this._visibleSlides[t]=this._slides[i]}}},{key:"_moveBack",value:function(){var e=this._slides.length-1;for(var t in this._visibleSlides){var i=this._slides.indexOf(this._visibleSlides[t]);0!==i?i-=1:(i=e,e-=1),this._visibleSlides[t]=this._slides[i]}}},{key:"_moveToPoint",value:function(e){var t=this._slides.indexOf(this.slider.querySelector("".concat(this._sliderId,"-").concat(e))),i=0;for(var n in this._visibleSlides)this._visibleSlides[n]=this._slides[t],t<this._slides.length-1?t+=1:(t=i,i+=1)}},{key:"_setVisibleSlides",value:function(e){"next"===e?this._moveForward():"prev"===e?this._moveBack():this._moveToPoint(e)}},{key:"moveSlides",value:function(e){this._disableElements(),this._setVisibleSlides(e),this._enableElements()}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),i}();function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._inputList=Array.from(this._formElement.querySelectorAll(i.inputSelector)),this._submitButton=this._formElement.querySelector(i.submitButtonSelector),this._inactiveButtonClass=i.inactiveButtonClass}var t,i;return t=e,(i=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._disableButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState()}))})),this._formElement.addEventListener("reset",(function(){e._disableButton()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var l=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"toggleBurgerMenu",(function(){i._burger.classList.contains(i._options.burgerActiveClass)?i.close():i.open()})),r(this,"_handlePressEsc",(function(e){e.preventDefault(),"Escape"===e.key&&i.close()})),r(this,"_handlePressClick",(function(e){i._options.clickableClasses.forEach((function(t){e.target.classList.contains(t)&&setTimeout((function(){i.close()}),100)}))})),this._options=t,this._burger=document.querySelector(t.burgerSelector),this._burgerButton=document.querySelector(t.burgerButtonSelector),this._burgerButtonElements=this._burgerButton.querySelectorAll(t.burgerButtonElementSelector),this._maxValidWidth=t.maxValidWidth}var t,i;return t=e,(i=[{key:"open",value:function(){this._burger.classList.add(this._options.burgerActiveClass),this._setEventListeners(),this._activateBurgerButton()}},{key:"close",value:function(){this._burger.classList.remove(this._options.burgerActiveClass),this._removeEventListeners(),this._deactivateBurgerButton()}},{key:"handleScreenWidth",value:function(){window.innerWidth>this._maxValidWidth&&this.close()}},{key:"_setEventListeners",value:function(){this._burger.addEventListener("mousedown",this._handlePressClick),document.addEventListener("keydown",this._handlePressEsc)}},{key:"_removeEventListeners",value:function(){this._burger.removeEventListener("mousedown",this._handlePressClick),document.removeEventListener("keydown",this._handlePressEsc)}},{key:"_deactivateBurgerButton",value:function(){var e=this;this._burgerButtonElements.forEach((function(t){t.classList.remove(e._options.burgerButtonActiveElementClass)}))}},{key:"_activateBurgerButton",value:function(){var e=this;this._burgerButtonElements.forEach((function(t){t.classList.add(e._options.burgerButtonActiveElementClass)}))}}])&&s(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t,i){var n;n=t,e.forEach((function(e){e.classList.remove(n)}));var o=function(e){var t=document.querySelector(e).getAttribute("id").split("-").slice(1).join("-");return document.querySelector("#button-".concat(t))}(i);!function(e,t){e.classList.add(t)}(o,t)}var a=!0,c={nextButton:document.querySelector(".surfaces__button_type_next"),prevButton:document.querySelector(".surfaces__button_type_previous"),highwayButton:document.querySelector("#button-highway"),gravelButton:document.querySelector("#button-gravel"),ttButton:document.querySelector("#button-tt"),selectBikes:document.querySelector(".bikes__select")},_=[c.highwayButton,c.gravelButton,c.ttButton],d=Array.from(document.querySelectorAll(".theme-toggle__button")),v=document.querySelector(".footer__email-form"),h=document.querySelector(".body"),f=Array.from(document.querySelectorAll(".subtitle")),m=document.querySelector(".intro__author-profession"),b=Array.from(document.querySelectorAll(".surfaces__button")),g=Array.from(document.querySelectorAll(".bikes__button")),y=document.querySelector(".footer__copyright"),S=Array.from(document.querySelectorAll(".theme-toggle__logo")),p=Array.from(document.querySelectorAll(".theme-toggle__button-label")),k=document.querySelector(".footer__email-input"),E=Array.from(document.querySelectorAll(".link")),B=Array.from(document.querySelectorAll(".section")),A=Array.from(document.querySelectorAll(".bikes__option")),w=Array.from(document.querySelectorAll(".burger-button__line-element")),L=new Map([[h,"body_theme"],[m,"intro__author-profession_theme"],[f,"subtitle_theme"],[b,"surfaces__button_theme"],[g,"bikes__button_theme"],[y,"footer__copyright_theme"],[S,"theme-toggle__logo_theme"],[p,"theme-toggle__button-label_theme"],[k,"footer__email-input_theme"],[E,"link_theme"],[B,"section_theme"],[A,"bikes__option_theme"],[w,"burger-button__line-element_theme"]]),q=document.querySelector(".burger-button");function C(e){var t=document.querySelector(".surface_position_active").getAttribute("id").split("-")[1];e.value=t}function x(e,t){window.innerWidth<=768&&e.addEventListener("change",(function(){var e=this.value;t.forEach((function(t){t.moveSlides(e),t.moveSlides(e)})),O()}))}function O(){var e=document.querySelector(".bikes__group-container_active"),t=e.querySelector(".bikes__toggle-container"),i=Array.from(t.querySelectorAll(".bikes__toggle")),n=e.querySelector(".bikes__bike-container_active").getAttribute("id");u(i,"bikes__toggle_active","#".concat(n))}var P=Array.from(document.querySelectorAll(".bikes__group-container"));function W(){window.innerWidth<=768&&P.forEach((function(e){var t,n=e.getAttribute("id"),o=new i("#".concat(n),".bikes__bike-container",{currentSlide:{selector:"bikes__bike-container_active",invisibleElements:!1,display:"block"}});o.activateSlider(),O(),t=o,Array.from(t.slider.querySelectorAll(".bikes__toggle")).forEach((function(e){e.addEventListener("mousedown",(function(){var i=e.getAttribute("id").split("-").slice(-1);t.moveSlides("".concat(i)),O()}))}))}))}var j=new i("#surface",".surface",{currentSlide:{selector:"surface_position_active",invisibleElements:!1,display:"flex"},nextSlide:{selector:"surface_position_next",invisibleElements:!0,display:"flex"}},[".surface__title",".surface__subtitle",".surface__scheme-container"]);j.activateSlider();var V=new i("#bike-group",".bikes__group-container",{currentSlide:{selector:"bikes__group-container_active",invisibleElements:!1,display:"block"}});V.activateSlider(),c.nextButton.addEventListener("mousedown",(function(){j.moveSlides("next"),V.moveSlides("next"),u(_,"bikes__button_active",".surface_position_active"),C(c.selectBikes),O()})),c.prevButton.addEventListener("mousedown",(function(){j.moveSlides("prev"),V.moveSlides("prev"),u(_,"bikes__button_active",".surface_position_active"),C(c.selectBikes),O()})),c.highwayButton.addEventListener("mousedown",(function(){j.moveSlides("highway"),V.moveSlides("highway"),u(_,"bikes__button_active",".surface_position_active")})),c.gravelButton.addEventListener("mousedown",(function(){j.moveSlides("gravel"),V.moveSlides("gravel"),u(_,"bikes__button_active",".surface_position_active")})),c.ttButton.addEventListener("mousedown",(function(){j.moveSlides("tt","flex"),V.moveSlides("tt"),u(_,"bikes__button_active",".surface_position_active")})),u(_,"bikes__button_active",".surface_position_active"),d.forEach((function(e){e.addEventListener("change",(function(){L.forEach((function(e,t){a?Array.isArray(t)?t.forEach((function(t){t.classList.remove("".concat(e,"_light")),t.classList.add("".concat(e,"_dark"))})):(t.classList.remove("".concat(e,"_light")),t.classList.add("".concat(e,"_dark"))):Array.isArray(t)?t.forEach((function(t){t.classList.remove("".concat(e,"_dark")),t.classList.add("".concat(e,"_light"))})):(t.classList.remove("".concat(e,"_dark")),t.classList.add("".concat(e,"_light")))})),a=!a,document.body.classList.contains("body_theme_dark")?d.forEach((function(e){e.checked=!0})):d.forEach((function(e){e.checked=!1}))}))})),new o(v,{inputSelector:".footer__email-input",submitButtonSelector:".footer__email-button",inactiveButtonClass:"footer__email-button_inactive"}).enableValidation();var I=new l({burgerSelector:".burger-menu",burgerActiveClass:"burger-menu_active",burgerButtonSelector:".burger-button",burgerButtonElementSelector:".burger-button__line-element",burgerButtonActiveElementClass:"burger-button__line-element_active",clickableClasses:["link"],maxValidWidth:480});q.addEventListener("mousedown",I.toggleBurgerMenu),x(c.selectBikes,[j,V]),W(),window.addEventListener("resize",(function(){W(),x(c.selectBikes,[j,V]),I.handleScreenWidth()})),document.querySelectorAll('a[href^="#"').forEach((function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.addEventListener("click",(function(e){e.preventDefault();var i=this.getAttribute("href").substring(1),n=document.getElementById(i),o=t?document.querySelector(t).offsetHeight:0,s=n.getBoundingClientRect().top-o;window.scrollBy({top:s,behavior:"smooth"})}))}(e,".header")}))})();