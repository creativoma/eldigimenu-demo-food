export const componenteScroll=()=>{let o=document.getElementById("btn-top");document.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?o.classList="active":o.classList="inactive"}};