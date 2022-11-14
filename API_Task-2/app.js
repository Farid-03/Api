let container = document.querySelector(".container .row");

axios.get("https://restcountries.com/v3.1/all")
    .then(responce => {
        console.log(responce.data);
        for (let i = 0; i < responce.data.length; i++) {
            container.innerHTML += `<div class="col-3 mt-4"> <div class="card" style="width: 18rem;">
                <img src="${responce.data[i].flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${responce.data[i].name.common}, ${responce.data[i].capital}</h5>
                </div>
                <ul type="none" class="px-0 ul_li">
                    <li>Region : ${responce.data[i].region}</li>
                    <li>Sub Region: ${responce.data[i].subregion}</li>
                    <li>Area: ${responce.data[i].area}</li>
                </ul>
                <div class="card-body">
                    <a href="https://goo.gl/maps/im2MmQ5jFjzxWBks5" class="card-link btn btn-primary">Maps</a>
                </div>
            </div>
            </div>`;
        }
    });