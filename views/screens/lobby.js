class LobbyScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("LobbyScreen").content.cloneNode(true)
    );
    this.$LogOut = this._shadowRoot.querySelector("#LogOut");
    this.$currentUsers = this._shadowRoot.querySelector('#currentPlayers');
    this.$LogOut.addEventListener("click", () => {
      const answer = confirm("Bạn có muốn đăng xuất?");
      if (answer) {
        firebase.auth().signOut();
        alert("Đăng xuất thành công");
      }
      else {
        return;
      }
    });
    let users = firebase.auth().currentUser;
    let name = users.displayName;
    this.$currentUsers.innerHTML = name;
  }
}

customElements.define("lobby-screen", LobbyScreen);
