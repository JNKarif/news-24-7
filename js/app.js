


const loadAllCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllCategories(data.data.news_category))
        .catch(error => error)
    // .then(data => console.log(data.data.news_category))
    // console.log(data.data.news_category)

}

const displayAllCategories = data => {

    const menu = document.getElementById('all-categories');
    data.forEach(function (newsArray) {
        // console.log(newsArray.category_id);

        const p = document.createElement('p');

        p.innerHTML = `<p onclick="loadNewsSearch('${newsArray.category_id}')">${newsArray.category_name}</p>
        

        `
        menu.appendChild(p)


        // newsArray.sort(function (a, b) {
        //     return b.total_view - a.total_view
        // }
        // )

    });


}
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else { loaderSection.classList.add('d-none') }
}


// onclick on categories
const loadNewsSearch = (category_id) => {
    // console.log('get details', category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsSearch(data.data[0]))
        .catch(error => error)
    // .then(data => console.log(data.data[0]))

    toggleSpinner(true)
}


//modal loading 
const loadModal = (_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${_id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayModal(data.data[0]))
        .catch(error => error)
}

const displayModal = modal => {
    // console.log(modal)
    const modalDetails = document.getElementById('exampleModalLabel')
    modalDetails.innerText = modal.details;
    const relatedInfo = document.getElementById('related-info');
    relatedInfo.innerHTML = `
    <p>Author Name: ${modal.author.name ? modal.author.name : 'No data found'}</p>
    <p>Total Views: ${modal.total_view ? modal.total_view + 'm' : 'No data found'}</p>
    
    `
}




// loadModal()


// onclick on categories 
const displayNewsSearch = news => {
    // console.log(news)
    toggleSpinner(false)
    const searchCategory = document.getElementById('search-category');
    const searchDiv = document.createElement('div');
    searchDiv.innerHTML = '';
    searchDiv.classList.add('col-lg-6', 'col-md-12');
    searchDiv.innerHTML = `
    <div class="row border rounded g-0">
                        <div class="col-lg-4 col-md-4">
                            <img src="${news.thumbnail_url}" class="img-fluid w-100 h-100" alt="...">
                        </div>
                        <div class="col-lg-8 col-md-8 g-3">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${news.details.slice(0, 200) + '...'}</p>
                                <p><div class="row">
                                <div class="col-4">
    
                                
                                    <div class="col-lg-4">
                                        <img class="img-fluid" src="${news.author.img ? news.author.img : 'no data found'}" alt="">
                                    </div>
                                    <div class="col-lg-8">
                                        <h6>${news.author.name ? news.author.name : 'no data found'}</h6>
                                    </div>
                                </div>
                            </div>
                                </div>
    
                                <div class="col-4">
                                    <h1 class="fw-bold">${news.total_view ? news.total_view + 'm' : 'No data found'}+</h1>
                                    <p class="fw-bold">Views</p>
                                </div>
    
                                <div class="col-4">
                                <button onclick="loadModal('${news._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                More...
                            </button>
                
                                </div>
                            </div></p>
                            </div>
                        </div>
                        
                    </div>
    `
    searchCategory.appendChild(searchDiv)
}

const loadNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayNews(data.data))
        .catch(error => error)
}

const disPlayNews = data => {
    // console.log(data)
    const newsContainer = document.getElementById('news-container');
    data.forEach(news => {
        // console.log(news)
        const newsDiv = document.createElement('div')
        newsDiv.innerHTML = '';
        newsDiv.classList.add('col-lg-6', 'col-md-12')
        newsDiv.innerHTML = `
        <div class="row border rounded g-0">
                        <div class="col-lg-4 col-md-4">
                            <img src="${news.thumbnail_url}" class="img-fluid w-100 h-100" alt="...">
                        </div>
                        <div class="col-lg-8 col-md-8 g-3">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${news.details.slice(0, 200) + '...'}</p>
                                <p><div class="row">
                                <div class="col-4">
    
                                
                                    <div class="col-lg-4">
                                        <img class="img-fluid" src="${news.author.img ? news.author.img : 'No data found'}" alt="">
                                    </div>
                                    <div class="col-lg-8">
                                        <h6>${news.author.name ? news.author.name : 'No data found'}</h6>
                                        
    
                                    </div>
                                </div>
                            </div>
                                </div>
    
                                <div class="col-4">
                                    <h3 class="fw-bold">${news.total_view ? news.total_view + 'm' : 'No data found'}+</h3>
                                    <p class="fw-bold">Views</p>
                                </div>
    
                                <div class="col-4">
                                <button onclick="loadModal('${news._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                More...
                            </button>
                                </div>
                            </div></p>
                            </div>
                        </div>
                        
                    </div>
        `
        newsContainer.appendChild(newsDiv)


    })


}


loadNews(8)
loadAllCategories(8)
// displayAllCategories()

loadNewsSearch()