fetch('product.json')
    .then(response => response.json())
    .then(data => {
        //    console.log(data) ;
        const features_product = document.querySelector(".features-product");
        const boxes = features_product.querySelector(".container");
const limit = Number(features_product.getAttribute("data-limit"));
    let productsToShow;

    if (limit) {
        productsToShow = data.slice(0, limit);
    } else {
        productsToShow = data; 
    
    }
        productsToShow.forEach(product => {
                boxes.innerHTML += `
            <div class="box" data-id="${product.id}">
                <img src="${product.img}" alt="">
                <div class="description">
                    <span>${product.catetory}</span>
                    <h5>${product.name}</h5>
                </div>
                <div class="stars">
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                </div>
                <div class="price-icon">
                    <h4>$${product.price}</h4>
                    <a href="#"><i class="fa-solid fa-cart-shopping "></i></a>
                </div>
            </div>
    `
        });

    })
                document.addEventListener("click", function (e) {
            const box = e.target.closest(".box");
            if (box) {
              const box_id = box.getAttribute("data-id")
        window.location.href = `sproduct.html?id=${box_id}`;
            }
            
        });

    