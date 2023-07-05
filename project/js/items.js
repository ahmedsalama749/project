let uesrLogin = document.getElementById("checkUser")
let addCart = document.querySelector('#addCart')
let deleteCart = document.querySelector("#deleteCart")
let card =document.querySelector("#cardShop")
let productName = document.getElementById("root");

async function info () {
    let response = await fetch('https://fakestoreapi.com/products?limit=6');
    let data = await response.json();
    console.log(data);
    let productsInfo = '';
    for (let iterator of data  ) {
        productsInfo += `<div class="card mb-3 rounded-4" style="max-width: 540px; max-height: 400px;"> 
        <div class="row g-0">
          <div class=" col-sm-12 col-md-4 ">
          <img src="${iterator.image}" class="img-fluid rounded-start" alt="...">

          </div>
          <div class=" col-md-8">
            <div class="card-body">
              <h5 class="card-title display-5">Nike G33 </h5>
              <p class="card-text lead text-black-50">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text lead fw-bold">Price : <span class="fs-2">28$</span> </p>
              <div>
               <button id="addCart"  class="btn btn-success">Add Cart</button>
              <button id="deleteCart" class="btn btn-success">Delete Cart</button>
                </div>
            </div>
          </div>
        </div>
      </div>`
    }
    document.getElementById('root').innerHTML = productsInfo ;
}


info();




