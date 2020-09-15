import Clappr from 'clappr';

import './public/clappr-security-text.css'

const defaults = {
    securityText: "<YOUR_SECURITY_TEXT>",
}

export default Clappr.UIContainerPlugin.extend({
  name: 'security-text',
  initialize: function () {
      this.render();
  },
  bindEvents: function () {
      this.listenTo(this.container, Clappr.Events.CONTAINER_PAUSE, this.hide);
      this.listenTo(this.container, Clappr.Events.CONTAINER_PLAY, this.show);
  },

  hide: function () {
    this.$el.hide();
  },

  show: function () {
    this.$el.show();
  },

  render: function () {
      const div = document.createElement('div');
      div.className = "security-text-wrapper";
      this.setElement(div);

      console.log(this.$el);

      this.$el.html(`<p>${this.options.securityText || defaults.securityText}</p>`);

      this.container.$el.append(this.$el);

      return this;
  }
});