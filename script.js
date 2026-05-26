document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {

    const target = parseInt(counter.getAttribute("data-target"));

    let current = 0;

    const speed = 40;

    const updateCounter = () => {

      if(current < target){

        current++;

        counter.innerText = current + "+";

        setTimeout(updateCounter, speed);

      }

    };

    updateCounter();

  });

});