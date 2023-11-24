//selecting our elements
const tagsEl = document.getElementById("choices-Wrap-Id");
const textEl = document.getElementById("text-Area");

textEl?.focus();

// our functions
const createTags = (e) => {
  const words = e
    .split(",")
    .filter((tag) => tag.trim() !== " ")
    .map((tag) => tag.trim());
  tagsEl?.innerHTML = "";
  words.forEach((word) => {
    const choiceEl = document.createElement("div");
    choiceEl.classList.add("choice");
    choiceEl.innerText = word;
    tagsEl?.appendChild(choiceEl);
  });
};

// our random select func
const randdomSelect = () => {
  const time: number = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randTag = pickRandomTag();
      highlightTag(randTag);
    }, 100);
  }, time * 100);
};

// random tag func :
const pickRandomTag = () => {
  const tags = document.querySelectorAll(".choice");
  return tags[Math.floor(Math.random() * tags.length)];
};

// highlightTag func

const highlightTag = (tag) => {
  tag.classList.add("active");
};

// unHighlightTag  func
const unHighlightTag = (tag) => {
  tag.classList.remove("active");
};

// our eventlisnters
textEl?.addEventListener("keyup", (e: any) => {
  createTags(e.target.value);

  // our enter function
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randdomSelect();
  }
});
