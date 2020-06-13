export default class Slider {
    constructor(slider) {
        this.slider = slider;
        this.slides = this.slider.querySelector('.slider-items').children;
        this.totalSlides = this.slides.length;
        this.containerWidth = this.slider.offsetWidth;
        this.intervalId = 0;
        this.index = 0;
        this.jumpWidth = 0;
        this.nextBtn = this.slider.querySelector('.btn-next');
        this.prevBtn = this.slider.querySelector('.btn-prev');
        this.nextBtn.addEventListener('click', e => this.next(e))
        this.prevBtn.addEventListener('click', e => this.prev(e));
        this.autoPlay();
        this.setWidth();
    }

    setWidth() {
        var totalWidth = 0;
        for(let i = 0; i < this.totalSlides; i++) {
            this.slides[i].style.width = this.containerWidth + 'px';
            totalWidth = totalWidth + this.containerWidth;
        }
        this.slider.querySelector('.slider-items').style.width = totalWidth + 'px';
    }

    next(e) {
        if(e) {
            clearInterval(this.intervalId);
        }
        
        if(this.index == this.totalSlides - 1) {
            this.index = 0;
            this.jumpWidth = 0;
        }else {
            this.index++;
            this.jumpWidth = this.jumpWidth + this.containerWidth;
        }
        
        this.slider.querySelector('.slider-items').style.marginLeft = -this.jumpWidth+'px';
    }

    prev(e) {
        if(e) {
            clearInterval(this.intervalId);
        }
        if(this.index == 0) {
            this.index = this.totalSlides - 1;
            this.jumpWidth = this.containerWidth * (this.totalSlides - 1);
        }else {
            this.index--;
            this.jumpWidth = this.jumpWidth - this.containerWidth;
        }
        
        this.slider.querySelector('.slider-items').style.marginLeft = -this.jumpWidth+'px';
    }

    //const intervalId = setInterval(() => {this.next()}, 1000);

    autoPlay() {
        this.intervalId = setInterval(() => { this.next() }, 2000)
    }

}