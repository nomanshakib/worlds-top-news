// Categories set, Display and others
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