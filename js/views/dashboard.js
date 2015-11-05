//delete and create deck 
//DONT FORGET TO FINISH THIS


import $ from 'jquery';
import 'jquery-serializejson';


function template(model) {
  return `
    <li class="deck">
      <span class="title">
        ${model.get('title')}
      </span>
      <button class="delete">
        X
      </button>
    </li>
  `;
}


function wrapper() {
  return `
    <header>
      <h1>Your Current Decks</h1>
    </header>
    <main>
      <form class="deck-add">
        <input type="text" name="title" placeholder="Add New Deck">
        <button>+</button>
      </form>
      <ul class="deck-list"></ul>
    </main>
  `;
}


function DecksView(collection) {
  this.collection = collection;
  this.$el = $('<div/>').addClass('deck-collection');
  this.$el.on('submit', 'form', (e) => {
    e.preventDefault();
    let data = this.$el.find('form').serializeJSON();
    this.collection.add(data).save().then(() => this.render());
  });
}

DecksView.prototype = {
  render() {
    this.$el.html(wrapper());
    let $ul = this.$el.find('ul');
    this.collection.each(model => {
      let $li = $(template(model));
      $ul.append($li);
    });
    return this;
  }
};

export default DecksView;