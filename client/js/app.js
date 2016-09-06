const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('./views/ItemListView');
const ItemsCollection = require('./collections/ItemsCollection');
//const view = new UserListView({ users: ['Rick', 'Morty', 'Jake', 'Fin'] });
//const app = document.querySelector('#app');
//app.appendChild(view.render().el);

const items = new ItemsCollection();
items.fetch();
const view = new ItemListView({ collection: items });
const app = document.querySelector('#app');

app.appendChild(view.render().el);

// Set greeting
//const greeting = document.createElement('h2');
//greeting.innerText = 'Express Backbone Starter App!';

//app.appendChild(greeting);
