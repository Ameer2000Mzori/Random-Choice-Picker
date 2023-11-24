//selecting our elements
var tagsEl = document.getElementById("choices-Wrap-Id");
var textEl = document.getElementById("text-Area");
textEl === null || textEl === void 0 ? void 0 : textEl.focus();
// our functions
var createTags = function (e) {
    var words = e
        .split(",")
        .filter(function (tag) { return tag.trim() !== " "; })
        .map(function (tag) { return tag.trim(); });
    tagsEl === null || tagsEl === void 0 ? void 0 : tagsEl.innerHTML = "";
    words.forEach(function (word) {
        var choiceEl = document.createElement("div");
        choiceEl.classList.add("choice");
        choiceEl.innerText = word;
        tagsEl === null || tagsEl === void 0 ? void 0 : tagsEl.appendChild(choiceEl);
    });
};
// our random select func
var randdomSelect = function () {
    var time = 30;
    var interval = setInterval(function () {
        var randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(function () {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);
    setTimeout(function () {
        clearInterval(interval);
        setTimeout(function () {
            var randTag = pickRandomTag();
            highlightTag(randTag);
        }, 100);
    }, time * 100);
};
// random tag func :
var pickRandomTag = function () {
    var tags = document.querySelectorAll(".choice");
    return tags[Math.floor(Math.random() * tags.length)];
};
// highlightTag func
var highlightTag = function (tag) {
    tag.classList.add("active");
};
// unHighlightTag  func
var unHighlightTag = function (tag) {
    tag.classList.remove("active");
};
// our eventlisnters
textEl === null || textEl === void 0 ? void 0 : textEl.addEventListener("keyup", function (e) {
    createTags(e.target.value);
    // our enter function
    if (e.key === "Enter") {
        setTimeout(function () {
            e.target.value = "";
        }, 10);
        randdomSelect();
    }
});
