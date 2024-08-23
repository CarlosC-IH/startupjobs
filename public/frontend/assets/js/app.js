"use strict";function _defineProperty(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}!function(e){e(".menu-item-has-children > a").on("click",function(){var s=e(this).parent("li");s.hasClass("open")?(s.removeClass("open"),s.find("li").removeClass("open"),s.find("ul").slideUp(500),s.find(".rt-mega-menu").slideUp(500)):(s.addClass("open"),s.children("ul").slideDown(500),s.children(".rt-mega-menu").slideDown(500),s.siblings("li").children("ul").slideUp(),s.siblings("li").removeClass("open"),s.siblings("li").find("li").removeClass("open"),s.siblings("li").find("ul").slideUp())}),e(".has-children > .jobwidget_tiitle").on("click",function(){var s=e(this).parent("li");s.hasClass("open")?(s.removeClass("open"),s.find("li").removeClass("open"),s.find("ul").slideUp(200)):(s.addClass("open"),s.children("ul").slideDown(200),s.siblings("li").children("ul").slideUp(),s.siblings("li").removeClass("open"),s.siblings("li").find("li").removeClass("open"),s.siblings("li").find("ul").slideUp())}),e(window).width()>991.98&&(i=(s=e(".rt-sticky")).outerHeight(),t=e(document).scrollTop(),e(window).on("load",function(){e(document).scrollTop()>i&&(s.hasClass("rt-sticky-active")?s.removeClass("rt-sticky-active"):s.addClass("rt-sticky-active"))}),e(window).on("scroll",function(){var i=e(document).scrollTop(),o=e(".rt-sticky-active");i>t?o.addClass("sticky"):o.removeClass("sticky"),0===i?s.removeClass("rt-sticky-active"):s.addClass("rt-sticky-active"),t=e(document).scrollTop()})),e(".main-menu ul li").on("click",function(){e(".main-menu ul li").removeClass("active"),e(this).addClass("active")}),e(".menu-click").on("click",function(){return e(".main-menu").toggleClass("active-mobile-menu"),e(".rt-mobile-menu-overlay").toggleClass("active"),!1}),e(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click",function(){return e(".main-menu").removeClass("active-mobile-menu"),e(".rt-mobile-menu-overlay").removeClass("active"),!1}),e(".counter").counterUp({delay:10,time:1e3}),e.scrollUp({scrollText:'<i class="ph-caret-up-light"></i>'}),e(".rt-selectactive").select2({minimumResultsForSearch:5}),e(".select-2").select2({minimumResultsForSearch:5}),e(".select2-taggable").select2({tags:!0,minimumResultsForSearch:1/0}),e(".select2-taggable.select2-search").select2({tags:!0,minimumResultsForSearch:1}),e(".toggle-filter-sidebar").on("click",function(){e(".sidebar-widget-overlay, .jobsidebar").toggleClass("active")}),e(".sidebar-widget-overlay, .close-me").on("click",function(){e(".sidebar-widget-overlay, .jobsidebar").removeClass("active")}),e(".close-tag").on("click",function(){e(this).parent(".single-tag").hide()}),e(".open-adf").on("click",function(){e(".jobsearchBox").toggleClass("active-adf"),e(".job-filter-overlay").toggleClass("active"),e(".advance-hidden-filter-menu").slideToggle(300),e("body").toggleClass("body-no-scrolling")}),e(".job-filter-overlay").on("click",function(){e(".jobsearchBox").removeClass("active-adf"),e(".job-filter-overlay").removeClass("active"),e(".advance-hidden-filter-menu").slideUp(300),e("body").removeClass("body-no-scrolling")}),e(".custom-scroll").overlayScrollbars({});var s,i,t,o,l=document.getElementById("togglclass1"),n=document.getElementById("toggoleSidebar"),a=document.getElementsByClassName("condition_class");e(".toggole-colum-classes").on("click",function(){e(n).toggleClass("d-none"),n.classList.contains("d-none")?(l.classList.add("col-xl-12"),l.classList.remove("col-lg-8")):(l.classList.add("col-lg-8"),l.classList.remove("col-xl-12")),l.classList.contains("col-lg-8")?e(a).removeClass("col-xl-4"):e(a).addClass("col-xl-4")}),document.getElementById("area-spaline")&&new ApexCharts(document.querySelector("#area-spaline"),{chart:{height:340,type:"area",toolbar:{autoSelected:"pan",show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},series:[{name:"Series 1",data:[50,75,60,80,55,70,60]}],colors:["#0066FF"],fill:{type:"gradient",colors:"#0066FF",gradient:{shadeIntensity:1,opacityFrom:.1,opacityTo:.9,stops:[0,100,0]}},markers:{size:5,colors:["#fff"],strokeColor:"#0066FF",strokeWidth:2},tooltip:{theme:"dark",x:{show:!1},shared:!1,style:{fontSize:"16px",fontFamily:"Inter"},marker:{show:!1},custom:function e(s){var i=s.series,t=s.seriesIndex,o=s.dataPointIndex,l=s.w;return'<div class="arrow_box"><span>'+i[t][o]+'</span><span class="d-block">'+l.globals.labels[o]+": </div>"}},xaxis:{borderColor:"red",categories:["Su","Mo","Tu","We","Th","Fr","Sa"]}}).render(),e(window).Scrollax(),e(".togglepass").on("click",function(){var e=document.getElementById("myInput");"password"===e.type?e.type="text":e.type="password"}),e(".togglepass2").on("click",function(){var e=document.getElementById("myInput2");"password"===e.type?e.type="text":e.type="password"}),e(".sidebar-open-nav").on("click",function(){e(".d-sidebar, .d-page-content ").toggleClass("acitve"),e(".sidebar-overlay").toggleClass("active")}),e(".close-sidebar").on("click",function(){e(".d-sidebar, .d-page-content ").toggleClass("acitve"),e(".sidebar-overlay").toggleClass("active")}),e(".sidebar-overlay").on("click",function(){e(".d-sidebar, .d-page-content ").toggleClass("acitve"),e(".sidebar-overlay").toggleClass("active")}),e("#flexSwitchCheckDefault").on("change",function(){e("body").toggleClass("price-toggole")});var r=e(".notification-icon");e(document).mouseup(function(e){r.is(e.target)||0!==r.has(e.target).length||r.removeClass("notification-visiable")}),e(".notification-icon").on("click",function(e){e.preventDefault(),r.toggleClass("notification-visiable")});var c=e(".switch-profile");function d(e,s){s.addEventListener("click",function(i){s.classList.toggle("ph-eye-slash"),"password"===e.type?e.type="text":e.type="password"})}e(document).mouseup(function(e){c.is(e.target)||0!==c.has(e.target).length||c.removeClass("profile-visiable")}),e(".switch-profile").on("click",function(e){e.preventDefault(),c.toggleClass("profile-visiable")});var u=document.querySelector("#password-hide_show"),p=document.querySelector(".has-badge i"),g=document.querySelector("#password-hide_show1"),v=document.querySelector(".select-icon__one i");function m(s,i){e("#cvModal").modal("show"),e("#apply_job_id").val(s),e("#apply_job_title").text(i)}(u||p)&&d(u,p),(g||v)&&d(g,v),e("#datepicker").datepicker({dateFormat:"dd-mm-yy",duration:"fast"}),AOS.init({disable:"mobile",easing:"ease-in-out-sine",once:!0}),e(".testimonail_active").length>0&&e(".testimonail_active").slick((_defineProperty(o={slidesToShow:3,infinite:!0,slidesToScroll:2,dots:!0,prevArrow:e(".slickprev2"),nextArrow:e(".slicknext2")},"prevArrow",'<a type="button" class="slide-arrow prev-arrow"></a>'),_defineProperty(o,"nextArrow",'<a type="button" class="slide-arrow next-arrow"></a>'),_defineProperty(o,"responsive",[{breakpoint:1199,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:320,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:210,settings:{slidesToShow:1,slidesToScroll:1}}]),o))}(jQuery);var current_fs,next_fs,previous_fs,opacity,sliderRange=document.querySelector(".sliderrange"),output=document.querySelector("#value-range");output&&(output.innerHTML="".concat(sliderRange.value," miles")),sliderRange&&(sliderRange.oninput=function(){output.innerHTML="".concat(this.value," miles")},sliderRange.addEventListener("mousemove",function(){var e=sliderRange.value,s="linear-gradient(\n        90deg,\n        #0066FF ".concat(e,"%,\n        rgb(218, 221, 229) ").concat(e,"%\n      )");sliderRange.style.background=s}));var current=1,steps=$("fieldset").length;$(".next").on("click",function(){current_fs=$(this).parent(),next_fs=$(this).parent().next(),$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active"),next_fs.show(),current_fs.animate({opacity:0},{step:function e(s){opacity=1-s,current_fs.css({display:"none",position:"relative"}),next_fs.css({opacity:opacity})},duration:500})}),$(".previous").on("click",function(){current_fs=$(this).parent(),previous_fs=$(this).parent().prev(),$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active"),previous_fs.show(),current_fs.animate({opacity:0},{step:function e(s){opacity=1-s,current_fs.css({display:"none",position:"relative"}),previous_fs.css({opacity:opacity})},duration:500})});var hideMenuBtn=document.querySelector(".hide-menu-btn"),hideMenu=document.getElementById("progressbar");hideMenuBtn&&hideMenuBtn.addEventListener("click",function(){hideMenu.classList.add("hide-menu")});