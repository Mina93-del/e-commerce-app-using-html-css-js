const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        console.log(id);

        fetch('product.json')
    .then(response => response.json())
    .then(data => {
        //    console.log(data) ;
        const prodetails = document.querySelector(".prodetails");
        const detal = prodetails.querySelector(".container");
        const selectedprod = data.find(product => product.id == id);
        console.log(selectedprod);
        console.log(detal);

            if (id) {
                detal.innerHTML += `
                      <div class="img-sect">
                <img src=${selectedprod.img} width="100%" id="mainimg" alt="">
                <div class="smallimgs">
                    <div class="smallimg">
                        <img src="./img/product/f2.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="smallimg">
                        <img src="./img/product/f3.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="smallimg">
                        <img src="./img/product/f4.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="smallimg">
                        <img src="./img/product/f5.jpg" width="100%" class="small-img" alt="">
                    </div>
                </div>
            </div>
            <div class="tit-sect">
                <h6>Home / T-Shirt</h6>
                <h4>${selectedprod.name}</h4>
                <h2>$${selectedprod.price}</h2>
                <select>
                    <option>Select Size</option>
                    <option>SMALL</option>
                    <option>MEDIAM</option>
                    <option>LARGE</option>
                    <option>XLARGE</option>
                </select>
                <input type="number" value="1">
                <BUtton class="normal">Add To Cart</BUtton>
                <h4>Product Details</h4>
                <span>the gildan ultra cotton t-shirt is made from a substintial 6.0 oz . per sq .yd fabric contructed
                    from 100% cotton . this classic fit preshrunk jersy knit provides unmatched comfort with each wear .
                    featuring a taped neck and shoulder and a seamless double-needle callae and available in a range of
                    colors . it offers it all in the ultimate head-turning packages</span>
            </div>
    `}
    
  var mainimg = document.getElementById("mainimg");
        var smallimg = document.getElementsByClassName("small-img");

        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("small-img")) {
                mainimg.src = e.target.src;
            }
        });
    })
    

