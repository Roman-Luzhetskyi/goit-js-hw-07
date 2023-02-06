const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);
const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.firstElementChild.textContent}
    Elements: ${categories.lastElementChild.children.length}`
  )
  .join("\n");
console.log(categoriesArray);
