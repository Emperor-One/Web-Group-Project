// function for implementation of close button on the pop up 

let contentDisplay = document.getElementsByClassName('noDisplay')[0];
let navBar = document.getElementById('navBar');
let firstRow = document.getElementById('firstRow');

function closeContent(){
    contentDisplay.classList.add('noDisplay');
    contentDisplay.classList.remove('display');
    navBar.classList.add('fixed-top');
    firstRow.classList.add('pt-5');
    firstRow.classList.add('mt-5');
}

function openContent(){
    contentDisplay.classList.add('display');
    contentDisplay.classList.remove('noDisplay');
    navBar.classList.remove('fixed-top');
    firstRow.classList.remove('pt-5');
    firstRow.classList.remove('mt-5');   
}

// list of cake names and their attributes 

const cakes = [
    {
        id: 1,
        cakeName: `Birthday Special`,
        price: `800 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Strawberry, Banana, Cream`,
        image: "https://th.bing.com/th/id/R.1344da8f587464f190756a27dc1bd107?rik=c%2bVOW085t5Wpcw&pid=ImgRaw&r=0"
    },
    {
        id: 2,
        cakeName: `Chocolate Dive`,
        price: `1000 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Chocolate, Cocoa, Cream`,
        image: "https://th.bing.com/th/id/OIP.JoD85Op8uNpSsrRs1Ju78AHaIK?pid=ImgDet&rs=1"
    },
    {
        id: 3,
        cakeName: `White Sand`,
        price: `500 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Chocolate, Cocoa, Cream`,
        image: "https://th.bing.com/th/id/R.a87780a31e613b7641cd1b2c04fab175?rik=6YPpZQpoIHYQAw&riu=http%3a%2f%2fwww.fleckensteins.com%2f1oldsite%2fTortes%2ftorte+tiramisu.jpg&ehk=rI%2frOtwmw2%2b0O67KOQ6%2f3Zx02OeZuVEL5G%2fB1A1H0q4%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: 4,
        cakeName: `Kinder Bueno Cake`,
        price: `900 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Kinder Bueno Chocolate, Chocolate, Cream`,
        image: "https://picjumbo.com/wp-content/uploads/ultimate-yummy-chocolate-cake-2210x1473.jpg" 
    },
    {
        id: 5,
        cakeName: `Chocolate Stick`,
        price: `600 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Chocolat Bar, Chocolate, Candy`,
        image: "https://i.pinimg.com/originals/0f/88/2e/0f882e427ea52cc9417bda32699d4680.jpg"
    },
    {
        id: 6,
        cakeName: `Chocolate Tart with Fruit`,
        price: `800 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Strawberry, Banana, Cream, Chocolate`,
        image: "https://th.bing.com/th/id/OIP.UgI-1EGmsJKsl56nf3zX_QHaEK?pid=ImgDet&rs=1" 
    },
    {
        id: 7,
        cakeName: `Special Black Forest`,
        price: `1000 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Chocolate, Cocoa, Cream`,
        image: "https://th.bing.com/th/id/R.3a233af3dac074715ae71aca15541a08?rik=oeG7JepOdkArJw&riu=http%3a%2f%2fafternoonbakingwithgrandma.com%2fwp-content%2fuploads%2f2016%2f01%2f2016-01-25_1609.png&ehk=j%2fT6mtR9BYyXjHtWundyFOt0BFU2fmb964UULaIfdwI%3d&risl=&pid=ImgRaw&r=0" 
    },
    {
        id: 8,
        cakeName: `Black Forest`,
        price: `500 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Chocolate, Cocoa, Cream`,
        image: "https://th.bing.com/th/id/OIP.VX9fsxnpsJrEB96N_AAFTwHaJ4?pid=ImgDet&rs=1"
    },
    {
        id: 9,
        cakeName: `All Out Pink`,
        price: `400 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Strawberry coloring, Cream`,
        image: "https://th.bing.com/th/id/R.f8805fbbbb5b8bdabf8f9ec79f89519d?rik=5acxM%2bdXPw6CPQ&pid=ImgRaw&r=0"
    },
    {
        id: 10,
        cakeName: `Special Cheese Cake`,
        price: `400 ET Birr`,
        ingredients: `Flour, Egg, Butter, Milk, Strawberry, Cheese, Cream`,
        image: "https://th.bing.com/th/id/OIP.CUC_Hv8SM8Prl1Nl4QhK8wHaFj?pid=ImgDet&rs=1" 
    }
]

let nameTag = document.getElementById('nameTag');
let priceTag = document.getElementById('priceTag');
let ingredientTag = document.getElementById('ingredientTag');
let imgTag = document.getElementById('imgTag');




cakes.forEach(document.getElementsByClassName('col-sm')).forEach((e, i) => {
    e.addEventListener('click', (el) => {
        nameTag.innerHTML = cakes[i].cakeName;
        priceTag.innerHTML = cakes[i].price;
        ingredientTag.innerHTML = cakes[i].ingredients;
        imgTag.src = cakes[i].image
    })
})

