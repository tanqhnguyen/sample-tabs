import React, {
  Component
} from 'react';

class Tab extends Component {
  onClick(e) {
    e.preventDefault();

    this.props.onSwitchTab(this.props.title);
  }

  render() {
    const className = [];

    if (this.props.isActive) {
      className.push('is-active');
    }

    return (
      <li className={className.join(' ')}>
        <a onClick={this.onClick.bind(this)}>{this.props.title}</a>
      </li>
    );
  }
}

export default Tab;
