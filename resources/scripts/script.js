let home = document.querySelector(".home")
let homeMenu = document.querySelector(".home_menu")
let landing = document.querySelector(".landing")
let landingMenu = document.querySelector(".landing_menu")
let shop = document.querySelector(".shop")
let shop_menu = document.querySelector(".shop_menu")
let pages = document.querySelector(".pages")
let pages_menu = document.querySelector(".pages_menu")
let blog = document.querySelector(".blog")
let blog_menu = document.querySelector(".blog_menu")
let conquer_container = document.querySelectorAll(".hero-conquer-image-container ")
let conquer_addtocart = document.querySelectorAll(".hero-conque-add-to-cart")
home.onmousemove = () => {
    homeMenu.classList.add("activehome")
}
home.onmouseout = () => {
    homeMenu.classList.remove("activehome")
}
homeMenu.onmousemove = () => {
    homeMenu.classList.add("activehome")
}
homeMenu.onmouseout = () => {
    homeMenu.classList.remove("activehome")
}
landing.onmousemove = () => {
    landingMenu.classList.add("activelanding")
}
landing.onmouseout = () => {
    landingMenu.classList.remove("activelanding")
}
landingMenu.onmousemove = () => {
    landingMenu.classList.add("activelanding")
}
landingMenu.onmouseout = () => {
    landingMenu.classList.remove("activelanding")
}
shop.onmousemove = () => {
    shop_menu.classList.add("activeshop")
}
shop.onmouseout = () => {
    shop_menu.classList.remove("activeshop")
}
shop_menu.onmousemove = () => {
    shop_menu.classList.add("activeshop")
}
shop_menu.onmouseout = () => {
    shop_menu.classList.remove("activeshop")
}
pages.onmousemove = () => {
    pages_menu.classList.add("activepages")
}
pages.onmouseout = () => {
    pages_menu.classList.remove("activepages")
}
pages_menu.onmousemove = () => {
    pages_menu.classList.add("activepages")
}
pages_menu.onmouseout = () => {
    pages_menu.classList.remove("activepages")
}

blog.onmousemove = () => {
    blog_menu.classList.add("activeblog") }
blog.onmouseout = () => {
    blog_menu.classList.remove("activeblog") }

blog_menu.onmousemove = () => {
    blog_menu.classList.add("activeblog") }

blog_menu.onmouseout = () => {
    blog_menu.classList.remove("activeblog") }
    //-------------------------------------------------------------------------------------------------------
  conquer_container.forEach((conquer_container, index) => {
    conquer_container.onmousemove = () => {
        conquer_addtocart[index].classList.add("active-conqueraddtocart")
    }
    conquer_container.onmouseleave = () => {
        conquer_addtocart[index].classList.remove("active-conqueraddtocart")
    }
})
conquer_addtocart.forEach((conquer_addtocart, index) => {
    conquer_addtocart.onmousemove = () => {
        conquer_addtocart[index].classList.add("active-conqueraddtocart")
    }
    conquer_addtocart.onmouseleave = () => {
        conquer_addtocart[index].classList.remove("active-conqueraddtocart")
    }
})