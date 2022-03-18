document.body.style.background = "#EAD7C7";

//fake store api
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then((data) => {console.log(data)
                function createCard() {
                    const productItems = document.getElementById('hero');
                    productItems.innerHTML = data.image;
                    productItems.setAttribute('src' + data.image);

                } 
                createCard();

            }).catch(err=>console.log(err))
