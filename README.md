# This project create with React and Radix UI

This is test task and I used [free product API](https://fakeapi.platzi.com/en/rest/products)

## Available Scripts

In the project directory, you can run:

### `npm start`

## Look deploy

You can look deploy in this [link](https://radixtest.onrender.com)

## Features

### `addToCart()`

This function take array of items in cart

#### `oldArray = localStorage.cartInfo ? JSON.parse(localStorage.cartInfo) : []; `

Then created new item with title, price, color, image, quantity

### cartInfo = {
      title: productInfo.title,
      price: productInfo.price,
      color: selectValue,
      image: productInfo.images[0],
      quantity: 1,
  }

After it function checked identical item in cart and if it has quantity of item `+1` and then add it in cart

### let existingItem = 
    oldArray.find((item) => item.title === cartInfo.title && item.color === cartInfo.color);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      oldArray.push(cartInfo);
    }

### `useEffect that count total price`

When user open cart component `useEffect` count total price. It count by price and quantity of item

    setTotalPrice(
        data.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)
      )
### `deleteItem()`

The similar with `addToCart()` but uses `findIndex` instead `find`

## Radix UI

Used UI components from this library

### `Box` it's div
### `Text` have attribute `as` and you can choose tag `as='p'` or `as='span'`
### `Heading` it's h1-h6 also have attribute `as`
### `Flex` it's div with display flex
### `Button` button
### `Theme` basic tag that give us color of buttons and bg. Have attribute `accentColor` where you can input color of theme
### `Grid` div with display grid
### `Card` it component similar like Bootstrap card
### `Select` useful component that give us cool design and behavior of select

## Conclusion

It was great experience and practice with `React` and UI library `Radix UI`.
For this task I spand less then one day.

### Thanks for read it!
### With love, 
### Dmytro
