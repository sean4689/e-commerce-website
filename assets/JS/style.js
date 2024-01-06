/*let slideIndex = 1; //預設變數為1
showSlides();

function showSlides(props) {
    let i;
    //取得所有mySlides（class）
    let slides = document.getElementsByClassName("singleSlide");
        //將所有圖片隱藏
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    //如果n大於slides的長度，代表已經到最後一張，所以要從第一張開始
    if (props > slides.length) {
        slideIndex = 1;
    }

    //array都從0開始，所以要減一，但我們的slideIndex是從1開始，已經賦予值
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

function plusSlides(a) {
    showSlides((slideIndex += a));
}
// 使用者點擊左右按鈕時，傳入參數1或-1，代表下一張或下一張
plusSlides(slideIndex);*/

//var slideIndex = 0; 
// showSlides();
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
var slides = document.getElementsByClassName("singleSlide");
var i;

for (var i = 1; i < slides.length; i++) {
    slides[i].style.display = 'none';
}

function showSlides(index) {

    /* 隱藏所有圖片
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    // 自動輪播
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }    

    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // 切換時間為 5 秒*/
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlides(currentSlide + 1);
}

function prevSlide() {
    showSlides(currentSlide - 1);
}
