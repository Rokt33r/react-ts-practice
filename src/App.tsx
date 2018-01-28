import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { RootState } from './redux/types';
import { ActionCreators } from './redux/actions';

interface MyInputProps {
  value: string;
  onChange: (value: string) => any;
}

class MyInput extends React.Component<MyInputProps> {
  input: HTMLInputElement | null;

  handleChange = () => {
    const {
      onChange
    } = this.props;

    onChange(this.input ? this.input.value : '');
  }

  render() {
    const { value } = this.props;

    return <input onChange={this.handleChange} ref={c => this.input = c} value={value}/>;
  }
}

const MyConnectedIpnut = connect(
  (state: RootState) => ({value: state.value}),
  {
    onChange: ActionCreators.updateValue
  }
)(MyInput);

interface AppState {
  value: string;
}

class App extends React.Component<{}, AppState> {
  render() {
    return (
      <div className="App">
        <div>Hello</div>
        <MyConnectedIpnut />
      </div>
    );
  }
}

export default App;
