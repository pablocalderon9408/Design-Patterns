// Implement Singleton Pattern in JavaScript.

// Singleton is a special creational design pattern in which only one instance of a class can exist.
// There are lots of singleton examples in real-life:
// - The current user of the application (there can be only one user at a time)
// - The window object (there can be only one window open at a time)
// - Cache storage of a browser (the cache is available throughout the browser session)
// - A piece of code that needs to be executed only once (e.g., initialization code)

// In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system.
// The pattern provides a single point of access to an object, referred to as the singleton, instance of the class.
// It is used when we need to make sure we have exactly one instance of the class.
// The Singleton pattern is popular in OOP languages, but it can also be implemented in JavaScript.
// There are two possible ways to implement the Singleton pattern in JavaScript:
// - Using a global variable
// - Using a closure

// Using a global variable
// The easiest way to implement a Singleton is by using a global variable.
// We can create an object and expose it as a global variable.
// Although this approach is straightforward, it has two major drawbacks:
// - The instance is initialized when the application loads, even if it is not needed, which is a waste of resources.
// - The global variable makes the code tightly coupled, which is not desired.

// Example 1
// In this example, we create a global variable called singleto

/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class Singleton {
    static instance = undefined;

    /**
     * Constructor method, not private for syntax reasons, to be called
     * for static method
     * @param version value that represents the version of the instance
     */

    // STEP 1
    constructor(version) {
        this._version = version;
    }

    /**
     * Static method that returns unique created instance or create it
     * @param version used only to help us to differentiate the instances
     * @returns {Singleton} unique Singleton instance
     */

    // STEP 2
    static getInstance(version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance;
    }

    /**
     * Singleton version attribute getter
     * @returns the version of the instance
     */
    get version() {
        return this._version;
    }
}

    /**
   * Main function
   */
function appSingleton() {
    console.log('--- [JS] Calling appSingleton ---\n');
    const singleton1 = Singleton.getInstance('version-1');
    const singleton2 = Singleton.getInstance('version-2');
    const singleton3 = Singleton.getInstance('version-3');

    console.log(
        `singleton1 and singleton2 are equal? ${
            singleton1 === singleton2 ? 'yes' : 'no'
        }`
    );
    console.log(
        `singleton2 and singleton3 are equal? ${
        singleton2 === singleton3 ? 'yes' : 'no'
        }`
    );

    // Let's verify if the versions are equal too
    console.log(`singleton1 version: ${singleton1.version}`);
    console.log(`singleton2 version: ${singleton2.version}`);
    console.log(`singleton3 version: ${singleton3.version}`);
}

appSingleton();

// Example 2

class ShoppingCart {
    static instance = undefined;

    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (product) => {
        return this.products.push(product);
    }

    deleteProductById = (id) => {
        return this.products = this.products.filter((product) => product.id !== id);
    }

    static getInstance = () => {
        if (!ShoppingCart.instance) ShoppingCart.instance = new ShoppingCart()
        return ShoppingCart.instance;
    }
}

class Product {
    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCost() {
        return this.cost;
    }
}

const ClientApp = () => {
    const cart = ShoppingCart.getInstance();
    const vasos = new Product(1205, 'paquete de vasos', 12000);
    const zapatos = new Product(2166, 'zapatos - par', 57600)
    console.log(vasos.getName(), vasos.getCost(), vasos.getID());
    // Agregamos productos al carrito. 
    cart.addProduct(vasos);
    console.log('Agregamos vasos al cart', cart.getProducts());

    // confirmamos que el cart es el mismo, aún en otra instancia. 
    const cart2 = ShoppingCart.getInstance();
    cart2.addProduct(zapatos);
    console.log('Probamos que el nuevo cart también tiene productos', cart2.getProducts());

    // Borramos el producto y probamos en ambos carritos. 
    cart.deleteProductById(1205);
    console.log('Eliminamos vasos del cart', cart.getProducts(), cart2.getProducts());
}

ClientApp();
