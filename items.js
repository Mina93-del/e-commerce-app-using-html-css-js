fetch('product.json')
    .then(response => response.json())
    .then(data => {
        //    console.log(data) ;
        const features_product = document.querySelectorAll(".features-product");
        const first = features_product[0];
        const second = features_product[1];
        const boxes = first.querySelector(".container");
        const boxes2 = second.querySelector(".container");
        data.forEach(product => {
            if (product.secction == "feat-pro") {
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
    `}
           else if (product.secction === "arriv-pro") {
                boxes2.innerHTML += `
            <div class="box"data-id="${product.id}" >
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
            }
        });

    })
                document.addEventListener("click", function (e) {
            const box = e.target.closest(".box");
            if (box) {
              const box_id = box.getAttribute("data-id")
        window.location.href = `sproduct.html?id=${box_id}`;
            }
        });