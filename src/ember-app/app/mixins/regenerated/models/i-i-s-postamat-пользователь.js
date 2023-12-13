import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  фИО: DS.attr('string'),
  транзакция: DS.belongsTo('i-i-s-postamat-транзакция', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-postamat-пользователь.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-postamat-пользователь.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-postamat-пользователь.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat-пользователь.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПользовательE', 'i-i-s-postamat-пользователь', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 }),
    транзакция: belongsTo('i-i-s-postamat-транзакция', 'Транзакция', {
      дата: attr('Дата', { index: 4 }),
      время: attr('Время', { index: 5 }),
      оплата: attr('Оплата', { index: 6 }),
      сумма: attr('Сумма', { index: 7 })
    }, { index: 3 })
  });

  modelClass.defineProjection('ПользовательL', 'i-i-s-postamat-пользователь', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 }),
    транзакция: belongsTo('i-i-s-postamat-транзакция', 'Дата', {
      дата: attr('Дата', { index: 3 }),
      время: attr('Время', { index: 4 }),
      оплата: attr('Оплата', { index: 5 }),
      сумма: attr('Сумма', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
