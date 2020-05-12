// src/components/Source.tsx

import * as React from 'react';

export interface TextareaCardProps {
  name: string;
  id: string;
  onChange?: (e: React.FormEvent) => void;
  value?: string;
}
class TextareaCard extends React.Component<TextareaCardProps> {
  public static defaultProps = {
    name: '',
    id: '',
    onChange: () => {},
    value: '',
  };

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <textarea
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default TextareaCard;
