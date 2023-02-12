const carousel = document.querySelector('.destination-container');
const destinations = document.querySelectorAll('.crew-selector');


destinations.forEach((destination) =>
  destination.addEventListener('click', (e) => {
    if (!e.target.parentElement.classList.contains('crew-selector')) {
      return;
    }

    const placeToOpen = getComputedStyle(document.getElementById(`${e.target.classList.value}`)).getPropertyValue('left')
    .slice(0, -2);;

    console.log(e.target.classList.value)
    console.log(placeToOpen)

    carousel.style.transform = `translateX(-${placeToOpen}px)`;
  })
);
