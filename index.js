
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () =>{
    headerElem.classList.toggle("active");
})



// for latest work btns

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");


p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains('p-btn'))  return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the data number

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const image_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    image_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});


// scoller button

function scrollToTop(){
    window.scrollTo(0, 0);
}






