import "./style.css";
import { suggestions } from "./data";
import { SuggestionElement } from "./SuggestionElement";

const form = document.getElementById("form-search");
const suggestionsWrapper = document.querySelector(".suggestions__wrapper");

form?.addEventListener("submit", preventDefault);
customElements.define("suggestion-game", SuggestionElement);

suggestions.forEach((suggestion) => {
  suggestionsWrapper?.insertAdjacentHTML(
    "beforeend",
    `
        <suggestion-game>
            <h3 slot="name">${suggestion.name}</h3>
            <p slot="desc">${suggestion.description}</p>
            <a slot="link" href="${suggestion.link}" class="link-disabled">
              Me guider vers ce jeu
            </a>
        </suggestion-game>
    `
  );
});

const anchors = document.querySelectorAll(".link-disabled");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", preventDefault);
});

function preventDefault(e: Event) {
  e.preventDefault();
}
