import './list-products.scss';

// images
import greeceImage from "./assets/images/pexels-apasaric-1285625.jpg";
import colombiaImage from "./assets/images/pexels-darren-lawrence-848896-3417747.jpg";
import franceImage from "./assets/images/pexels-fotis-michalainas-2149881541-30835569.jpg";
import haitiImage from "./assets/images/pexels-jrceranornelson-4637293.jpg";
import indiaImage from "./assets/images/pexels-kelly-1179532-2382889.jpg";
import keniaImage from "./assets/images/pexels-kureng-workx-2546437-13033128.jpg";
import jamaicaImage from "./assets/images/pexels-lyncoln-miller-3849986-6473888.jpg";
import spainImage from "./assets/images/pexels-tbd-traveller-2149583744-30838727.jpg";
import argentinaImage from "./assets/images/pexels-cadu-mello-1882954-30785012.jpg";
import luxemburgImage from "./assets/images/pexels-tbd-traveller-2149583744-30870313.jpg";
import brazilImage from "./assets/images/pexels-rafaelf1-1060803.jpg";
import denmarkImage from "./assets/images/pexels-gsn-travel-30835052.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Argentina',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 199.99,
            image: argentinaImage
        },
        {
            name: 'Brazil',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 379.99,
            image: brazilImage
        },
        {
            name: 'Colombia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 939.99,
            image: colombiaImage
        },
        {
            name: 'Denmark',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 139.99,
            image: denmarkImage
        },
        {
            name: 'Spain',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 1029.99,
            image: spainImage
        },
        {
            name: 'France',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 1299.99,
            image: franceImage
        },
        {
            name: 'Greece',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 1509.99,
            image: greeceImage
        },
        {
            name: 'Haiti',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 949.99,
            image: haitiImage
        },
        {
            name: 'India',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 649.99,
            image: indiaImage
        },
        {
            name: 'Jamaica',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 259.99,
            image: jamaicaImage
        },
        {
            name: 'Kenia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 1029.99,
            image: keniaImage
        },
        {
            name: 'Luxemburg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 129.99,
            image: luxemburgImage
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const priceBody = document.createElement('div');
        priceBody.classList.add('d-flex');
        priceBody.classList.add('justify-content-between');
        priceBody.classList.add('align-items-center');

        const price = document.createElement('span');
        price.classList.add('h5');
        price.classList.add('mb-0');
        price.textContent = product.price;

        const rating = document.createElement('div');

        const star = document.createElement('i');
        star.classList.add('bi');
        star.classList.add('bi-star-fill');
        star.classList.add('text-warning');

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        rating.appendChild(star);
        rating.appendChild(star);
        rating.appendChild(star);
        rating.appendChild(star);
        rating.appendChild(star);
        priceBody.appendChild(price);
        priceBody.appendChild(rating);
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(priceBody);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});