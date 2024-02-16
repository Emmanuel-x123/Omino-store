const wrapper = document.querySelector(".sliderWrapper");
const menuitem = document.querySelectorAll(".menuitem");

const products = [
    {
      id: 1,
      title: "T-SHIRT",
      price: 200,
     colors:[
        {
       code: "black",
       img: "./img/product 1.jpg",     
        },
        {
        code: "blue",
        img: "./img/t-2.jpg",    
        },
     ],
    },

    {
        id: 2,
        title: "Suits",
        price: 2000,
       colors:[
          {
         code: "skyblue",
         img: "./img/st-1.jpg",     
          },
          {
          code: "seagreen",
          img: "./img/suit-2.jpg",    
          },
       ],
  
      },

      {
        id: 3,
        title: "Native",
        price: 600,
       colors:[
          {
         code: "navy",
         img: "./img/native.jpg",     
          },
          {
          code: "black",
          img: "./img/nat-2.jpg",    
          },
       ],
  
      },

      {
        id: 4,
        title: "Two Piece",
        price: 1000,
       colors:[
          {
         code: "gray",
         img: "./img/prdt 4.jpg",     
          },
          {
          code: "darkblue",
          img: "./img/tpc.jpg",    
          },
       ],
  
      },

      {
        id: 5,
        title: "Styles",
        price: 400,
       colors:[
          {
         code: "white",
         img: "./img/prdt 5.jpg",     
          },
          {
          code: "white",
          img: "./img/style2.jpg",    
          },
       ],
  
      },
]

let choosenProduct = products [0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes =document.querySelectorAll(".size");




menuitem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = products[index]

        //change texts of current products

        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //asign new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{  
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"    
        })
        size.style.backgroundColor = "black"
     size.style.color = "white"
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display="none"
})