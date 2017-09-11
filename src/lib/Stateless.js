import React, {
  Component
} from 'react';

import Tab from './Tab';

class Tabs extends Component {
  onSwitchTab(title) {
    this.props.onSwitchTab(title);
  }

  getTabs() {
    return React.Children.toArray(this.props.children).filter(({type}) => {
      return type === Tab;
    });
  }

  render() {
    const activeTab = this.getTabs().map((child, idx) => {
      if (this.props.active !== child.props.title) return null;

      return (
        <div key={`tab-${idx}-content`}>
          {child.props.children}
        </div>
      );
    });

    const tabs = this.getTabs().map((child, idx) => {
      return React.cloneElement(child, {
        key: `tab-${idx}-title`,
        isActive: this.props.active === child.props.title,
        onSwitchTab: this.onSwitchTab.bind(this)
      });
    });

    return (
      <div className="Tabs">
        <div className="tabs is-centered">
          <ul>
            {tabs}
          </ul>
        </div>
        {activeTab}
      </div>
    );
  }
}

export default Tabs;
