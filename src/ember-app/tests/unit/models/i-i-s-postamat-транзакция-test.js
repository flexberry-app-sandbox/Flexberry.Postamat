import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat-транзакция', 'Unit | Model | i-i-s-postamat-транзакция', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat-логистика',
    'model:i-i-s-postamat-пользователь',
    'model:i-i-s-postamat-постамат',
    'model:i-i-s-postamat-посылка',
    'model:i-i-s-postamat-служба-доставки',
    'model:i-i-s-postamat-транзакция',
    'model:i-i-s-postamat-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
