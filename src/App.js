import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tab from './lib/Tab';
import Stateless from './lib/Stateless';
import Stateful from './lib/Stateful';
import Hybrid from './lib/Hybrid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStateless: 'Tab 1',
      activeHybrid: 'Tab 2'
    };
  }

  onSwitchTabStateless(title) {
    this.setState({
      activeStateless: title
    });
  }

  onSwitchTabHybrid(title) {
    this.setState({
      activeHybrid: title
    });
  }

  onChange(e) {
    this.setState({
      activeHybrid: e.target.value
    });
  }

  getOptions() {
    return [
      'Tab 1',
      'Tab 2',
      'Tab 3'
    ].map((value, idx) => {
      const selected = this.state.activeHybrid === value;
      return (
        <option selected={selected} key={idx} value={value}>{value}</option>
      );
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="section">
          <div className="title">
            Stateless
          </div>
          <Stateless active={this.state.activeStateless}
            onSwitchTab={this.onSwitchTabStateless.bind(this)}>
            <Tab title="Tab 1">Tab 1 content</Tab>
            <Tab title="Tab 2">Tab 2 content</Tab>
            <Tab title="Tab 3">Tab 3 content</Tab>
          </Stateless>
        </div>

        <div className="section">
          <div className="title">
            Stateful
          </div>
          <Stateful>
            <Tab title="Tab 1">Tab 1 content</Tab>
            <Tab title="Tab 2">Tab 2 content</Tab>
            <Tab title="Tab 3">Tab 3 content</Tab>
          </Stateful>
        </div>

        <div className="section">
          <div className="title">
            Hybrid
          </div>
          <div className="select">
            <select onChange={this.onChange.bind(this)}>
              {this.getOptions()}
            </select>
          </div>
          <Hybrid active={this.state.activeHybrid}
            onSwitchTab={this.onSwitchTabHybrid.bind(this)}>
            <Tab title="Tab 1">Tab 1 content</Tab>
            <Tab title="Tab 2">Tab 2 content</Tab>
            <Tab title="Tab 3">Tab 3 content</Tab>
          </Hybrid>
        </div>
      </div>
    );
  }
}

export default App;
