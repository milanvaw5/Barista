import "./style.css";
import data from './assets/data/coffees.json';
{
const showCoff = data => {
    console.log(data.coffees);
    const $list = document.querySelector(`.prices__list`);
    console.log("jup");
    data.coffees.forEach(coffee => {
        console.log("en tot ier?");
        if(coffee.plantbased === true){
            console.log("yeeyee");
            const $listitem = document.createElement('li');
            $listitem.classList.add(`price`);
            $listitem.setAttribute('data', "id: '"+ coffee.id +"'");
            $list.appendChild($listitem);

            const $pricebutton = document.createElement('a');
            $pricebutton.classList.add('price__button');

            const $wrapper = document.createElement('span');
            $wrapper.classList.add('price__button__wrapper');

            const $name = document.createElement('span');
            $name.classList.add('price__button__name');
            $name.innerHTML = coffee.name;

            const $amount = document.createElement('span');
            $amount.classList.add('price__button__amount');
            $amount.innerHTML = "&euro;" + coffee.prices.medium;

            const $btn = document.createElement('button');
            $btn.classList.add('price__button__plus');
            $btn.innerHTML = `+`;
            $btn.addEventListener("click", addOrder);

            $listitem.appendChild($pricebutton);
            $pricebutton.appendChild($wrapper);
            $pricebutton.appendChild($btn);

            $wrapper.appendChild($name);
            $wrapper.appendChild($amount);

        }
    });
};

const addOrder = e => {
    const $clickedItem =e.path[1].dataset.id;

console.log($clickedItem);
};


const createOrder = () => {
    const $orders = document.querySelector(`.orders`);
    let $number;
    data.coffees.forEach(coffee => {

            const $order = document.createElement('li');
            $order.classList.add('order');

            const $title = document.createElement('span');
            $title.classList.add('order__name');

            const $amount = document.createElement('span');
            $amount.classList.add('order__amount');
            $amount.innerHTML = $number+"X"+{name};

            const $price = document.createElement('span');
            $price.classList.add('order__price');
            $price.innerHTML = "&euro;" + {total};

            const $btn = document.createElement('button');
            $btn.classList.add('remove');
            $btn.innerHTML = `x`;

            $title.appendChild($amount);
            $orders.appendChild($order);
            $order.appendChild($price);
            $order.appendChild($btn);

        });
    };

    const init = () => {
        showCoff(data);
        console.log(data);
    };
  

  init();

}
