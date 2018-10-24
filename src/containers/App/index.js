import React, { Component } from 'react';

import Header from 'components/blocks/Header';
import Title from 'components/elements/Title';
import AppStyle from 'components/elements/AppStyle';

// import logo from './logo.svg';
// import './App.css';

// const { remote, ipcRenderer } = window.require('electron')
// const electron = window.require('electron');
// console.log('electron ', electron);
// const {Menu, MenuItem} = remote;

// const menu = new Menu();
// menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked') }}));
// menu.append(new MenuItem({type: 'separator'}));
// menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}));

// window.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
//   menu.popup({ window: remote.getCurrentWindow() });
// }, false);

// const fs = window.require('fs');

// document.querySelector('#readme').innerHTML = fs.readFileSync('./README.md').toString().replace(/\n/gi, '<br/>');

// ipcRenderer.on('console-log', function (...args) {
//   console.log('args ', args);
//   const file = args[1][0];
//   if (file.match(/\.[jpe?g|png]/gi)) {
//     document.querySelector('#readme').innerHTML = '<img src="data:image/png;base64,' + fs.readFileSync(file).toString('base64') + '" />';
//   } else {
//     document.querySelector('#readme').innerHTML = fs.readFileSync(file).toString().replace(/\n/gi, '<br/>');
//   }
// });

// console.log(process.env);
// console.log(window.process.env);

document.getElementsByTagName('title')[0].innerHTML = process.env.REACT_APP_NAME;

class App extends Component {
  render() {
    return (
      <AppStyle>
        <Header>
          <Header.Title>
            {process.env.REACT_APP_NAME}
          </Header.Title>
        </Header>
        <Title>
          Homepage
        </Title>
        <p>
          Hello
        </p>
      </AppStyle>
    );
  }
}

export default App;
