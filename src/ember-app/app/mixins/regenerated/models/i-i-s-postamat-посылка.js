import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  отправитель: DS.attr('string'),
  получатель: DS.attr('string'),
  статус: DS.attr('i-i-s-postamat-статус'),
  логистика: DS.belongsTo('i-i-s-postamat-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-postamat-транзакция', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправитель: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.отправитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  получатель: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.получатель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat-посылка', {
    iD: attr('ID', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    отправитель: attr('Отправитель', { index: 2 }),
    получатель: attr('Получатель', { index: 3 }),
    логистика: belongsTo('i-i-s-postamat-логистика', 'Логистика', {
      состояние: attr('Состояние', { index: 5 }),
      информация: attr('Информация', { index: 6, hidden: true })
    }, { index: 4, displayMemberPath: 'информация' })
  });
};
