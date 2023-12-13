import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  адрес: DS.attr('string'),
  статус: DS.attr('i-i-s-postamat-статусы'),
  службаДоставки: DS.belongsTo('i-i-s-postamat-служба-доставки', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-postamat-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-postamat-постамат', {
    iD: attr('ID', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    ячейка: hasMany('i-i-s-postamat-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 0 }),
      транзакция: belongsTo('i-i-s-postamat-транзакция', 'Транзакция', {
        время: attr('Время', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'время' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-postamat-постамат', {
    iD: attr('ID', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat-служба-доставки', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
