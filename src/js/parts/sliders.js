import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')


        if (slider.closest('.hero-slider')) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination, Navigation],
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                autoplay: {
                    delay: 4000,
                },
            })
        }

        if (slider.closest('.video-slider')) {
            new Swiper(slider, {
                modules: [Pagination, Navigation],
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },
                }

            })
        }

        if (slider.closest('.certificate')) {
            new Swiper(slider, {
                modules: [Navigation, Pagination],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }

            })
        }
    })
}