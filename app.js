function toogleShow(){
    //  var sidebar = document.querySelector("");
    var content = document.querySelector("#sidebar-content");
    var sidebar = document.querySelector('.sidebar');
    var showbtn = document.querySelector("#show")
    var closebtn = document.querySelector("#close");
    content.style.display="block"
    sidebar.style.width="100vw";
    showbtn.style.display="none";
    closebtn.style.display="block";
}
function toogleClose(){
    var content = document.querySelector("#sidebar-content");
    var sidebar = document.querySelector(".sidebar");
    var showbtn = document.querySelector("#show")
    var closebtn = document.querySelector("#close")
    content.style.display="none"
    sidebar.style.width="0";
    showbtn.style.display="block";
    closebtn.style.display="none";
}