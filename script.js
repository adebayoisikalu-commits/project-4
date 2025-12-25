const searchInput = document.getElementById("searchInput");
const boxes = document.querySelectorAll(".box");
const notFoundText = document.getElementById("notFound");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();
  let foundAny = false;

  boxes.forEach((box) => {
    const category = box.getAttribute("data-category")?.toLowerCase();
    const title = box.querySelector("h3")?.innerText.toLowerCase();

    if (
      searchValue === "" ||
      (category && category.includes(searchValue)) ||
      (title && title.includes(searchValue))
    ) {
      box.style.display = "block";
      foundAny = true;
    } else {
      box.style.display = "none";
    }
  });

  // Show or hide "Product not found"
  if (!foundAny && searchValue !== "") {
    notFoundText.style.display = "block";
  } else {
    notFoundText.style.display = "none";
  }
});
