
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const galleryContainer = document.querySelector('.gallery-image-container');
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    function showImage(index) {
        galleryContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
