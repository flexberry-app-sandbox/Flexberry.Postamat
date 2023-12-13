import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-postamat-постамат-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-postamat-ячейка+транзакция':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'время',
            required: true,
            relationName: 'транзакция',
            projection: 'ТранзакцияL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
