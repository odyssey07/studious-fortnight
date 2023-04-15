const images = [
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458081/images/batman/batman-8_lynjbh.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458080/images/batman/batman-5_jmijv2.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458080/images/batman/batman-4_ebjszj.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458080/images/batman/batman-7_mvn9eh.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458079/images/batman/batman-3_w7fnui.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458079/images/batman/batman-2_umckmk.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458079/images/batman/batman-6_xqhads.jpg",
    "https://res.cloudinary.com/dews3zbls/image/upload/v1681458079/images/batman/batman-1_dev6qn.jpg"
]

const slidesContainer = document.querySelector('.slides-container');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');

const allSlides = []
images.forEach((image) => {
    const newImage = document.createElement('img');
    newImage.classList.add('slide')
    newImage.src = image;
    allSlides.push(newImage)
})

let currentSlide = 0;

let showingSlides = [
    allSlides[currentSlide > 0 ? currentSlide - 1 : allSlides.length - 1],
    allSlides[currentSlide],
    allSlides[currentSlide < allSlides.length - 1 ? currentSlide + 1 : 0]
];

showingSlides.forEach((image) => {
    slidesContainer.appendChild(image)
})

let slides = document.querySelectorAll('.slide');
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - 1)}%)`;
})

btnLeft.addEventListener('click', () => {
    if (currentSlide === 0) currentSlide = allSlides.length - 1;
    else currentSlide--;

    showingSlides[1].style.transform = `translateX(100%)`;
    showingSlides[0].style.transform = `translateY(0%)`;

    showingSlides = [
        allSlides[currentSlide > 0 ? currentSlide - 1 : allSlides.length - 1],
        allSlides[currentSlide],
        allSlides[currentSlide < allSlides.length - 1 ? currentSlide + 1 : 0]
    ];

    setTimeout(() => {
        Array.from(slidesContainer.children).forEach(el => slidesContainer.removeChild(el))
        showingSlides.forEach((image) => {
            slidesContainer.appendChild(image)
        })

        slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - 1)}%)`;
        })
    }, 250)
})

btnRight.addEventListener('click', () => {
    if (currentSlide === allSlides.length - 1) currentSlide = 0;
    else currentSlide++

    showingSlides[1].style.transform = `translateX(-100%)`;
    showingSlides[2].style.transform = `translateY(0%)`;

    showingSlides = [
        allSlides[currentSlide > 0 ? currentSlide - 1 : allSlides.length - 1],
        allSlides[currentSlide],
        allSlides[currentSlide < allSlides.length - 1 ? currentSlide + 1 : 0]
    ];

    setTimeout(() => {
        Array.from(slidesContainer.children).forEach(el => slidesContainer.removeChild(el))
        showingSlides.forEach((image) => {
            slidesContainer.appendChild(image)
        })

        slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - 1)}%)`;
        })
    }, 250)
})