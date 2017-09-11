import React, {
  Component
} from 'react';

import Tab from './Tab';
import Stateless from './Stateless';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active || this.getTabs()[0].props.title
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    });
  }

  onSwitchTab(title) {
    this.setState({active: title}, () => {
      this.props.onSwitchTab(title);
    });
  }

  getTabs() {
    return React.Children.toArray(this.props.children).filter(({type}) => {
      return type === Tab;
    });
  }

  render() {
    return (
      <Stateless active={this.state.active}
        onSwitchTab={this.onSwitchTab.bind(this)}>
        {this.props.children}
      </Stateless>
    );
  }
}

export default Tabs;
