function createNewSlider() {
    var newSlider = {
        imageUrl: [],
        currentImageIndex: 0,
        showPrevBtn: null, //document.getElementById('show-prev-btn'),
        showNextBtn: null, //document.getElementById('show-next-btn'),
        slideImg: null, //document.getElementById('slide-img'),

        start: function (elId) {
            let that = this;
            var elSelector = '#' + elId;
            var el = document.querySelector(elSelector)

            this.showPrevBtn = el.querySelector('.show-prev-btn');
            this.showNextBtn = el.querySelector('.show-next-btn');
            this.slideImg = el.querySelector('.slide-img');

            //subscribe to event
            this.showPrevBtn.addEventListener('click', function (e) {
                that.onShowPrevBtnClick();
            });
            this.showNextBtn.addEventListener('click', function (e) {
                that.onShowNExtBtnClick();
            });

            //create images array
            this.imageUrl.push('https://xehay.vn/uploads/thumb/640x480/xehay-ferrari-488-spyder-290715-1.jpg');
            this.imageUrl.push('https://tostpost.com/images/2018-Mar/20/cddfa9868efc548e4af0af78cf4519d0/1.jpg');
            this.imageUrl.push('https://pbs.twimg.com/media/CBJWbs0WYAE0QkN.jpg');
            this.imageUrl.push('https://10wallpaper.com/wallpaper/1280x800/1107/Luxury_cars_-_Aston_Martin_Wallpaper_05_1280x800.jpg');

            this.slideImg.src = this.imageUrl[this.currentImageIndex];
        },

        onShowPrevBtnClick: function (e) {
            this.currentImageIndex--;
            this.slideImg.src = this.imageUrl[this.currentImageIndex];
            this.showNextBtn.removeAttribute('disabled');
            //disable button if need
            if (this.currentImageIndex < 1) {
                this.showPrevBtn.setAttribute('disabled', 'disabled');
            }
        },

        onShowNExtBtnClick: function (e) {
            this.currentImageIndex++;
            this.slideImg.src = this.imageUrl[this.currentImageIndex];
            this.showPrevBtn.removeAttribute('disabled');
            //disable button if need
            if (this.currentImageIndex >= this.imageUrl.length - 1) {
                this.showNextBtn.setAttribute('disabled', 'disabled');
            }
        },
    }
    return newSlider;
}