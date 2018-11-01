import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var CodeMirror = require('react-codemirror');
var createReactClass = require('create-react-class');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/clike/clike.js');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/addon/hint/show-hint.js');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/edit/closebrackets.js');


var defaults = {
	markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};


var App = createReactClass({

  
	getInitialState: function() {
		return {
			code: defaults.markdown,
			readOnly: false,
      mode: 'markdown',
      
		};
	},
	updateCode: function(newCode) {
		this.setState({
      code: newCode,
      
		});
  },
  changeMode (e) {
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	},
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
  },
  matchbrackets(){
    this.setState({
      matchbrackets:true
    })

  },
	render: function() {
		var options = {
      lineNumbers: true,
      matchbrackets:true,
      autoCloseBrackets :true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (<div>
      <CodeMirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} autoFocus={true} />
      <div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode} value={this.state.mode}>
						<option value="markdown">Markdown</option>
						<option value="text/x-java">Java</option>
					</select>
					<button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
				</div>
      </div>
    )}
});


export default App;
