class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }


}


class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');

        element.innerHTML = `
            <div class = "card text-center mb-4">
                <div class="card-body">
                    <strong>Name</strong>: ${product.name}
                    <strong>Price</strong>: ${product.price}
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;

        productList.appendChild(element);
        // this.resertForm();
    }

    resertForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
        
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));

        // Showing in DOM

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove()
        }, 2000);
    }
}


// DOM events



document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value

        // console.log(name, price, year)
        
        const product = new Product(name, price, year)
        
        const ui = new UI()
        ui.addProduct(product);
        ui.resertForm();
        ui.showMessage('producto agregado', 'success')
        e.preventDefault();
    });


    document.getElementById('product-list').addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target)
    })
    
