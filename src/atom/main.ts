import * as React from 'react';
import {render, initRoot, togglePanel} from '../components/render';
import {onActivate, onDeactivate} from './subscriptions';

class Main {
  root: HTMLElement;
  constructor() {
    this.root = initRoot();
  }
  activate() {
    // 1. create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0
    });
    // 2. initiate subscriptions
    onActivate();
    // 3. render React component
    render(this.root);
  }
  deactivate(): void {
    // remove subscriptions & unmount react app
    onDeactivate();
  }
  toggle() {
    togglePanel();
  }
};
export = new Main();
