import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat-логистика-l');
  this.route('i-i-s-postamat-логистика-e',
  { path: 'i-i-s-postamat-логистика-e/:id' });
  this.route('i-i-s-postamat-логистика-e.new',
  { path: 'i-i-s-postamat-логистика-e/new' });
  this.route('i-i-s-postamat-пользователь-l');
  this.route('i-i-s-postamat-пользователь-e',
  { path: 'i-i-s-postamat-пользователь-e/:id' });
  this.route('i-i-s-postamat-пользователь-e.new',
  { path: 'i-i-s-postamat-пользователь-e/new' });
  this.route('i-i-s-postamat-постамат-l');
  this.route('i-i-s-postamat-постамат-e',
  { path: 'i-i-s-postamat-постамат-e/:id' });
  this.route('i-i-s-postamat-постамат-e.new',
  { path: 'i-i-s-postamat-постамат-e/new' });
  this.route('i-i-s-postamat-служба-доставки-l');
  this.route('i-i-s-postamat-служба-доставки-e',
  { path: 'i-i-s-postamat-служба-доставки-e/:id' });
  this.route('i-i-s-postamat-служба-доставки-e.new',
  { path: 'i-i-s-postamat-служба-доставки-e/new' });
  this.route('i-i-s-postamat-транзакция-l');
  this.route('i-i-s-postamat-транзакция-e',
  { path: 'i-i-s-postamat-транзакция-e/:id' });
  this.route('i-i-s-postamat-транзакция-e.new',
  { path: 'i-i-s-postamat-транзакция-e/new' });
});

export default Router;
