'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Uppercase is enforced
var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
		_this.state = {
			options: props.options
		};
		return _this;
	}
	// ********************************
	// COMPONENT LIFECYCLE METHODS


	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				if (options) {
					this.setState(function () {
						return { options: options };
					});
				};
			} catch (e) {
				console.log(e);
			}
		}

		// Can access current/past props and state

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			};
		}
		// When existing component removed from screen

	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('Component unmounted');
		}
		// ********************************

	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'handleDeleteSingleOption',
		value: function handleDeleteSingleOption(optionToDelete) {
			// ALWAYS add () => ({}) when trying to update State
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToDelete !== option;
					})
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.options.length);
			alert(this.state.options[randomNum]);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'This option already exists!';
			};

			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Indecision';
			var subtitle = 'Put your life in the hands of a computer';
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Indecision App'
				),
				React.createElement(
					'h2',
					null,
					'Put your life into random chance?'
				),
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, { options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteSingleOption: this.handleDeleteSingleOption
				}),
				React.createElement(Add, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);
//  Default Props for Class Based Components


IndecisionApp.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h3',
			null,
			props.subtitle
		)
	);
};
// Default Props for functional components if one is not defined in component
Header.defaultProps = {
	title: 'Indecion App - Default Prop used DefaultProps'
};

// Functional Stateless Component
var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handlePick,
				disabled: !props.hasOptions },
			'Random Pick'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All Options?'
		),
		React.createElement(
			'p',
			null,
			'Options:',
			props.options.length
		),
		props.options.map(function (option) {
			return React.createElement(
				Option,
				{ key: option, handleDeleteSingleOption: props.handleDeleteSingleOption, optionText: option },
				' Options: ',
				option,
				'/>'
			);
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		props.optionText,
		' ',
		' ',
		React.createElement(
			'button',
			{ onClick: function onClick(e) {
					props.handleDeleteSingleOption(props.optionText);
				} },
			'X'
		)
	);
};

// Add new Option Component

var Add = function (_React$Component2) {
	_inherits(Add, _React$Component2);

	// Form Handling makes sense in the component intstead up top
	function Add(props) {
		_classCallCheck(this, Add);

		var _this2 = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

		_this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(Add, [{
		key: 'onFormSubmit',
		value: function onFormSubmit(e) {
			e.preventDefault();
			var o = e.target.elements[0].value.trim();
			var error = this.props.handleAddOption(o);

			this.setState(function () {
				return { error: error };
			});
			e.target.elements[0].value = '';
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.onFormSubmit },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return Add;
}(React.Component);

;

// ReactDOM.render(<IndecisionApp options={['Bar','Bones']}/>, document.getElementById('app'))
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
