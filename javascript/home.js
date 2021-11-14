const stanzas = [
  {
    lines: [
      "Midway upon the journey of our life",
      "I found myself within a forest dark,",
      "For the straightforward pathway had been lost.",
    ],
    image: "../images/0.jpeg",
  },
  {
    lines: [
      "Ah me! how hard a thing it is to say",
      "What was this forest savage, rough, and stern,",
      "Which in the very thought renews the fear.",
    ],
    image: "../images/1.jpeg",
  },
  {
    lines: [
      "So bitter is it, death is little more;",
      "But of the good to treat, which there I found,",
      "Speak will I of the other things I saw there.",
    ],
    image: "../images/2.jpeg",
    darken: 0.5,
  },
  {
    lines: [
      "I cannot well repeat how there I entered,",
      "So full was I of slumber at the moment",
      "In which I had abandoned the true way.",
    ],
    image: "../images/3.jpeg",
    darken: 0.2,
  },
  {
    lines: [
      "But after I had reached a mountain's foot,",
      "At that point where the valley terminated,",
      "Which had with consternation pierced my heart,",
    ],
    image: "../images/4.webp",
    darken: 0.2,
  },
  {
    lines: [
      "Upward I looked, and I beheld its shoulders,",
      "Vested already with that planet's rays",
      "Which leadeth others right by every road.",
    ],
    image: "../images/5.avif",
    darken: 0.2,
  },
  {
    lines: [
      "Then was the fear a little quieted",
      "That in my heart's lake had endured throughout",
      "The night, which I had passed so piteously.",
    ],
    image: "../images/6.jpeg",
    darken: 0.5,
  },
  {
    lines: [
      "And even as he, who, with distressful breath,",
      "Forth issued from the sea upon the shore,",
      "Turns to the water perilous and gazes;",
    ],
    image: "../images/7.jpeg",
    darken: 0.5,
  },
  {
    lines: [
      "So did my soul, that still was fleeing onward,",
      "Turn itself back to re-behold the pass",
      "Which never yet a living person left.",
    ],
    image: "../images/7.jpeg",
    darken: 0.5,
  },
];

function carouselItem(stanza, index) {
  return `
<div
  class="carousel-item ${index === 0 ? "active" : ""}"
  style="
    background: ${
      stanza.darken
        ? `linear-gradient(rgba(0,0,0,${stanza.darken}), rgba(0,0,0,${stanza.darken})),`
        : ""
    }url(${stanza.image}) no-repeat center center fixed;
    background-size: cover;
  "
>
  <div class="container pb-5">
    <p class="fs-4">${stanza.lines[0]}</p>
    <p class="fs-4">${stanza.lines[1]}</p>
    <p class="fs-4">${stanza.lines[2]}</p>
  </div>
</div>`;
}

function carouselIndicator(index) {
  return `
    <li ${
      index === 0 ? 'class="active"' : ""
    } data-bs-target="#inferno" data-bs.slide-to="${index}"></li>
  `;
}

// document.getElementById("indicators").innerHTML = stanzas
//   .map((stanza, i) => carouselIndicator(i))
//   .join("");

document.getElementById("carousel").innerHTML = stanzas
  .map((stanza, i) => carouselItem(stanza, i))
  .join("");

// const myCarousel = document.querySelector("#inferno");
// const carousel = new bootstrap.Carousel(myCarousel);
