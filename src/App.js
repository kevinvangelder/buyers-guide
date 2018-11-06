import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme"
import Button from "react-uwp/Button"
import { Label } from "./views/label"

class App extends Component {
  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "dark", // set custom theme
          accent: "#ff0000 ", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: "http://127.0.0.1:8092/staticimages/jennifer-bailey-10753.jpg" // set global desktop background image
        })}
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>Hello</Button>

          <Label preset="dont" rationale="Updates Soon" />
          <Label preset="buy" />
          <Label preset="caution" />
          <Label preset="neutral" />
        </div>
      </UWPThemeProvider>
    );
  }
}

export default App;
