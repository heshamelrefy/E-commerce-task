# E-Commerce-App

This project  is marketing and characterized by speed, flexibility and easy to use.

## Project modules,components,interfaces,Guard,customPipe,services and files.ts
1-Core modules [
  1- NavBar
  2- Interceptors
] 

2-Screens modules [
  1- Login module
  2- Product list module
  3- Shopping cart module
  4- Checkout module
  5- Success module
]
3- Shared modules [
  1- Product Card
  
]
4- Services [
  1- Auth Service
  2- ProductList Service
  3- Auth Guard
]

5-Pipes [
  1- Category pipe
  2- Product Name pipe
]

6- Interfaces [
  1- IProduct
  2- IUser
]

7- routes.ts

## Project cycle Description 

We start at the beginning of the project, which is the login page, and here the user logs in and can only see the application after logging in, then he goes to the product list page and the navbar can navigate between pages through it, and in the product page, all categories and products are not available, and the user can search for the name of the product or the name of the category, and if The user has added a product to be added to the cart, and there it shows him the products that were selected from the user and the selection number. The number of the product can be increased or decreased or deleted. If the user wants to pay after the end of marketing, he goes to the payment page, fills in his data, and shows him how much he will pay, after which the payment is made, and then he goes to the page Congratulations to confirm the payment process

##  Stacks

1-Html5
2-Sass 
3-Bootstrap v5
4-Typescript 
5-Angular

## to run project install

1- bootstrap: ^5.2.3,
2- ngx-toastr: ^16.1.0,
3- primeng: ^15.3.0,
4- Node v16.16.0

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
