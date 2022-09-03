// // load categories
// const loadAllCategories = async () => {
//     const url = "https://openapi.programming-hero.com/api/news/categories"
//     const res = await fetch(url);
//     const d = await res.json();
//     displayAllCategories(d.category_name)
//     // console.log(d)
//     // return d
// }


// // { "status": true, "data": { "news_category": [{ "category_id": "01", "category_name": "Breaking News" }, { "category_id": "02", "category_name": "Regular News" }, { "category_id": "03", "category_name": "International News" }, { "category_id": "04", "category_name": "Sports" }, { "category_id": "05", "category_name": "Entertainment" }, { "category_id": "06", "category_name": "Culture" }, { "category_id": "07", "category_name": "Arts" }, { "category_id": "08", "category_name": "All News" }] } }



// // display all categories
// const displayAllCategories = async (newsall) => {
//     // const d = await loadAllCategories();
//     // console.log(d)
//     const menu = document.getElementById('all-categories');
//     // for (const news in d.data.news_category[1]
//     // ) {

//     //     console.log(news.category_name)
//     // }
//     for (const news in newsall)
//         console.log(news)
// }

// displayAllCategories()
// loadAllCategories()


// const loadAllCategories = () => {
//     const url = 'https://openapi.programming-hero.com/api/news/categories'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayAllCategories(data.data.news_category[0]))
// }

// const displayAllCategories = allNews => {
//     const menu = document.getElementById('all-categories');
//     // allNews.forEach(news => {
//     //     console.log(allNews)
//     // })
//     for (news in allNews) {
//         console.log(news)
//         const p = document.createElement('p');

//         p.innerHTML = `<p>'${news.category_name}'</p>`
//         menu.appendChild(p)
//     }
// }


const loadAllCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    var k = fetch(url)
        .then(res => res.json())
        .then(data => displayAllCategories(data.data.news_category))
}

const displayAllCategories = data => {
    const menu = document.getElementById('all-categories');
    data.forEach(function (newsArray) {
        // console.log(newsArray.category_name);

        const p = document.createElement('p');
        // p.classList.add('nav-item')
        p.innerHTML = `<p>${newsArray.category_name}</p>`
        menu.appendChild(p)
    });
}


loadAllCategories()
// displayAllCategories()
