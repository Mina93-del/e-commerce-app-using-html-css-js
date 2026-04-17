
fetch('product.json')
    .then(response => response.json())
    .then(data => {

        const cart = JSON.parse(localStorage.getItem(`cart`)) || [] ;
        const cartitemcontainer = document.querySelector(".cart");
        const table = cartitemcontainer.querySelector("tbody");
        cart.forEach((item , index) => {
 table.innerHTML += `
                    <tr>
                        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                        <td><img src= ${item.img} alt=""></td>
                        <td>${item.name}</td>
                        <td>$${item.price}</td>
                        <td><input type="number" value=${item.quantity}></td>
                        <td>$${item.price * item.quantity}</td>
                    </tr>
`
        });
           

    });