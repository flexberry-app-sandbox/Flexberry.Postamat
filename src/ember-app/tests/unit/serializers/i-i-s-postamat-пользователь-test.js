import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat-пользователь', 'Unit | Serializer | i-i-s-postamat-пользователь', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat-пользователь',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat-оплата',
    'transform:i-i-s-postamat-состояние',
    'transform:i-i-s-postamat-статус',
    'transform:i-i-s-postamat-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
