import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  1: 'Оформлен',
  2: 'Отправлен на сборку',
  3: 'Собран на складе',
  4: 'В пути',
  5: 'В сортировочном центре',
  6: 'Разгрузка в пункте выдачи',
  7: 'Готов к выдачи'
});
