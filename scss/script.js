function fadeOutPage(event) {
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = event.target.href;
    }, 800);
  }
  