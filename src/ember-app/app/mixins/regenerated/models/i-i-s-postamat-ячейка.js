import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  транзакция: DS.belongsTo('i-i-s-postamat-транзакция', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat-постамат', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    транзакция: belongsTo('i-i-s-postamat-транзакция', 'Транзакция', {
      время: attr('Время', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'время' })
  });
};
