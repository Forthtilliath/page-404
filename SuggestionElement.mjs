export class TemplateElement extends HTMLElement {
    constructor(id) {
        super();

        const template = document.getElementById(id)?.content;
        if (!template) return;
  
        this.template = template.cloneNode(true);
    }

    append() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(this.template);
    }
}

export class SuggestionElement extends TemplateElement {
    constructor() {
        super("suggestion-game-template");
        this.append();
    }
}

