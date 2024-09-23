document.getElementById('main-donation-button').addEventListener("click", function(){
    document.getElementById('main-history-button').classList.remove('active-color');
    
    this.classList.add('active-color');
    showSectionById('donation-form');
});


document.getElementById('main-history-button').addEventListener("click", function(){
    document.getElementById('main-donation-button').classList.remove('active-color');
    this.classList.add('active-color');
    showSectionById('history-page');
});
    