import Backbone from 'backbone';
import DeckModel from './deck_model';

const CardCollection = Backbone.Collection.extend({

  url: ,
  model: DeckModel,
  parse(data) {
    return data.results;
  }

});

export default DeckCollection;