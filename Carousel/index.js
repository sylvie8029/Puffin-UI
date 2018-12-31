class Carousel extends HTMLElement {
	connectedCallback() {}
}

if (!customElements.get('carousel')) {
	customElements.define('carousel', Carousel);
}
