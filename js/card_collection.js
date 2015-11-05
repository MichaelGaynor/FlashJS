import Backbone from 'backbone';
import CardModel from './card_model';

const CardCollection = Backbone.Collection.extend({

  url: ,
  model: CardModel,
  parse(data) {
    return data.results;
  }

});

export default CardCollection;