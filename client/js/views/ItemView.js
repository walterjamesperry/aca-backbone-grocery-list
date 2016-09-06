const _ = require('lodash');
const Backbone = require('backbone');

const ItemView = Backbone.View.extend({

    el: `<li class="item-info"></li>`,

    initialize() {
        this.listenTo(this.model, 'sync', this.render);
    },

    template: _.template(`
        <div>
          <label>Name: </label>
          <%= item.get("name") %>
        </div>
        <div>
          <label>Quantity:</label>
          <%= item.get("quantity") %>
        </div>
        <div>
          <label>Activated:</label>
          <input type="checkbox" <%= item.get('activated') ? 'checked' : '' %> />
        </div>
  `),

    events: {
        'click input[type="checkbox"]': 'handleCheckboxClick'
    },

    handleCheckboxClick(e) {
        this.model.save({
            activated: e.target.checked
        });
    },

    render() {
        if (this.model.get('activated')) {
            this.$el.addClass('activated');
        } else {
            this.$el.removeClass('activated');
        }

        this.$el.html(this.template({
            item: this.model
        }));
        
        return this;
    }
});

module.exports = ItemView;
