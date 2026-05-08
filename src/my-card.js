import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My Card";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 16px;
      }

      .card {
        border: 2px solid black;
        padding: 16px;
        background: pink;
        max-width: 300px;
      }

      :host([fancy]) .card {
        background: yellow;
        box-shadow: 5px 5px 5px black;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h2>${this.title}</h2>

        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <slot></slot>
        </details>

      </div>
    `;
  }

  openChanged(e) {
    this.fancy = e.target.open;
  }

  static get properties() {
    return {
      title: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
