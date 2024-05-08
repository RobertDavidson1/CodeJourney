const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((letter) => {
    const span = document.createElement("span");

    span.className = "letter";

    span.innerText = letter;

    element.appendChild(span);
  });
};

enhance("github-link");
enhance("linked-in-link");

const symbols = "+×÷=";

const mathElement = document.getElementById("math-id");
mathElement.onmouseover = (event) => {
  let iterations = 0;
  const originalText = event.target.innerText; // Store the original text

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return symbols[Math.floor(Math.random() * 4)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1;
  }, 100);

  // Restore the original text if no longer hovering
  mathElement.onmouseout = () => {
    clearInterval(interval);
    event.target.innerText = originalText; // Restore the original text
  };
};

const csElement = document.getElementById("cs-id");
csElement.onmouseover = (event) => {
  let iterations = 0;
  const originalText = event.target.innerText; // Store the original text

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return Math.floor(Math.random() * 2);
      })
      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1;
  }, 100);

  // Restore the original text if no longer hovering
  csElement.onmouseout = () => {
    clearInterval(interval);
    event.target.innerText = originalText; // Restore the original text
  };
};
