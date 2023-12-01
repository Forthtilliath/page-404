export class TemplateElement extends HTMLElement {
  template: Node | undefined;

  constructor(id: string) {
    super();

    const template = document.getElementById(id) as HTMLTemplateElement | null;
    if (!template) return;

    this.template = template.content.cloneNode(true);
  }

  append() {
    if (!this.template) return;

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
