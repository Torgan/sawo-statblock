// src/components/Source.tsx

import * as React from 'react';

export interface TextareaCardProps {
  name: string;
  id: string;
  onChange: () => void;
}
class TextareaCard extends React.Component<TextareaCardProps> {
  public static defaultProps = {
    name: '',
    id: '',
    onChange: () => {},
  };

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <textarea id={this.props.id} onChange={this.props.onChange}></textarea>
      </div>
    );
  }
}

export default TextareaCard;
