document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("item-input");
    const addBtn = document.getElementById("add-btn");
    const sortBtn = document.getElementById("sort-btn");
    const list = document.getElementById("item-list");

    let items = JSON.parse(localStorage.getItem("items")) || [];

    function updateList() {
        list.innerHTML = "";
        items.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.addEventListener("click", () => removeItem(index));
            list.appendChild(li);
        });

        localStorage.setItem("items", JSON.stringify(items));
    }

    addBtn.addEventListener("click", function () {
        const newItem = input.value.trim();
        if (newItem) {
            items.push(newItem);
            input.value = "";
            updateList();
        } else {
            alert("Введіть значення!");
        }
    });

    function removeItem(index) {
        items.splice(index, 1);
        updateList();
    }

    sortBtn.addEventListener("click", function () {
        items.sort((a, b) => a.localeCompare(b, "uk"));
        updateList();
    });

    updateList();
});