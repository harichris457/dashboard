"use strict";angular.module(window.APP.modules.main).service("siteMenubar",["$rootScope",function(a){var b={init:function(){$("html").removeClass("css-menubar").addClass("js-menubar");var a=Breakpoints.current();switch(a.name){case"lg":$("body").removeClass("site-menubar-fold").addClass("site-menubar-unfold");break;case"md":case"sm":$("body").removeClass("site-menubar-unfold").addClass("site-menubar-fold");break;case"xs":$("body").removeClass("site-menubar-open").addClass("site-menubar-hide site-menubar-unfold")}},animate:function(a,b){$("body").addClass("site-menubar-changing"),a(),setTimeout(function(){b&&b(),$("body").removeClass("site-menubar-changing")},500)},open:function(){this.animate(function(){$("body").removeClass("site-menubar-hide").addClass("site-menubar-open site-menubar-unfold"),$("html").addClass("disable-scrolling"),$(".hamburger").removeClass("hided")})},hide:function(){this.animate(function(){$("html").removeClass("disable-scrolling"),$("body").removeClass("site-menubar-open").addClass("site-menubar-hide site-menubar-unfold"),$(".hamburger").addClass("hided")},function(){})},unfold:function(){this.animate(function(){$("body").removeClass("site-menubar-fold").addClass("site-menubar-unfold")})},fold:function(){this.animate(function(){$("body").removeClass("site-menubar-unfold").addClass("site-menubar-fold")})},toggle:function(){var a=Breakpoints.current();switch(a.name){case"lg":case"md":case"sm":$("body").hasClass("site-menubar-unfold")&&!$("body").hasClass("site-menubar-fold")?this.fold():this.unfold();break;case"xs":$("body").hasClass("site-menubar-hide")&&!$("body").hasClass("site-menubar-open")?this.open():this.hide()}}};return b}]);