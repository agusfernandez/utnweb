//curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA1574/categories
// https://mueblesutn.com
// App Id. -> 8698630050996675
// Client Secret -> yJMbZuc7Zp8J9WADHiSe3UccYDWNpqUS
// Tu Access Token de Mercado Pago

//ema aprende git


document.addEventListener('DOMContentLoad', function(){
    const mueblesContainer= document.getElementById('products');

    //Obtener info
    function obtenerProductos(){
        fetch('https://api.mercadolibre.com/sites/MLA1574/categories')
        .then(response => response.json())
        .then(data => { 
            data.results.forEach(mueble => {
                const muebleContainer = document.createElement('div');
                muebleContainer.classList.add('.card');
                muebleContainer.innerHTML = `
                    <img src="images/product1.png" class="card-img-top card-image" alt="Product">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"></li>
                        </ul>
                    </div>
                `

                mueblesContainer.appendChild(muebleContainer);
             })
        })

        .catch(error => {
            console.log('error en la conexion con la api', error);
        })
    }

    obtenerProductos();

});


