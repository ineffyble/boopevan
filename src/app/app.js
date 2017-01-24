import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BoopEvan from './BoopEvan'; // Our custom react component

injectTapEventPlugin();

render(<BoopEvan />, document.getElementById('app'));
