function transitionToPage(page) {
    document.body.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = page;
    }, 1000);
}

window.onload = function() {
    document.body.classList.add('fade');
}