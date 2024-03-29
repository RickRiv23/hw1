// Created variables for sections vs nav clickables
var sectionJS = document.getElementById("js"),
    sectionReact = document.getElementById("react"),
    sectionVue = document.getElementById("vue"),
    sectionAng = document.getElementById("angular");
var navJS = document.getElementById("js-nav"),
    navReact = document.getElementById("react-nav"),
    navVue = document.getElementById("vue-nav"),
    navAng = document.getElementById("angular-nav");
    
    
// Event handlers
navJS.addEventListener("click", function(){
    sectionJS.scrollIntoView({behavior: 'smooth', block:'start'});
});
navReact.addEventListener("click", function(){
    sectionReact.scrollIntoView({behavior: 'smooth', block:'start'});
});
navVue.addEventListener("click", function(){
    sectionVue.scrollIntoView({behavior: 'smooth', block:'start'});
});
navAng.addEventListener("click", function(){
    sectionAng.scrollIntoView({behavior: 'smooth', block:'start'});
});