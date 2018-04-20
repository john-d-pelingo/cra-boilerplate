import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('Default suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be selectable by class "App"', () => {
    expect(shallow(<App />).is('.App')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.App').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<App />).text()).toContain('Welcome to React');
  });

  it('should render two children', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.children().length).toBe(2);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    const snapJson = enzymeToJson(wrapper);

    expect(snapJson).toMatchSnapshot();
  });
});
