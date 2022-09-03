// Category create ,Display and other
const allCategoriesName = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.data[0]);
        showAllCategoriesName(data.data.news_category);
    } catch (error) {
        console.log(error);
    }
};

showAllCategoriesName = (categories) => {
    console.log(categories);
    const newsCategoriesContainer = document.getElementById('news-categories');
    categories.forEach((category) => {
        const li = document.createElement('li');
        li.classList.add('active-color')
        li.innerHTML = `

    <a onclick="loadAllNews('${category.category_id ? category.category_id : 'Not found'
            }')" class=" text-decoration-none text-dark d-inline-block  px-3  active border-0 " href="#">${category.category_name ? category.category_name : 'Not found'
            }</a>
    `;

        newsCategoriesContainer.appendChild(li);
    });
};
allCategoriesName();