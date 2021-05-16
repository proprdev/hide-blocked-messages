const { Plugin } = require("powercord/entities");

module.exports = class fuckOff extends Plugin {
  async startPlugin() {
    this.loadStylesheet('./style.css');
    console.log("[propr: hide-blocked-messages] fuck you");
  }
};