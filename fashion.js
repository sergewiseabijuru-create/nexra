let slideIndex = 0;
            let slideTimer;
            let currentTestimonial = 0;

            const testimonials = [
                {
                    stars: 5,
                    text: '"Love this shirt! Fits perfectly and the fabric is thick without being stiff."',
                    author: 'Juniper',
                    product: 'the Heavyweight Overshirt',
                    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop'
                },
                {
                    stars: 5,
                    text: '"Absolutely amazing quality! This has become my go-to piece for everyday wear."',
                    author: 'Sarah',
                    product: 'the Classic Tee',
                    image: 'https://ae01.alicdn.com/kf/S7374cd227eb24a7a999e37f3219e532aS.jpg'
                },
                {
                    stars: 5,
                    text: '"Perfect fit and excellent material. Highly recommend for anyone looking for comfort."',
                    author: 'Michael',
                    product: 'the Comfort Hoodie',
                    image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=600&fit=crop'
                }
            ];

            function updateTestimonial() {
                const testimonial = testimonials[currentTestimonial];
                const starsHTML = '★'.repeat(testimonial.stars);

                document.querySelector('.stars').textContent = starsHTML;
                document.querySelector('.testimonial-text').textContent = testimonial.text;
                document.querySelector('.testimonial-author').innerHTML = `- ${testimonial.author}, <a href="#">${testimonial.product}</a>`;
                document.querySelector('.testimonial-image img').src = testimonial.image;
            }

            function previousTestimonial() {
                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                updateTestimonial();
            }

            function nextTestimonial() {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                updateTestimonial();
            }

            function showSlides() {
                const slides = document.getElementsByClassName("slide");
                const dots = document.getElementsByClassName("dot");

                for (let i = 0; i < slides.length; i++) {
                    slides[i].classList.remove("active");
                }

                for (let i = 0; i < dots.length; i++) {
                    dots[i].classList.remove("active");
                }

                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }

                slides[slideIndex - 1].classList.add("active");
                dots[slideIndex - 1].classList.add("active");

                slideTimer = setTimeout(showSlides, 5000);
            }

            function currentSlide(n) {
                clearTimeout(slideTimer);
                slideIndex = n - 1;

                const slides = document.getElementsByClassName("slide");
                const dots = document.getElementsByClassName("dot");

                for (let i = 0; i < slides.length; i++) {
                    slides[i].classList.remove("active");
                }

                for (let i = 0; i < dots.length; i++) {
                    dots[i].classList.remove("active");
                }

                slides[slideIndex].classList.add("active");
                dots[slideIndex].classList.add("active");

                slideIndex++;
                slideTimer = setTimeout(showSlides, 5000);
            }

            // Initialize slideshow on page load
            window.addEventListener('load', () => {
                showSlides();
            });

            function handleCategoryChange(select) {
                if (select.value) {
                    console.log('Selected category:', select.value);
                    // You can navigate to category page here
                    // window.location.href = '#' + select.value;
                }
            }

            // Dropdown functionality
            function toggleDropdown() {
                const dropdownMenu = document.getElementById('dropdownMenu');
                const dropdownBtn = event.target.closest('.dropdown-btn');

                dropdownMenu.classList.toggle('show');
                dropdownBtn.classList.toggle('active');
            }

            function selectCategory(category, event) {
                event.preventDefault();
                const dropdownMenu = document.getElementById('dropdownMenu');
                const dropdownBtn = document.querySelector('.dropdown-btn');

                console.log('Selected category:', category);
                dropdownMenu.classList.remove('show');
                dropdownBtn.classList.remove('active');
            }

            // Close dropdown when clicking outside
            document.addEventListener('click', function (event) {
                const dropdownContainer = document.querySelector('.categories-dropdown');
                const dropdownMenu = document.getElementById('dropdownMenu');
                const dropdownBtn = document.querySelector('.dropdown-btn');

                if (!dropdownContainer.contains(event.target)) {
                    dropdownMenu.classList.remove('show');
                    dropdownBtn.classList.remove('active');
                }
            });

            showSlides();