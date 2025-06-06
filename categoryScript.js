const categories = [
    {
        id:1,
        name:"Coffee",
        image:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id:2,
        name:"Cakes",
        image:"https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:3,
        name:"Tea",
        image:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id:4,
        name:"Refreshers and Drinks",
        image:"https://plus.unsplash.com/premium_photo-1664392073748-35c3a1c3c385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmcmVzaGVyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id:5,
        name:"Ice Cream",
        image:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGljZWNyZWFtfGVufDB8fDB8fHww"
    },
    {
        id:6,
        name:"Food",
        image:"https://images.unsplash.com/photo-1583019107470-5bf8e4a96314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZvb2QlMjBpbiUyMGElMjBib3dsfGVufDB8fDB8fHww"
    }
];

const categoriesFet = document.querySelector(".categoriesFeatures");


categories.forEach(function(cat){

    let categoryId = cat.id;
    let categoryImage = cat.image;
    let categoryName = cat.name;

    const categoriesFeature = document.createElement("div");
    categoriesFeature.className = "card";
    categoriesFet.append(categoriesFeature);
    categoriesFeature.innerHTML = `
        <div class=card-header>
            <a href="products.html?cat-id=${categoryId}&cat-name=${categoryName}">
                <img src="${categoryImage}" alt=${categoryName}>
            </a>
        </div>
        <div class=card-body>
            <h2>
                ${categoryName}
            </h2>
        </div>
    `;
});