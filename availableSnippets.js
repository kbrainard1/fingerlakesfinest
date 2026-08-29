var available = [
    "addysonsdream",
    "ironman",
    "stellabrown"
]

// Each snippet is a link to the horse details page with the title as the link text,
// a thumbnail image, and the first 500 characters of the description
available.forEach(horse => {
    var snippet = document.createElement("div");
    snippet.class = "horse_snippet_outer_div";
    document.querySelector(".available_snippet_div").appendChild(snippet);

    var titleLink = document.createElement("a");
    titleLink.href = "availablePages/" + horse + ".html";
    titleLink.textContent=horse;
    snippet.appendChild(titleLink);
}
);