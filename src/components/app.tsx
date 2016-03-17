import * as React from 'react';

// set window size to ensure scroll
let height = atom.getSize().height;
window.onresize = function() {
  height = atom.getSize().height;
};

export default class extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
    return (
      <section id='plugin-name' style={{height}}>
          <h1>Plugin Name</h1>
          <p>Build your react app here</p>
      </section>
    );
  }
};
