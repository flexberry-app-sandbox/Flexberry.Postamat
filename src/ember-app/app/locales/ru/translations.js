import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPostamatЛогистикаLForm from './forms/i-i-s-postamat-логистика-l';
import IISPostamatПользовательLForm from './forms/i-i-s-postamat-пользователь-l';
import IISPostamatПостаматLForm from './forms/i-i-s-postamat-постамат-l';
import IISPostamatСлужбаДоставкиLForm from './forms/i-i-s-postamat-служба-доставки-l';
import IISPostamatТранзакцияLForm from './forms/i-i-s-postamat-транзакция-l';
import IISPostamatЛогистикаEForm from './forms/i-i-s-postamat-логистика-e';
import IISPostamatПользовательEForm from './forms/i-i-s-postamat-пользователь-e';
import IISPostamatПостаматEForm from './forms/i-i-s-postamat-постамат-e';
import IISPostamatСлужбаДоставкиEForm from './forms/i-i-s-postamat-служба-доставки-e';
import IISPostamatТранзакцияEForm from './forms/i-i-s-postamat-транзакция-e';
import IISPostamatЛогистикаModel from './models/i-i-s-postamat-логистика';
import IISPostamatПользовательModel from './models/i-i-s-postamat-пользователь';
import IISPostamatПостаматModel from './models/i-i-s-postamat-постамат';
import IISPostamatПосылкаModel from './models/i-i-s-postamat-посылка';
import IISPostamatСлужбаДоставкиModel from './models/i-i-s-postamat-служба-доставки';
import IISPostamatТранзакцияModel from './models/i-i-s-postamat-транзакция';
import IISPostamatЯчейкаModel from './models/i-i-s-postamat-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat-логистика': IISPostamatЛогистикаModel,
    'i-i-s-postamat-пользователь': IISPostamatПользовательModel,
    'i-i-s-postamat-постамат': IISPostamatПостаматModel,
    'i-i-s-postamat-посылка': IISPostamatПосылкаModel,
    'i-i-s-postamat-служба-доставки': IISPostamatСлужбаДоставкиModel,
    'i-i-s-postamat-транзакция': IISPostamatТранзакцияModel,
    'i-i-s-postamat-ячейка': IISPostamatЯчейкаModel
  },

  'application-name': 'Postamat',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Postamat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat',
          title: 'Postamat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        postamat: {
          caption: 'Postamat',
          title: 'Postamat',
          'i-i-s-postamat-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat-транзакция-l': {
            caption: 'ТранзакцияL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-postamat-логистика-l': IISPostamatЛогистикаLForm,
    'i-i-s-postamat-пользователь-l': IISPostamatПользовательLForm,
    'i-i-s-postamat-постамат-l': IISPostamatПостаматLForm,
    'i-i-s-postamat-служба-доставки-l': IISPostamatСлужбаДоставкиLForm,
    'i-i-s-postamat-транзакция-l': IISPostamatТранзакцияLForm,
    'i-i-s-postamat-логистика-e': IISPostamatЛогистикаEForm,
    'i-i-s-postamat-пользователь-e': IISPostamatПользовательEForm,
    'i-i-s-postamat-постамат-e': IISPostamatПостаматEForm,
    'i-i-s-postamat-служба-доставки-e': IISPostamatСлужбаДоставкиEForm,
    'i-i-s-postamat-транзакция-e': IISPostamatТранзакцияEForm
  },

});

export default translations;
