const getCategories =async ()=> {
    const { data } = await axios.get("https://fakestoreapi.com/products/categories");
    return data;
}
const displayCategories = async ()=>{
    const categories = await getCategories();
    const result= categories.map((category) =>
        `
        <div class="category"> 
            <h2 class="categoryName"> 
                <a href="../details.html?category=${category}" class="details"> ${category}</a>
            </h2>
        </div>
        `
).join(" ");
    document.querySelector(".categories .row").innerHTML=result;
}

const getProducts=async ()=>{
    const {data}= await axios.get(`https://fakestoreapi.com/products`);
    return data;
}
const displayProducts = async ()=>{
    const products = await getProducts();
    const result= products.map((product) =>
        `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="image">
            <h2 class="categoryTitle">${product.title}</h2>    
            <div class="spacer"></div>
            <p class="price">Price $${product.price}</p>
            <button class="btnAdd" >Add to Cart</button>
        </div>
        `).join('');
        console.log(result);
        document.querySelector(".allProducts .rowProducts").innerHTML=result;
}
const displayBestSeller = async ()=>{
    const products = await getProducts();
    const result= products.map((product) =>
        `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="image">
            <h2 class="categoryTitle">${product.title}</h2>    
            <div class="spacer"></div>
            <p class="price">Price $${product.price}</p>
            <button class="btnAdd" >Add to Cart</button>
        </div>
        `).join('');
        console.log(result);
        document.querySelector(".bestSeller .rowProducts").innerHTML=result;
}
displayBestSeller();
displayProducts();
displayCategories();