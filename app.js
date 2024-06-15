let url = "https://fakestoreapiserver.reactbd.com/nextamazon"

let response = fetch(url)
    response.then((v)=>{
            return v.json()
    }
).then((v)=>{
    ihtml = ""
    for(item in v){
    console.log(v[item])
    
    ihtml += `
       <div class="card my-4 mx-4" style="width: 18rem;">
        <img src="${v[item].image}" class="card-img-top my-2 d-block w-80 h-50" alt="...">
        <div class="card-body">
          <h5 class="card-title">${v[item].title}</h5>
          <p>Price: $${v[item].price}</p>
          <p>category: ${v[item].category}</p>
          <p>quantity avalabile: ${v[item].quantity}</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    `
    Cards.innerHTML = ihtml
    }
})
































































