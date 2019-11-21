module.exports = {
  space: {},
  contentType: {},
  token: {},
  data: {},
  webhooks: {},
  getWebhooks: function(contentType, eventName) {
    console.log(contentType, " === " + eventName);
    if (this.space) {
      var whs = [];
      for (i = 0; i < this.space.webhooks.length; i++) {
        if (
          this.space.webhooks[i].trigger &&
          this.space.webhooks[i].trigger.events.indexOf(eventName) != -1 &&
          (!this.space.webhooks[i].trigger.contentTypes ||
            (this.contentType &&
              this.space.webhooks[i].trigger.contentTypes &&
              this.space.webhooks[i].trigger.contentTypes.indexOf(
                this.contentType.toString()
              ) != -1))
        ) {
          whs.push({
            data: this.space.webhooks[i],
            func: this.webhooks[this.space.webhooks[i].type]
          });
        }
      }
      console.log(whs);
      return whs;
    }
  }
};
