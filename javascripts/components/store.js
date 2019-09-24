const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;

};

const bookInfo = {
  price: 24.99,
  title: "Fifty Shades of Chicken",
  image: "./assets/images/chicken.jpg"
};

const addToCartEvent = () => {
 console.log('added to cart');
}

const makeStore = () => {
    let domString = '<h2>Our only book:</h2>';
    domString += '<p>Buy it now:</p>';
    domString += `<h3>$${bookInfo.price}</h3>`;
    domString += `<img src=${bookInfo.image} alt="book cover"/>`;
    domString += '<button id="cart-button" class="btn btn-danger">Add To Cart</button>';


    printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent)
};

export default { makeStore };