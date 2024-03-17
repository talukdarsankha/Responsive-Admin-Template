

const allSideMenu = document.querySelectorAll('#sidebar .side-menu li a');

allSideMenu.forEach(e=>{
    const li= e.parentElement;
    e.addEventListener('click',function (){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active')
        })
        li.classList.add('active');
    }); 
}); 



//   TOGGLE SIDEBAR 
const menuBar = document.querySelector('#content nav .bx.bx-menu-alt-right')
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click',function(){
    sidebar.classList.toggle('hide');
})





if (window.innerWidth < 768) {
    // Code to execute if the window width is less than 768 pixels
    console.log("Window width is less than 768 pixels");
} else {
    // Code to execute if the window width is greater than or equal to 768 pixels
    console.log("Window width is 768 pixels or more");
}





const searchBtn = document.querySelector('#content nav form .form-input button');
const searchBtnIcon = document.querySelector('#content nav form .form-input button .bx.bx-search-alt');
const searchForm = document.querySelector('#content nav form');
 
    searchBtn.addEventListener('click',function(e){
        if(window.innerWidth < 576){
     e.preventDefault();
     searchForm.classList.toggle('show');
     if(searchForm.classList.contains('show')){
        searchBtnIcon.classList.replace('bx-search-alt','bxs-message-square-x');  
        // <i class='bx bxs-message-square-x'></i>
     }else{
        searchBtnIcon.classList.replace('bxs-message-square-x','bx-search-alt'); 
     }
        }
    })


    if(window.innerWidth < 768){
        sidebar.classList.add('hide');
    }else if(window.innerWidth>576){
        searchBtnIcon.classList.replace('bxs-message-square-x','bx-search-alt'); 
        searchForm.classList.remove('show');
    }


    window.addEventListener('resize',function (){
        if(this.innerWidth>576){
            searchBtnIcon.classList.replace('bxs-message-square-x','bx-search-alt'); 
            searchForm.classList.remove('show');
        } 
    })
