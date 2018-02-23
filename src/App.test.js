// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
    expect(app).toHaveClassName('App')
  })

  it('contains a title', () => {
    expect(app.find('h1.title')).toHaveText('0hh1')
  })
})
