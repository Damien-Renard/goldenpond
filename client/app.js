import React from 'react';

import '../public/assets/reset.scss';
import '../public/assets/layout.scss';
import '../public/assets/global.scss';

const App = props => (
  <div id="app-wrapper" className="flex-row-center-center">
    { props.children }
  </div>
);

export default App;
