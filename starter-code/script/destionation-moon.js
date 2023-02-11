const carousel = document.querySelector('.destination-container');
const destinations = document.querySelectorAll('.destinations');

destinations.forEach((destination) =>
  destination.addEventListener('click', (e) => {
    if (!e.target.parentElement.classList.contains('destinations')) {
      return;
    }

    const destinationToOpen = e.target.innerText.toLowerCase();

    const rightDestination = getComputedStyle(
      document.querySelector(`#${destinationToOpen}`)
    )
      .getPropertyValue('left')
      .slice(0, -2);

    console.log(rightDestination);
    carousel.style.transform = `translateX(-${rightDestination}px)`;
  })
);
