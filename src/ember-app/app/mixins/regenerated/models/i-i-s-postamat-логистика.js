import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  информация: DS.attr('string'),
  состояние: DS.attr('i-i-s-postamat-состояние')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  информация: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.информация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛогистикаE', 'i-i-s-postamat-логистика', {
    iD: attr('ID', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    информация: attr('Информация', { index: 2 })
  });

  modelClass.defineProjection('ЛогистикаL', 'i-i-s-postamat-логистика', {
    iD: attr('ID', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    информация: attr('Информация', { index: 2 })
  });
};
