fetch('../assets/database/api-data.json')
    .then(response => response.json())
    .then(data => {
        const configDataContainer = document.getElementById('api-data');

        // Loop through the JSON data and create elements dynamically
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const container = document.createElement('div');
                container.className = 'copy-text';

                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'text';
                input.value = data[key]; // Set the value from the JSON data
                input.readOnly = true;

                const button = document.createElement('button');
                button.innerHTML = '<i class="fa fa-clone"></i>';

                const strong = document.createElement('strong');
                strong.textContent = key;

                container.appendChild(input);
                container.appendChild(button);

                configDataContainer.appendChild(strong);
                configDataContainer.appendChild(container);
            }
        }
    })
    .catch(error => console.error('Error loading JSON data: ', error));
