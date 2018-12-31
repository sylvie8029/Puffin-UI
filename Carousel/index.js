class Carousel extends HTMLElement {
	connectedCallback() {
		this._imageIndex = 0;
		this._images = this.getAttribute('images').split(',');

		this.innerHTML = `
		<h2>${this.getAttribute('title')}</h2>

		<h4>by ${this.getAttribute('desc')}</h4>

		<div class="image-container"></div>

		<button class="back">&lt</button>
		
		<button class="forward">&gt</button>`;

		this.showImage();

		this.querySelector('button.back').addEventListener('click', event =>
			this.onBackButtonClick(event),
		);
		this.querySelector('button.forward').addEventListener('click', event =>
			this.onForwardButtonClick(event),
		);
	}

	showImage() {
		this.querySelector('.image-container').style.backgroundImage =
			'url(' + this._images[this._imageIndex] + ')';
	}

	onBackButtonClick(event) {
		this._imageIndex--;
		if (this._imageIndex < 0) {
			this._imageIndex = this._images.length - 1;
		}
		this.showImage();
	}

	onForwardButtonClick(event) {
		this._imageIndex++;
		if (this._imageIndex >= this._images.length) {
			this._imageIndex = 0;
		}
		this.showImage();
	}
}

if (!customElements.get('p-carousel')) {
	customElements.define('p-carousel', Carousel);
}
