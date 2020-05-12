// src/components/Source.tsx

import * as React from 'react';

class TextareaCard extends React.Component<object> {
  name: string = '';
  id: string = '';
  onChange?: () => void;

  render() {
    return (
      <div className="card">
        <h2>{this.name}</h2>
        <textarea id={this.id} onChange={this.onChange}></textarea>
      </div>
    );
  }
}

export default TextareaCard;
