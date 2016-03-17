const CompositeDisposable = require('atom').CompositeDisposable;
import {unmount, togglePanel} from '../components/render';

let subscriptions = new CompositeDisposable;

export function onActivate() {
    // Add subscriptions here
  subscriptions.add(
    atom.commands.add('atom-workspace', {
      'plugin-name:toggle': togglePanel
    }));
  return subscriptions;
}

export function onDeactivate() {
  // 1. remove window listener
  window.onresize = null;
  // 2. unmount React
  unmount();
  // 3. cleanup subscriptions
  subscriptions.dispose();
}
