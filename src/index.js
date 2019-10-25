import "./style.css";
import data from './assets/data/coffees.json';
{
const showCoff = data => {
    
    const $list = document.querySelector(`.prices__list`);
    
    data.coffees.forEach(coffee => {
        
        if(coffee.plantbased === true){
            
            const $listitem = document.createElement('li');
            $listitem.classList.add(`price`);
            $listitem.innerHTML = `
                <a class="price__button" data-id="${coffee.id}">
                    <span class="price__button__wrapper">
                        <span class="price__button__name">${coffee.name}</span>
                        <span class="price__button__amount">&euro; ${coffee.prices.medium}</span>
                    </span>
                    <span class="price__button__plus">+</span>
                </a>`;
            $list.appendChild($listitem);
            }
        });
    };

const handleClick = e => {
    console.log("1");

    const $orders = document.querySelector(`.orders`);

    const $wrapper = document.querySelector(`.orders__wrapper`);
    $wrapper.classList.remove('hide');

    const $empty = document.querySelector(`.emptystate`);
    $empty.classList.add(`hide`); 

    const clickedItem = e.path[1].dataset.id;

    for(let i = 0; i< data.coffees.length;i ++){
        console.log("1.1");
        const coffee = data.coffees[i];
        console.log(coffee);
        console.log("2");
        if(coffee.id == clickedItem) {
            let $orderElements = [];
            $orderElements.push(coffee.id);
            console.log("3");
            const $order = document.createElement('li');
            $order.dataset.orderId = coffee.id;
            $order.classList.add(`order`);
            $order.innerHTML =
                `<span class="order__name">
                    <span class="order__amount">1X</span>${coffee.name}
                </span>
                <span class="order__price">&euro; ${coffee.prices.medium}</span>
                <button class="remove">X</button>`;
            $orders.appendChild($order);
        }
    }
};

    const init = () => {
        showCoff(data);

        const buttons = document.querySelectorAll(`.price__button__plus`);
        buttons.forEach($button => $button.addEventListener(`click`, handleClick));
        console.log(data);

        //const buttons = document.querySelectorAll(`.remove`);
        //buttons.forEach($button => $button.addEventListener(`click`, handleClickRemove));
    };

  init();

}
