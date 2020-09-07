import { setScreen } from "../../index.js";
class roomScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("roomScreen").content.cloneNode(true)
    );
    this.$backLobby = this._shadowRoot.querySelector("#backLobby");
    this.$backLobby.addEventListener("click", () => {
      setScreen("lobby");
    });
    this.$input = this._shadowRoot.querySelector("#playGame");
    this.$input.addEventListener("click", function () {
      alert("Bắt đầu");
    });
  }
}
customElements.define("room-screen", roomScreen);
