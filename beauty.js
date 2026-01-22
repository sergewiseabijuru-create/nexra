 let currentIndex = 0;
        const slider = document.getElementById('slider');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = 4;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function moveSlide(direction) {
            currentIndex += direction;
            if (currentIndex < 0) currentIndex = totalSlides - 1;
            else if (currentIndex >= totalSlides) currentIndex = 0;
            updateSlider();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function toggleDropdown() {
            const menu = document.getElementById('dropdownMenu');
            const btn = document.querySelector('.dropdown-btn');
            menu.classList.toggle('show');
            btn.classList.toggle('active');
        }

        document.addEventListener('click', function (e) {
            const dropdown = document.querySelector('.categories-dropdown');
            if (!dropdown.contains(e.target)) {
                document.getElementById('dropdownMenu').classList.remove('show');
                document.querySelector('.dropdown-btn').classList.remove('active');
            }
        });

        setInterval(() => moveSlide(1), 5000);