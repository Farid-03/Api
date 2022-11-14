let container = document.querySelector(".container .row");

axios.get("https://api.tvmaze.com/shows")
    .then(res => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
            container.innerHTML += `
                <div class="col-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${res.data[i].name}</h5>
                            <p class="card-text fs-6">${res.data[i].summary}</p>
                            <p class="btn btn-primary">${res.data[i].genres}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    });