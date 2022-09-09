function scrollToAnchor(link, headerSelector = null) {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        
        const topOffset = headerSelector ? document.querySelector(headerSelector).offsetHeight : 0;
        
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
      
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}

export { scrollToAnchor }
