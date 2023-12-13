import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  время: DS.attr('string'),
  дата: DS.attr('date'),
  оплата: DS.attr('i-i-s-postamat-оплата'),
  сумма: DS.attr('decimal'),
  посылка: DS.hasMany('i-i-s-postamat-посылка', { inverse: 'транзакция', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТранзакцияE', 'i-i-s-postamat-транзакция', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    оплата: attr('Оплата', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    посылка: hasMany('i-i-s-postamat-посылка', 'Посылка', {
      iD: attr('ID', { index: 0 }),
      статус: attr('Статус', { index: 1 }),
      отправитель: attr('Отправитель', { index: 2 }),
      получатель: attr('Получатель', { index: 3 }),
      логистика: belongsTo('i-i-s-postamat-логистика', 'Логистика', {
        состояние: attr('Состояние', { index: 5 }),
        информация: attr('Информация', { index: 6, hidden: true })
      }, { index: 4, displayMemberPath: 'информация' })
    })
  });

  modelClass.defineProjection('ТранзакцияL', 'i-i-s-postamat-транзакция', {
    iD: attr('', { index: 0 }),
    время: attr('', { index: 1 }),
    дата: attr('', { index: 2 }),
    оплата: attr('', { index: 3 }),
    сумма: attr('', { index: 4 })
  });
};
