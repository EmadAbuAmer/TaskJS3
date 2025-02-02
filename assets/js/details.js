console.log("Hello FROM Details");
const getCategories =async ()=> {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get("category");
    console.log(categoryName);  
    const {data}= await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    console.log(data);
    return data;
}

const displayCategories = async ()=>{
    const products = await getCategories();
    const result= products.map((product) =>
        `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="image">
            <h2 class="categoryTitle">${product.title}</h2>    
            <div class="spacer"></div>
            <p class="price">Price     $${product.price}</p>
            <button class="btnAdd" >Add to Cart</button>
        </div>
        `
    ).join(" ");
    console.log(result);
    document.querySelector(".products .row").innerHTML=result;
}

displayCategories();