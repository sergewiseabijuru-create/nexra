        const watches = [
        {
            name: "Luminex",
            description: "Modern elegance with a classic touch. Luminex combines sleek design and everyday comfort for any occasion.",
            image: "images/image 6.png"
        },
        {
            name: "Onyx Edition",
            description: "A bold, midnight aesthetic. The Onyx Edition is designed for durability and a stealthy look.",
            image: "images/image 29.png" 
        },
        {
            name: "Classic Gold",
            description: "Timeless luxury that never goes out of style. Featuring a 24k gold-plated rim.",
            image: "images/image 8.png" 
        }
    ];

    let currentIndex = 0;

    function updateDisplay(index) {
        const watch = watches[index];
        document.getElementById('watch-img').src = watch.image;
        
        document.getElementById('watch-title').innerText = watch.name;
        document.getElementById('watch-desc').innerText = watch.description;
    }

    function nextWatch() {
        currentIndex++;
        if (currentIndex >= watches.length) {
            currentIndex = 0; 
        }
        updateDisplay(currentIndex);
    }

    function prevWatch() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = watches.length - 1;
        }
        updateDisplay(currentIndex);
    }