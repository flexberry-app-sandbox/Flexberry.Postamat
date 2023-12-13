import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-postamat-транзакция-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-postamat-посылка+логистика':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'информация',
            required: true,
            relationName: 'логистика',
            projection: 'ЛогистикаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
