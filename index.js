document.addEventListener('DOMContentLoaded', function() {
        const itemInput = document.getElementById('item-input');
        const addButton = document.getElementById('add-button');
        const clearButton = document.getElementById('clear-button');
        const shoppingList = document.getElementById('shopping-list');
    
        let items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    
        function renderItems() {
            shoppingList.innerHTML = '';
            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = item.name;
                li.classList.toggle('purchased', item.purchased);
    
                li.addEventListener('click', function() {
                    item.purchased = !item.purchased;
                    saveAndRender();
                });
    
                shoppingList.appendChild(li);
            });
        }
    
        function saveAndRender() {
            localStorage.setItem('shoppingList', JSON.stringify(items));
            renderItems();
        }
    
        addButton.addEventListener('click', function() {
            const itemName = itemInput.value.trim();
            if (itemName) {
                items.push({ name: itemName, purchased: false });
                itemInput.value = '';
                saveAndRender();
            }
        });
    
        clearButton.addEventListener('click', function() {
            items = [];
            saveAndRender();
        });
    
        renderItems();
    });
