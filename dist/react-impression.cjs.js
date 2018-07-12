'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var moment = _interopDefault(require('moment'));
var ReactCSSTransitionGroup = _interopDefault(require('react-addons-css-transition-group'));
var reactDom = require('react-dom');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
	/*!
   Copyright (c) 2017 Jed Watson.
   Licensed under the MIT License (MIT), see
   http://jedwatson.github.io/classnames
 */
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	})();
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// 获取小图标
var getAddonByType = function getAddonByType(type) {
  switch (type) {
    case 'danger':
      return 'fa-exclamation-circle text-danger';
    default:
      return 'fa-exclamation-triangle text-warning';
  }
};

/**
 * Alert 组件
 */

var Alert = function (_PureComponent) {
  inherits(Alert, _PureComponent);

  function Alert() {
    classCallCheck(this, Alert);
    return possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  createClass(Alert, [{
    key: 'render',

    // props 校验
    value: function render() {
      var _props = this.props,
          type = _props.type,
          btnText = _props.btnText,
          onClick = _props.onClick,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['type', 'btnText', 'onClick', 'className', 'children']),
          iconTypeClass = getAddonByType(type);


      return React__default.createElement(
        'div',
        { className: classnames('alert', className) },
        React__default.createElement(
          'div',
          _extends({}, others, { className: 'alert-dialog' }),
          React__default.createElement(
            'div',
            { className: 'alert-addon' },
            React__default.createElement('i', { className: classnames('fa', iconTypeClass) })
          ),
          React__default.createElement(
            'div',
            { className: 'alert-body' },
            children
          ),
          React__default.createElement(
            'div',
            { className: 'alert-footer', onClick: onClick },
            btnText
          )
        )
      );
    }
    // 默认props

  }]);
  return Alert;
}(React.PureComponent);

Alert.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 类型（success、primary、warning、danger）
  type: PropTypes.string,
  // 回调
  onClick: PropTypes.func,
  // 按钮名字
  btnText: PropTypes.string };
Alert.defaultProps = {
  type: 'info',
  btnText: '确定'
};

/**
 * AttentionLink 组件
 */
var propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 超链接
  href: PropTypes.string
};

var AttentionLink = function AttentionLink(_ref) {
  var href = _ref.href,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['href', 'className', 'children']);

  return React__default.createElement(
    'a',
    _extends({}, others, {
      href: href,
      className: classnames('attention-link', className)
    }),
    children
  );
};

AttentionLink.propTypes = propTypes;

/**
 * Attention 组件
 */

var Attention = function (_PureComponent) {
  inherits(Attention, _PureComponent);

  // 初始state
  function Attention(props, context) {
    classCallCheck(this, Attention);

    var _this = possibleConstructorReturn(this, (Attention.__proto__ || Object.getPrototypeOf(Attention)).call(this, props, context));

    _this.hideHandle = function () {
      _this.setState({
        show: false
      });
    };

    _this.state = {
      show: true
    };
    return _this;
  }
  // props 校验

  // 关闭


  createClass(Attention, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          closeable = _props.closeable,
          children = _props.children,
          others = objectWithoutProperties(_props, ['theme', 'className', 'closeable', 'children']),
          themeClass = 'attention-' + theme,
          hiddenClass = this.state.show ? '' : 'hidden';


      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('attention', themeClass, hiddenClass, className)
        }),
        children,
        closeable && React__default.createElement(
          'button',
          { type: 'button', className: 'close', onClick: this.hideHandle },
          '\xD7'
        )
      );
    }
  }]);
  return Attention;
}(React.PureComponent);

Attention.propTypes = {
  // 样式（success、primary、warning、danger）
  theme: PropTypes.string,
  // 是否可关闭
  closeable: PropTypes.bool,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any };


Attention.Link = AttentionLink;

/**
 * 徽章组件.
 */

var Badge = function (_PureComponent) {
  inherits(Badge, _PureComponent);

  function Badge() {
    classCallCheck(this, Badge);
    return possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  createClass(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          children = _props.children,
          theme = _props.theme,
          type = _props.type,
          size = _props.size,
          className = _props.className,
          themeClass = 'bg-' + theme,
          typeClass = 'badge-' + type,
          badgeSizeClass = size ? 'badge-addon-' + size : null;


      return React__default.createElement(
        'span',
        { className: classnames('badge', typeClass, className) },
        React__default.createElement(
          'div',
          { className: classnames('badge-addon', badgeSizeClass, themeClass) },
          content
        ),
        children
      );
    }
    // 默认props

  }]);
  return Badge;
}(React.PureComponent);

Badge.propTypes = {
  // 内容
  content: PropTypes.string,
  // 样式
  theme: PropTypes.string,
  // 类型
  type: PropTypes.string,
  // addon尺寸
  size: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string };
Badge.defaultProps = {
  theme: 'primary'
};

/**
 * 面包屑组件.
 */
var Breadcrumb = function Breadcrumb(_ref) {
  var separator = _ref.separator,
      children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['separator', 'children', 'className']);

  var separatorClass = separator ? 'breadcrumb-' + separator : null;

  children = React__default.Children.map(children, function (child, index) {
    if (!child) {
      return child;
    }

    return React__default.createElement(
      'li',
      { key: index, className: 'breadcrumb-item' },
      child
    );
  });

  return React__default.createElement(
    'ol',
    _extends({}, others, {
      className: classnames('breadcrumb', className, separatorClass)
    }),
    children
  );
};

Breadcrumb.propTypes = {
  // 分隔
  separator: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};

/**
 * 按钮组件.
 */

var Button = function (_PureComponent) {
  inherits(Button, _PureComponent);

  // 构造函数
  function Button(props, context) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props, context));

    _this.state = {
      Tag: props.href ? 'a' : 'button'
    };
    return _this;
  }
  // prop type校验

  // 默认props


  createClass(Button, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          outline = _props.outline,
          size = _props.size,
          shape = _props.shape,
          className = _props.className,
          onClick = _props.onClick,
          href = _props.href,
          close = _props.close,
          block = _props.block,
          children = _props.children,
          others = objectWithoutProperties(_props, ['theme', 'outline', 'size', 'shape', 'className', 'onClick', 'href', 'close', 'block', 'children']),
          Tag = this.state.Tag;


      delete others.eventKey;

      return React__default.createElement(
        Tag,
        _extends({}, others, {
          type: href ? null : 'button',
          onClick: onClick,
          href: href,
          className: classnames(!close && 'btn', !close && 'btn' + (outline ? '-outline' : '') + '-' + theme, size && 'btn-' + size, shape && 'btn-' + shape, close && 'close', block && 'btn-block', className)
        }),
        children
      );
    }
  }]);
  return Button;
}(React.PureComponent);

Button.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 样式（primary、default、secondary）
  theme: PropTypes.string,
  // click事件
  onClick: PropTypes.func,
  // 是否outline
  outline: PropTypes.bool,
  // 尺寸
  size: PropTypes.string,
  // 形状
  shape: PropTypes.string,
  // 链接地址
  href: PropTypes.string,
  // 是否关闭按钮
  close: PropTypes.bool,
  // 是否block
  block: PropTypes.bool };
Button.defaultProps = {
  theme: 'primary' };

/**
 * ButtonGroup组件.
 */

var ButtonGroup = function (_PureComponent) {
  inherits(ButtonGroup, _PureComponent);

  // 初始state

  // prop校验
  function ButtonGroup(props, context) {
    classCallCheck(this, ButtonGroup);

    var _this = possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props, context));

    _this.state = {
      activeKey: props.activeKey
    };
    return _this;
  }
  // 渲染

  // 默认props


  createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeKey = this.state.activeKey,
          _props = this.props,
          theme = _props.theme,
          size = _props.size,
          className = _props.className,
          onSelect = _props.onSelect,
          children = _props.children,
          others = objectWithoutProperties(_props, ['theme', 'size', 'className', 'onSelect', 'children']),
          btnGroupSize = size ? 'btn-group-' + size : null;


      delete others.activeKey;
      children = children.map(function (child, idx) {
        var _child$props = child.props,
            eventKey = _child$props.eventKey,
            onClick = _child$props.onClick;


        return React__default.cloneElement(child, {
          key: idx, // eslint-disable-line
          outline: theme !== 'default' && (!onSelect || activeKey !== eventKey),
          theme: theme === 'default' && onSelect && activeKey === eventKey ? 'primary' : theme,
          onClick: onSelect ? function (event) {
            _this2.setState({
              activeKey: eventKey
            });
            onSelect && onSelect(eventKey, event);
            onClick && onClick(event);
          } : onClick
        });
      });

      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('btn-group', btnGroupSize, className)
        }),
        children
      );
    }
  }]);
  return ButtonGroup;
}(React.PureComponent);

ButtonGroup.propTypes = {
  // 大小（lg、sm）
  size: PropTypes.string,
  // 主题样式(primary、secondary、default)
  theme: PropTypes.string,
  // 激活索引（被选中Button会额外添加选中样式，为空时不额外添加选中样式）
  activeKey: PropTypes.any,
  // 选中回调
  onSelect: PropTypes.func,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any };
ButtonGroup.defaultProps = {
  theme: 'default' };

/**
 * ButtonToolbar组件.
 */
var ButtonToolbar = function ButtonToolbar(_ref) {
  var className = _ref.className,
      children = _ref.children;

  return React__default.createElement(
    'div',
    { className: classnames('btn-toolbar', className) },
    children
  );
};

ButtonToolbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * Icon组件.
 */

var Icon = function (_PureComponent) {
  inherits(Icon, _PureComponent);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  createClass(Icon, [{
    key: 'render',

    // 渲染

    // prop type校验
    value: function render() {
      var _props = this.props,
          type = _props.type,
          size = _props.size,
          left = _props.left,
          right = _props.right,
          className = _props.className,
          others = objectWithoutProperties(_props, ['type', 'size', 'left', 'right', 'className']),
          typeClass = 'fa-' + type,
          sizeClass = size ? 'fa-' + size : null,
          leftClass = left ? 'offset-r' : null,
          rightClass = right ? 'offset-l' : null;


      return React__default.createElement('i', _extends({}, others, {
        className: classnames('fa', typeClass, sizeClass, leftClass, rightClass, className)
      }));
    }
    // 默认props

  }]);
  return Icon;
}(React.PureComponent);

Icon.propTypes = {
  // 图标类型
  type: PropTypes.string,
  // 是否在左边
  left: PropTypes.bool,
  // 是否在右边
  right: PropTypes.bool,
  // 尺寸
  size: PropTypes.string,
  // 自定义样式
  className: PropTypes.string };
Icon.defaultProps = {
  left: false,
  right: false };

// 时间格式
var FORMAT = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  DATE: 'YYYY-MM-DD'

  /**
   * 日历组件.
   */
};
var Calendar = function (_Component) {
  inherits(Calendar, _Component);

  function Calendar(props, context) {
    classCallCheck(this, Calendar);

    var _this = possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props, context));

    _initialiseProps.call(_this);

    var date = props.date,
        format = props.format,
        weekdays = _this.getSortWeekdays(),
        currentMoment = date ? moment(date, format) : moment();

    _this.state = {
      currentMoment: currentMoment, // 当前时间
      days: [], // 日期选择
      weekdays: weekdays
    };
    return _this;
  }
  // 默认props


  createClass(Calendar, [{
    key: 'getSortWeekdays',

    /**
     * 获取排序后的星期.
     * @return {[Array]} [星期数组]
     */
    value: function getSortWeekdays() {
      var _props = this.props,
          firstDayOfWeek = _props.firstDayOfWeek,
          weekdays = _props.weekdays;


      return firstDayOfWeek === 0 ? weekdays : [].concat(toConsumableArray(weekdays.slice(firstDayOfWeek, weekdays.length)), toConsumableArray(weekdays.slice(0, firstDayOfWeek)));
    }
    /**
     * 前一个月.
     */

    /**
     * 下一个月.
     */

  }, {
    key: 'getDate',

    /**
     * 获取日期项.
     */
    value: function getDate() {
      var firstDayOfWeek = this.props.firstDayOfWeek,
          currentMoment = this.state.currentMoment,
          days = [],
          today = moment().format(FORMAT.DATE),
          prevMonth = moment(currentMoment).subtract(1, 'months'),
          nextMonth = moment(currentMoment).add(1, 'months'),
          currentYear = currentMoment.format(FORMAT.YEAR),
          currentMonth = currentMoment.format(FORMAT.MONTH),
          daysLength = currentMoment.daysInMonth();


      for (var i = 1; i <= daysLength; i++) {
        var dayFormat = currentYear + '-' + currentMonth + '-' + i,
            dayMoment = moment(dayFormat, FORMAT.DATE);

        days.push({
          text: i,
          date: dayMoment,
          inMonth: true,
          isToday: dayMoment.isSame(today)
        });
      }
      // 上个月天数
      var firstDay = moment(currentMoment).date(1).day(),
          prevMonthYear = prevMonth.format(FORMAT.YEAR),
          prevMonthMonth = prevMonth.format(FORMAT.MONTH),
          prevMonthDaysLength = prevMonth.daysInMonth(),
          prevMonthMax = firstDay - firstDayOfWeek >= 0 ? firstDay - firstDayOfWeek : firstDay - firstDayOfWeek + 7;

      for (var _i = 0; _i <= prevMonthMax - 1; _i++) {
        var _dayFormat = prevMonthYear + '-' + prevMonthMonth + '-' + (prevMonthDaysLength - _i),
            _dayMoment = moment(_dayFormat, FORMAT.DATE);

        days.unshift({
          text: prevMonthDaysLength - _i,
          date: _dayMoment,
          isToday: _dayMoment.isSame(today)
        });
      }
      // 下个月天数
      var lastDay = moment(currentMoment).date(daysLength).day(),
          nextMonthYear = nextMonth.format(FORMAT.YEAR),
          nextMonthMonth = nextMonth.format(FORMAT.MONTH),
          nextMonthMax = lastDay - firstDayOfWeek >= 0 ? 7 - lastDay + firstDayOfWeek : firstDayOfWeek - lastDay;

      for (var _i2 = 1; _i2 < nextMonthMax; _i2++) {
        var _dayFormat2 = nextMonthYear + '-' + nextMonthMonth + '-' + _i2,
            _dayMoment2 = moment(_dayFormat2, FORMAT.DATE);

        days.push({
          text: _i2,
          date: _dayMoment2,
          isToday: _dayMoment2.isSame(today)
        });
      }

      return days;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var format = this.props.format,
          currentMoment = this.state.currentMoment,
          date = nextProps.date;


      date && currentMoment.format(format) !== date && this.setState({
        currentMoment: moment(date, format)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          size = _props2.size,
          format = _props2.format,
          firstDayOfWeek = _props2.firstDayOfWeek,
          showHeader = _props2.showHeader,
          showToolbar = _props2.showToolbar,
          captionFormat = _props2.captionFormat,
          cellRender = _props2.cellRender,
          onCellClick = _props2.onCellClick,
          className = _props2.className,
          _state = this.state,
          currentMoment = _state.currentMoment,
          weekdays = _state.weekdays,
          sizeClass = size ? 'calendar-' + size : '',
          days = this.getDate();


      return React__default.createElement(
        'div',
        { className: classnames('calendar', sizeClass, className) },
        showHeader && React__default.createElement(
          'div',
          { className: 'calendar-header' },
          React__default.createElement(
            'div',
            { className: 'calendar-header-caption' },
            currentMoment.format(captionFormat)
          ),
          showToolbar && React__default.createElement(
            'div',
            { className: 'calendar-header-toolbar' },
            React__default.createElement(
              ButtonGroup,
              { size: size },
              React__default.createElement(
                Button,
                { onClick: this.prevMonthHandle },
                React__default.createElement(Icon, { type: 'angle-left' })
              ),
              React__default.createElement(
                Button,
                { onClick: this.nextMonthHandle },
                React__default.createElement(Icon, { type: 'angle-right' })
              )
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'calendar-body' },
          React__default.createElement(
            'div',
            { className: 'calendar-weekgroup' },
            weekdays.map(function (weekday) {
              return React__default.createElement(
                'div',
                { key: weekday, className: 'calendar-weekgroup-item' },
                weekday
              );
            })
          ),
          React__default.createElement(
            'div',
            { className: 'calendar-daygroup' },
            days.map(function (day, index) {
              return React__default.createElement(
                'div',
                {
                  key: day.text + '-' + day.inMonth,
                  onClick: function onClick() {
                    return onCellClick && onCellClick({
                      day: day.text,
                      year: day.date.format(FORMAT.YEAR),
                      month: day.date.format(FORMAT.MONTH),
                      date: day.date.format(format),
                      inMonth: day.inMonth,
                      isToday: day.isToday
                    });
                  },
                  className: classnames('calendar-daygroup-item', {
                    disabled: !day.inMonth,
                    active: day.isToday
                  })
                },
                React__default.createElement(
                  'div',
                  {
                    className: classnames('calendar-daygroup-item-header', {
                      'text-secondary': (index + firstDayOfWeek) % 7 === 0 || (index + firstDayOfWeek + 1) % 7 === 0
                    })
                  },
                  day.text
                ),
                React__default.createElement(
                  'div',
                  { className: 'calendar-daygroup-item-body' },
                  cellRender && cellRender({
                    day: day.text,
                    year: day.date.format(FORMAT.YEAR),
                    month: day.date.format(FORMAT.MONTH),
                    date: day.date.format(format),
                    inMonth: day.inMonth,
                    isToday: day.isToday
                  })
                )
              );
            })
          )
        )
      );
    }
  }]);
  return Calendar;
}(React.Component);

Calendar.propTypes = {
  className: PropTypes.string,
  // 尺寸
  size: PropTypes.oneOf(['sm', 'lg']),
  // 时间
  date: PropTypes.string,
  // 时间格式
  format: PropTypes.string,
  // 头部显示格式
  captionFormat: PropTypes.string,
  // 一周第一天
  firstDayOfWeek: PropTypes.number,
  // 周几
  weekdays: PropTypes.arrayOf(PropTypes.string),
  // 是否显示工具栏
  showToolbar: PropTypes.bool,
  // 是否显示头部
  showHeader: PropTypes.bool,
  // 自定义内容
  cellRender: PropTypes.func,
  // 时间单元格点击
  onCellClick: PropTypes.func,
  // 日历时间切换
  onDateChange: PropTypes.func };
Calendar.defaultProps = {
  format: FORMAT.DATE,
  captionFormat: 'YYYY年MM月',
  showToolbar: true,
  showHeader: true,
  firstDayOfWeek: 1,
  weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'] };

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.prevMonthHandle = function () {
    var currentMoment = _this2.state.currentMoment,
        onDateChange = _this2.props.onDateChange,
        prevMonthMoment = moment(currentMoment).subtract(1, 'months');


    _this2.setState({
      currentMoment: prevMonthMoment
    });

    onDateChange && onDateChange(prevMonthMoment);
  };

  this.nextMonthHandle = function () {
    var currentMoment = _this2.state.currentMoment,
        onDateChange = _this2.props.onDateChange,
        nextMonthMoment = moment(currentMoment).add(1, 'months');


    _this2.setState({
      currentMoment: nextMonthMoment
    });

    onDateChange && onDateChange(nextMonthMoment);
  };
};

/**
 * CardBlock组件.
 */
var CardBlock = function CardBlock(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('card-block', className) }),
    children
  );
};

CardBlock.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * CardHeader组件.
 */
var CardHeader = function CardHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('card-header', className) }),
    children
  );
};

CardHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * CardFooter组件.
 */
var CardFooter = function CardFooter(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('card-footer', className) }),
    children
  );
};

CardFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * Card组件.
 */

var Card = function (_PureComponent) {
  inherits(Card, _PureComponent);

  function Card() {
    classCallCheck(this, Card);
    return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  createClass(Card, [{
    key: 'render',

    // 渲染

    // props校验
    value: function render() {
      var _props = this.props,
          block = _props.block,
          noborder = _props.noborder,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['block', 'noborder', 'className', 'children']),
          blockClass = block ? 'card-block' : null,
          borderClass = noborder ? 'no-border' : null;


      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('card', blockClass, borderClass, className)
        }),
        children
      );
    }
    // 默认props

  }]);
  return Card;
}(React.PureComponent);

Card.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 是否block
  block: PropTypes.bool,
  // 是否无边框
  noborder: PropTypes.bool };
Card.defaultProps = {
  block: false,
  noborder: false };


Card.Block = CardBlock;
Card.Header = CardHeader;
Card.Footer = CardFooter;

/**
 * Checkbox 组件.
 */

var Checkbox = function (_PureComponent) {
  inherits(Checkbox, _PureComponent);

  function Checkbox() {
    classCallCheck(this, Checkbox);
    return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  createClass(Checkbox, [{
    key: 'getValue',

    // props校验
    value: function getValue() {
      var value = this.props.value,
          main = this.refs.main;


      if (value === undefined) {
        return main.checked;
      }

      return value;
    }
    // 默认props

  }, {
    key: 'setValue',
    value: function setValue(checked) {
      var main = this.refs.main;


      main.checked = !!checked;
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          disabled = _props.disabled,
          className = _props.className,
          _onChange = _props.onChange,
          children = _props.children,
          others = objectWithoutProperties(_props, ['value', 'checked', 'defaultChecked', 'disabled', 'className', 'onChange', 'children']);


      return React__default.createElement(
        'label',
        _extends({}, others, { className: classnames('checkbox', className) }),
        React__default.createElement('input', {
          type: 'checkbox',
          ref: 'main',
          onChange: function onChange(event) {
            return _onChange && _onChange(event, value);
          },
          disabled: disabled,
          checked: checked,
          defaultChecked: defaultChecked
        }),
        React__default.createElement(
          'div',
          { className: 'checkbox-addon' },
          React__default.createElement('i', { className: 'fa fa-check' })
        ),
        React__default.createElement(
          'span',
          { className: 'checkbox-label' },
          children
        )
      );
    }
  }]);
  return Checkbox;
}(React.PureComponent);

// getValue


Checkbox.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 是否可以点击
  disabled: PropTypes.bool,
  // 是否默认选中
  defaultChecked: PropTypes.bool,
  // 是否选中
  checked: PropTypes.bool,
  // 状态变更回调
  onChange: PropTypes.func,
  value: PropTypes.any };
Checkbox.defaultProps = {
  disabled: false
};
Checkbox.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
Checkbox.setValue = function (ref, checked) {
  if (!ref) return;

  ref.setValue(checked);
};

/**
 * CheckboxGroup组件.
 */

var CheckboxGroup = function (_PureComponent) {
  inherits(CheckboxGroup, _PureComponent);

  // 初始化state
  function CheckboxGroup(props, context) {
    classCallCheck(this, CheckboxGroup);

    // 是否木偶组件
    var _this = possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props, context));

    _this.onChangeHandle = function (event, value) {
      var checked = event.target.checked,
          onChange = _this.props.onChange;


      if (_this.isPuppet) {
        var propsValue = _this.props.value,
            originValue = checked ? [].concat(toConsumableArray(propsValue), [value]) : [].concat(toConsumableArray(propsValue.filter(function (item) {
          return item !== value;
        })));

        onChange && onChange(originValue, event);
      } else {
        var _originValue = checked ? [].concat(toConsumableArray(_this.state.value), [value]) : [].concat(toConsumableArray(_this.state.value.filter(function (item) {
          return item !== value;
        })));

        _this.setState({
          value: _originValue
        }, function () {
          onChange && onChange(_originValue, event);
        });
      }
    };

    _this.isPuppet = props.value !== undefined;

    var initValue = {
      value: _this.isPuppet ? undefined : props.defaultValue || []
    };

    _this.state = _extends({}, initValue);
    return _this;
  }
  // props校验

  // 默认props


  createClass(CheckboxGroup, [{
    key: 'getValue',
    value: function getValue() {
      return this.isPuppet ? this.props.value : this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!this.isPuppet) this.setState({ value: value });
    }
    // checkbox选中回调函数

  }, {
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          direction = _props.direction,
          children = _props.children,
          others = objectWithoutProperties(_props, ['className', 'direction', 'children']);


      children = React__default.Children.map(children, function (child, index) {
        if (!child) {
          return child;
        }

        var _child$props = child.props,
            value = _child$props.value,
            disabled = _child$props.disabled,
            children = _child$props.children;


        value = value !== undefined ? value : '' + children;

        return React__default.cloneElement(child, {
          value: value,
          key: index,
          onChange: _this2.onChangeHandle,
          disabled: disabled || _this2.props.disabled,
          checked: _this2.isPuppet ? _this2.props.value.indexOf(value) !== -1 : _this2.state.value.indexOf(value) !== -1
        });
      });

      delete others.onChange;

      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames(direction === 'row' ? 'checkbox-inline' : 'checkbox-vertical', className)
        }),
        children
      );
    }
  }]);
  return CheckboxGroup;
}(React.PureComponent);

// getValue


CheckboxGroup.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 选中
  value: PropTypes.array,
  // 默认是否选中
  defaultValue: PropTypes.array,
  // 回调函数
  onChange: PropTypes.func,
  // 是否disabled
  disabled: PropTypes.bool,
  // 排列方向
  direction: PropTypes.oneOf(['row', 'column']) };
CheckboxGroup.defaultProps = {
  disabled: false,
  direction: 'row'
};
CheckboxGroup.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
CheckboxGroup.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

/**
 * Col布局组件.
 */
var Col = function Col(_ref) {
  var col = _ref.col,
      offset = _ref.offset,
      push = _ref.push,
      pull = _ref.pull,
      children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['col', 'offset', 'push', 'pull', 'children', 'className']);

  var colClass = 'col-xs-' + col,
      offsetClass = offset ? 'offset-xs-' + offset : null,
      pushClass = push ? 'push-xs-' + push : null,
      pullClass = pull ? 'pull-xs-' + pull : null;

  return React__default.createElement(
    'div',
    _extends({}, others, {
      className: classnames(colClass, offsetClass, pushClass, pullClass, className)
    }),
    children
  );
};

Col.propTypes = {
  // 所占比例
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  push: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * CollapseTitle 组件
 */
var CollapseTitle = function CollapseTitle(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['onClick', 'children', 'className']);

  return React__default.createElement(
    'div',
    _extends({
      onClick: onClick
    }, others, {
      className: classnames('collapse-title', className)
    }),
    children,
    React__default.createElement('i', { className: 'fa fa-angle-right collapse-title-addon' })
  );
};

CollapseTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

/**
 * CollapseBody 组件
 */
var CollapseBody = function CollapseBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  delete others.onClick;

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('collapse-body', className) }),
    children
  );
};

CollapseBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * Collapse 组件
 */

var Collapse = function (_PureComponent) {
  inherits(Collapse, _PureComponent);

  function Collapse(props, context) {
    classCallCheck(this, Collapse);

    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props, context));

    _this.toggleItemsHandle = function () {
      _this.setState({
        active: !_this.state.active
      });
    };

    _this.state = {
      active: props.active
    };
    return _this;
  }
  // props校验

  // 默认props


  createClass(Collapse, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          others = objectWithoutProperties(_props, ['children', 'className']),
          active = this.state.active;


      delete others.active;
      children = React__default.Children.map(children, function (child) {
        if (!child) {
          return child;
        }

        return React__default.cloneElement(child, {
          onClick: _this2.toggleItemsHandle
        });
      });

      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('collapse', { active: active }, className)
        }),
        children
      );
    }
  }]);
  return Collapse;
}(React.PureComponent);

Collapse.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  active: PropTypes.bool };
Collapse.defaultProps = {
  active: false
};


Collapse.Title = CollapseTitle;
Collapse.Body = CollapseBody;

/**
 * Confirm组件.
 */

var Confirm = function (_PureComponent) {
  inherits(Confirm, _PureComponent);

  function Confirm() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.getAddonByType = function (type) {
      switch (type) {
        case 'info':
          return 'fa-question-circle text-primary';
        case 'danger':
          return 'fa-exclamation-circle text-danger';
        default:
          return 'fa-exclamation-circle text-warning';
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // props校验

  // 默认props

  /**
   * 根据类型获取Icon.
   * @return {[String]} [Icon类型]
   */


  createClass(Confirm, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          type = _props.type,
          okText = _props.okText,
          cancelText = _props.cancelText,
          onOkClick = _props.onOkClick,
          onCancelClick = _props.onCancelClick,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['type', 'okText', 'cancelText', 'onOkClick', 'onCancelClick', 'className', 'children']),
          iconTypeClass = this.getAddonByType(type);


      return React__default.createElement(
        'div',
        { className: classnames('confirm', className) },
        React__default.createElement(
          'div',
          _extends({}, others, { className: 'confirm-dialog' }),
          React__default.createElement(
            'div',
            { className: 'confirm-addon' },
            React__default.createElement('i', { className: classnames('fa', iconTypeClass) })
          ),
          React__default.createElement(
            'div',
            { className: 'confirm-body' },
            children
          ),
          React__default.createElement(
            'div',
            { className: 'confirm-footer' },
            React__default.createElement(
              'div',
              { className: 'confirm-btn-sure', onClick: onOkClick },
              okText
            ),
            React__default.createElement(
              'div',
              { className: 'confirm-btn-cancel', onClick: onCancelClick },
              cancelText
            )
          )
        )
      );
    }
  }]);
  return Confirm;
}(React.PureComponent);

Confirm.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 类型
  type: PropTypes.string,
  // 确定按钮
  okText: PropTypes.string,
  // 取消按钮
  cancelText: PropTypes.string,
  // 确定按钮点击
  onOkClick: PropTypes.func,
  // 取消按钮点击
  onCancelClick: PropTypes.func };
Confirm.defaultProps = {
  type: 'warning',
  okText: '确定',
  cancelText: '取消' };

/**
 * Container组件.
 */
var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['children', 'className']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('container', className) }),
    children
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

/**
 * 主内容区 组件.
 */

var Content = function (_PureComponent) {
  inherits(Content, _PureComponent);

  function Content() {
    classCallCheck(this, Content);
    return possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  createClass(Content, [{
    key: 'render',

    // props校验
    value: function render() {
      var _props = this.props,
          notransition = _props.notransition,
          transitionName = _props.transitionName,
          transitionEnterTimeout = _props.transitionEnterTimeout,
          transitionLeaveTimeout = _props.transitionLeaveTimeout,
          component = _props.component,
          className = _props.className,
          children = _props.children;


      children && (children = React__default.cloneElement(children, {
        key: children.props.location.pathname
      }));

      if (notransition) {
        return React__default.createElement(
          'div',
          { className: classnames('content', className) },
          children
        );
      }

      return React__default.createElement(
        'div',
        { className: classnames('content', className) },
        React__default.createElement(
          ReactCSSTransitionGroup,
          {
            component: component,
            transitionName: transitionName,
            transitionEnterTimeout: transitionEnterTimeout,
            transitionLeaveTimeout: transitionLeaveTimeout
          },
          children
        )
      );
    }
    // 默认props

  }]);
  return Content;
}(React.PureComponent);

Content.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  // 是否有动画
  notransition: PropTypes.bool,
  // 动画名称
  transitionName: PropTypes.string,
  // 进入动画时间
  transitionEnterTimeout: PropTypes.number,
  // 退出动画时间
  transitionLeaveTimeout: PropTypes.number,
  // 包裹元素
  component: PropTypes.string,
  // 子元素为单一节点
  children: PropTypes.element.isRequired };
Content.defaultProps = {
  notransition: false,
  transitionName: 'zoom-slide',
  component: 'div',
  transitionEnterTimeout: 1200,
  transitionLeaveTimeout: 900
};

// 时间格式
var FORMAT$1 = {
  YEAR: 'YYYY',
  MONTH: 'MM',
  YEAR_MONTH: 'YYYY-MM',
  DATE: 'YYYY-MM-DD'

  /**
   * 时间组件.
   */
};
var DatePicker = function (_PureComponent) {
  inherits(DatePicker, _PureComponent);

  // 构造函数
  function DatePicker(props, context) {
    classCallCheck(this, DatePicker);

    var _this = possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props, context));

    _initialiseProps$1.call(_this);

    var type = props.type,
        value = props.value,
        minDate = props.minDate,
        maxDate = props.maxDate,
        format = props.format,
        weekdays = _this.getSortWeekdays(),
        currentMoment = value ? moment(value, format) : moment(),
        checkedDay = value ? moment(value, format) : undefined,
        years = _this.getYears(currentMoment),
        state = {
      currentMoment: currentMoment, // 当前时间
      days: [], // 日期选择
      weekdays: weekdays,
      checkedDay: checkedDay, // 选中日期
      years: years // 年份
    };

    switch (type) {
      case 'month':
        state.format = format || FORMAT$1.YEAR_MONTH;
        state.panel = 'month';
        break;
      default:
        state.format = format || FORMAT$1.DATE;
        state.panel = 'day';
        break;
    }

    state.minDate = minDate ? moment(minDate, state.format) : undefined;
    state.maxDate = maxDate ? moment(maxDate, state.format) : undefined;
    _this.state = state;
    return _this;
  }
  // prop type校验

  // 默认props


  createClass(DatePicker, [{
    key: 'getSortWeekdays',

    /**
     * 获取排序后的星期.
     * @return {[Array]} [星期数组]
     */
    value: function getSortWeekdays() {
      var _props = this.props,
          firstDayOfWeek = _props.firstDayOfWeek,
          weekdays = _props.weekdays;


      return firstDayOfWeek === 0 ? weekdays : [].concat(toConsumableArray(weekdays.slice(firstDayOfWeek, weekdays.length)), toConsumableArray(weekdays.slice(0, firstDayOfWeek)));
    }
    /**
     * 获取日期数据.
     * @param  {[Moment]} currentMoment [当前日期]
     */

  }, {
    key: 'getDate',
    value: function getDate(currentMoment) {
      var _state = this.state,
          minDate = _state.minDate,
          maxDate = _state.maxDate,
          firstDayOfWeek = this.props.firstDayOfWeek,
          days = [],
          today = moment().format(FORMAT$1.DATE),
          prevMonth = moment(currentMoment).subtract(1, 'months'),
          nextMonth = moment(currentMoment).add(1, 'months'),
          currentYear = currentMoment.format(FORMAT$1.YEAR),
          currentMonth = currentMoment.format(FORMAT$1.MONTH),
          daysLength = currentMoment.daysInMonth();


      for (var i = 1; i <= daysLength; i++) {
        var dayFormat = currentYear + '-' + currentMonth + '-' + i,
            dayMoment = moment(dayFormat, FORMAT$1.DATE);

        days.push({
          text: i,
          date: dayMoment,
          inMonth: true,
          isToday: dayMoment.isSame(today),
          disable: minDate && dayMoment.isBefore(minDate) || maxDate && dayMoment.isAfter(maxDate)
        });
      }
      // 上个月天数
      var firstDay = moment(currentMoment).date(1).day(),
          prevMonthYear = prevMonth.format(FORMAT$1.YEAR),
          prevMonthMonth = prevMonth.format(FORMAT$1.MONTH),
          prevMonthDaysLength = prevMonth.daysInMonth(),
          prevMonthMax = firstDay - firstDayOfWeek >= 0 ? firstDay - firstDayOfWeek : firstDay - firstDayOfWeek + 7;

      for (var _i = 0; _i <= prevMonthMax - 1; _i++) {
        var _dayFormat = prevMonthYear + '-' + prevMonthMonth + '-' + (prevMonthDaysLength - _i),
            _dayMoment = moment(_dayFormat, FORMAT$1.DATE);

        days.unshift({
          text: prevMonthDaysLength - _i,
          date: _dayMoment,
          isToday: _dayMoment.isSame(today),
          disable: minDate && _dayMoment.isBefore(minDate) || maxDate && _dayMoment.isAfter(maxDate)
        });
      }
      // 下个月天数
      var lastDay = moment(currentMoment).date(daysLength).day(),
          nextMonthYear = nextMonth.format(FORMAT$1.YEAR),
          nextMonthMonth = nextMonth.format(FORMAT$1.MONTH),
          nextMonthMax = lastDay - firstDayOfWeek >= 0 ? 7 - lastDay + firstDayOfWeek : firstDayOfWeek - lastDay;

      for (var _i2 = 1; _i2 < nextMonthMax; _i2++) {
        var _dayFormat2 = nextMonthYear + '-' + nextMonthMonth + '-' + _i2,
            _dayMoment2 = moment(_dayFormat2, FORMAT$1.DATE);

        days.push({
          text: _i2,
          date: _dayMoment2,
          isToday: _dayMoment2.isSame(today),
          disable: minDate && _dayMoment2.isBefore(minDate) || maxDate && _dayMoment2.isAfter(maxDate)
        });
      }

      this.setState({
        days: days,
        currentMoment: currentMoment
      });
    }
    /**
     * 根据当前时间获取年份列表.
     * @param  {[Moment]} currentMoment [当前时间]
     * @return {[Array]}                [年份列表]
     */

  }, {
    key: 'getYears',
    value: function getYears(currentMoment) {
      var yearScope = this.props.yearScope,
          years = [],
          currentYear = currentMoment.year();


      for (var i = currentYear - yearScope; i <= currentYear + yearScope; i++) {
        years.push(i);
      }

      return years;
    }
    /**
     * 上个月.
     */

    /**
     * 下个月.
     */

    /**
     * 上一年.
     */

    /**
     * 下一年.
     */

    /**
     * 选中时间.
     */

    /**
     * 选中年份.
     * @param  {[String]} year [年份]
     */

    /**
     * 选中月份.
     * @param  {[String]} month [月份]
     */

    /**
     * 今天.
     */

    /**
     * 显示年月选择面板.
     */

  }, {
    key: 'componentDidUpdate',

    /**
     * 更正month面板滚动条位置.
     */
    value: function componentDidUpdate() {
      var type = this.props.type,
          _yeargroup = this.refs._yeargroup;


      type === 'date' && _yeargroup && _yeargroup.scrollTop === 0 && this.resetMonthPanelScroll();
    }
    /**
     * 修改month面板的滚动条位置.
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var currentMoment = this.state.currentMoment;


      this.getDate(currentMoment);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          format = this.state.format;


      this.setState({
        checkedDay: value ? moment(value, format) : undefined
      });
    }
    /**
     * 无限获取年份.
     * @param  {[Event]} event [事件]
     */

  }, {
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          panel = _state2.panel,
          currentMoment = _state2.currentMoment,
          weekdays = _state2.weekdays,
          days = _state2.days,
          checkedDay = _state2.checkedDay,
          years = _state2.years,
          _props2 = this.props,
          showToday = _props2.showToday,
          todayText = _props2.todayText,
          months = _props2.months,
          className = _props2.className,
          currentYear = currentMoment.format(FORMAT$1.YEAR),
          currentMonth = currentMoment.format(FORMAT$1.MONTH);


      return React__default.createElement(
        'div',
        {
          className: classnames('datepicker', className),
          onAnimationEnd: this.resetMonthPanelScroll
        },
        React__default.createElement(
          'div',
          { className: 'datepicker-header' },
          React__default.createElement('i', {
            className: 'fa datepicker-header-btn fa-angle-double-left',
            onClick: this.prevYearHandle
          }),
          React__default.createElement('i', {
            className: 'fa datepicker-header-btn fa-angle-left datepicker-month-btn',
            onClick: this.prevMonthHandle
          }),
          React__default.createElement(
            'div',
            {
              className: 'datepicker-caption',
              onClick: this.showMonthPanelHandle
            },
            currentYear,
            '\u5E74',
            currentMonth,
            '\u6708'
          ),
          React__default.createElement('i', {
            className: 'fa datepicker-header-btn fa-angle-right datepicker-month-btn',
            onClick: this.nextMonthHandle
          }),
          React__default.createElement('i', {
            className: 'fa datepicker-header-btn fa-angle-double-right',
            onClick: this.nextYearHandle
          })
        ),
        panel === 'day' && React__default.createElement(
          'div',
          { className: 'datepicker-body' },
          React__default.createElement(
            'div',
            { className: 'datepicker-weekgroup' },
            weekdays.map(function (day) {
              return React__default.createElement(
                'div',
                { key: day, className: 'datepicker-weekgroup-item' },
                day
              );
            })
          ),
          React__default.createElement(
            'div',
            { className: 'datepicker-daygroup' },
            days.map(function (_ref) {
              var text = _ref.text,
                  date = _ref.date,
                  isToday = _ref.isToday,
                  inMonth = _ref.inMonth,
                  disable = _ref.disable;
              return React__default.createElement(
                'div',
                {
                  key: text + '-' + inMonth,
                  onClick: function onClick() {
                    return !disable && _this2.selectDateHandle(date);
                  },
                  className: 'datepicker-daygroup-item'
                },
                React__default.createElement(
                  'div',
                  {
                    className: classnames('datepicker-daygroup-item-text', {
                      disable: disable,
                      now: isToday,
                      'text-muted': !inMonth,
                      active: date.isSame(checkedDay)
                    })
                  },
                  text
                )
              );
            })
          )
        ),
        panel === 'month' && React__default.createElement(
          'div',
          { className: 'datepicker-body' },
          React__default.createElement(
            'div',
            {
              className: 'datepicker-yeargroup',
              ref: '_yeargroup',
              onScroll: this.scrollYearHandle
            },
            years.map(function (year) {
              return React__default.createElement(
                'div',
                {
                  key: year,
                  onClick: function onClick() {
                    return _this2.selectYearHandle(year);
                  },
                  ref: function ref(dom) {
                    return Number(year) === Number(currentYear) && (_this2._activeYear = dom);
                  },
                  className: classnames('datepicker-yeargroup-item', {
                    active: Number(year) === Number(currentYear)
                  })
                },
                year
              );
            })
          ),
          React__default.createElement(
            'div',
            { className: 'datepicker-monthgroup', ref: '_monthgroup' },
            months.map(function (month, index) {
              return React__default.createElement(
                'div',
                {
                  key: month,
                  onClick: function onClick() {
                    return _this2.selectMonthHandle(index);
                  },
                  ref: function ref(dom) {
                    return index === currentMonth - 1 && (_this2._activeMonth = dom);
                  },
                  className: classnames('datepicker-monthgroup-item', {
                    active: index === currentMonth - 1
                  })
                },
                month
              );
            })
          )
        ),
        showToday && panel !== 'month' && React__default.createElement(
          'div',
          { className: 'datepicker-footer' },
          React__default.createElement(
            'a',
            { href: 'javascript:void(0);', onClick: this.selectTodayHandle },
            todayText
          )
        )
      );
    }
  }]);
  return DatePicker;
}(React.PureComponent);

DatePicker.propTypes = {
  // 类型
  type: PropTypes.oneOf(['date', 'month']),
  // 自定义样式
  className: PropTypes.string,
  // 日期
  value: PropTypes.string,
  // 格式
  format: PropTypes.string,
  // 星期
  weekdays: PropTypes.arrayOf(PropTypes.string),
  // 月份
  months: PropTypes.arrayOf(PropTypes.string),
  // 是否显示今天
  showToday: PropTypes.bool,
  // 今天
  todayText: PropTypes.string,
  // 星期第一天
  firstDayOfWeek: PropTypes.number,
  // 最小日期
  minDate: PropTypes.string,
  // 最大日期
  maxDate: PropTypes.string,
  // 年份前后默认范围
  yearScope: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 选中时间
  onSelect: PropTypes.func,
  // 修改选中时间
  onChange: PropTypes.func };
DatePicker.defaultProps = {
  type: 'date',
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  showToday: true,
  todayText: '今天',
  firstDayOfWeek: 0,
  yearScope: 5,
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] };

var _initialiseProps$1 = function _initialiseProps() {
  var _this3 = this;

  this.prevMonthHandle = function () {
    var _state3 = _this3.state,
        currentMoment = _state3.currentMoment,
        panel = _state3.panel;


    _this3.getDate(moment(currentMoment).subtract(1, 'months'));
    panel === 'month' && _this3.resetMonthPanelScroll();
  };

  this.nextMonthHandle = function () {
    var _state4 = _this3.state,
        currentMoment = _state4.currentMoment,
        panel = _state4.panel;


    _this3.getDate(moment(currentMoment).add(1, 'months'));
    panel === 'month' && _this3.resetMonthPanelScroll();
  };

  this.prevYearHandle = function () {
    var _state5 = _this3.state,
        currentMoment = _state5.currentMoment,
        panel = _state5.panel;


    _this3.getDate(moment(currentMoment).subtract(1, 'years'));
    panel === 'month' && _this3.resetMonthPanelScroll();
  };

  this.nextYearHandle = function () {
    var _state6 = _this3.state,
        currentMoment = _state6.currentMoment,
        panel = _state6.panel;


    _this3.getDate(moment(currentMoment).add(1, 'years'));
    panel === 'month' && _this3.resetMonthPanelScroll();
  };

  this.selectDateHandle = function (day) {
    var _props3 = _this3.props,
        onSelect = _props3.onSelect,
        onChange = _props3.onChange,
        _state7 = _this3.state,
        checkedDay = _state7.checkedDay,
        format = _state7.format,
        dayFormat = day.format(format);


    _this3.setState({
      checkedDay: day
    });

    onSelect && onSelect(dayFormat);
    onChange && checkedDay !== day && onChange(dayFormat);
  };

  this.selectYearHandle = function (year) {
    var currentMoment = _this3.state.currentMoment,
        newMoment = moment(currentMoment).year(year);


    _this3.setState({
      checkedDay: undefined,
      currentMoment: newMoment
    });
    _this3.getDate(newMoment);
  };

  this.selectMonthHandle = function (month) {
    var _state8 = _this3.state,
        currentMoment = _state8.currentMoment,
        format = _state8.format,
        _props4 = _this3.props,
        type = _props4.type,
        onSelect = _props4.onSelect,
        onChange = _props4.onChange,
        newMoment = moment(currentMoment).month(month);


    switch (type) {
      case 'month':
        newMoment = newMoment.format(format);
        onSelect && onSelect(newMoment);
        onChange && onChange(newMoment);
        break;
      default:
        _this3.setState({
          panel: 'day',
          checkedDay: undefined,
          currentMoment: newMoment
        });
        _this3.getDate(newMoment);
    }
  };

  this.selectTodayHandle = function () {
    var _props5 = _this3.props,
        onSelect = _props5.onSelect,
        onChange = _props5.onChange,
        minDate = _props5.minDate,
        maxDate = _props5.maxDate,
        _state9 = _this3.state,
        checkedDay = _state9.checkedDay,
        format = _state9.format,
        today = moment(moment().format(FORMAT$1.DATE)),
        dayFormat = today.format(format);


    if (minDate && today.isBefore(minDate) || maxDate && today.isAfter(maxDate)) {
      return;
    }

    _this3.setState({
      checkedDay: today
    });

    onSelect && onSelect(dayFormat);
    onChange && checkedDay !== today && onChange(dayFormat);
  };

  this.showMonthPanelHandle = function () {
    var panel = _this3.state.panel,
        type = _this3.props.type;


    type === 'date' && _this3.setState({
      panel: panel === 'month' ? 'day' : 'month'
    });
  };

  this.resetMonthPanelScroll = function () {
    var _refs = _this3.refs,
        _yeargroup = _refs._yeargroup,
        _monthgroup = _refs._monthgroup;


    if (!_this3._activeYear || !_this3._activeMonth) {
      return true;
    }

    var yearHeight = _this3._activeYear.getBoundingClientRect().height,
        monthHeight = _this3._activeMonth.getBoundingClientRect().height;

    _this3._yeargroupScrollTop = _yeargroup.scrollTop = _this3._activeYear.offsetTop - _yeargroup.offsetTop - yearHeight * 2;
    _monthgroup.scrollTop = _this3._activeMonth.offsetTop - _monthgroup.offsetTop - monthHeight * 2;

    return true;
  };

  this.scrollYearHandle = function (event) {
    if (!_this3._activeYear) {
      return;
    }

    var years = _this3.state.years,
        container = event.target,
        yearHeight = _this3._activeYear.getBoundingClientRect().height,
        point = container.getBoundingClientRect().height + yearHeight;

    // 上滑
    if (_this3._yeargroupScrollTop > container.scrollTop) {
      _this3._yeargroupScrollTop = container.scrollTop;
      if (container.scrollTop < yearHeight) {
        var prevYear = years[0] - 1;

        _this3.setState({
          years: [prevYear].concat(toConsumableArray(years))
        });
        container.scrollTop = container.scrollTop === 0 ? yearHeight : container.scrollTop + yearHeight;
      }
    } else if (_this3._yeargroupScrollTop < container.scrollTop) {
      // 下滑
      _this3._yeargroupScrollTop = container.scrollTop;
      if (container.scrollHeight - container.scrollTop < point) {
        var nextYear = years[years.length - 1] + 1;

        _this3.setState({
          years: [].concat(toConsumableArray(years), [nextYear])
        });
      }
    }
  };
};

/**
 * Dropdown 触发组件.
 */
var DropdownTrigger = function DropdownTrigger(_ref) {
  var trigger = _ref.trigger,
      toggleMenu = _ref.toggleMenu,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['trigger', 'toggleMenu', 'className', 'children']);

  var options = {};

  if (trigger === 'click') {
    options.onClick = toggleMenu;
  }

  children = React__default.cloneElement(children, options, React__default.createElement(
    'span',
    null,
    children.props.children,
    React__default.createElement(Icon, { className: 'dropdown-caret', right: true, type: 'caret-down' })
  ));

  return React__default.createElement(
    'span',
    _extends({}, others, { className: classnames('dropdown-toggle', className) }),
    children
  );
};

DropdownTrigger.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  trigger: PropTypes.oneOf(['click', 'hover']),
  toggleMenu: PropTypes.func
};

/**
 * Dropdown 菜单组件.
 */

var DropdownMenu = function (_PureComponent) {
  inherits(DropdownMenu, _PureComponent);

  function DropdownMenu() {
    classCallCheck(this, DropdownMenu);
    return possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
  }

  createClass(DropdownMenu, [{
    key: 'render',

    // 渲染

    // props类型校验
    value: function render() {
      var _props = this.props,
          toggleMenu = _props.toggleMenu,
          right = _props.right,
          className = _props.className,
          children = _props.children;


      children = React__default.Children.map(children, function (child) {
        if (!child) {
          return child;
        }

        return React__default.cloneElement(child, {
          toggleMenu: toggleMenu
        });
      });

      return React__default.createElement(
        'div',
        { className: 'dropdown-picker' },
        React__default.createElement('div', { className: 'dropdown-gap' }),
        React__default.createElement(
          'ul',
          {
            className: classnames('dropdown-menu', { 'dropdown-menu-right': right }, className)
          },
          children
        )
      );
    }
    // 默认props

  }]);
  return DropdownMenu;
}(React.PureComponent);

DropdownMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  right: PropTypes.bool,
  toggleMenu: PropTypes.func };
DropdownMenu.defaultProps = {
  right: false };

/**
 * Dropdown 菜单项组件.
 */

var DropdownMenuItem = function (_PureComponent) {
  inherits(DropdownMenuItem, _PureComponent);

  function DropdownMenuItem() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DropdownMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DropdownMenuItem.__proto__ || Object.getPrototypeOf(DropdownMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClickHandle = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          toggleMenu = _this$props.toggleMenu;


      !disabled && onClick && onClick();
      toggleMenu();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // props类型校验

  // 默认props

  // 点击回调


  createClass(DropdownMenuItem, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className,
          children = _props.children;


      return React__default.createElement(
        'li',
        {
          onClick: this.onClickHandle,
          className: classnames('dropdown-item', { disabled: disabled }, className)
        },
        children
      );
    }
  }]);
  return DropdownMenuItem;
}(React.PureComponent);

DropdownMenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  toggleMenu: PropTypes.func };
DropdownMenuItem.defaultProps = {
  disabled: false };

/**
 * Dropdown 菜单分割线组件.
 */
var DropdownMenuDivider = function DropdownMenuDivider(_ref) {
  var className = _ref.className;

  return React__default.createElement('li', { className: classnames('dropdown-divider', className) });
};

DropdownMenuDivider.propTypes = {
  className: PropTypes.string
};

/**
 * 判断一个元素是否为另一个的后代元素.
 * @param  {[Element]} ancestor     [祖先元素]
 * @param  {[Element]} descendent   [后代元素]
 * @return {[Boolean]}              [是否]
 */
var isDescendentNode = function isDescendentNode(ancestor, descendent) {
  var parentNode = descendent.parentNode;

  while (parentNode) {
    if (ancestor === parentNode) {
      return true;
    }
    parentNode = parentNode.parentNode;
  }
  return false;
};

/**
 * 初始化.
 */
var init = function init() {
  var bodyClick = document.body.onclick;

  document.body.popLayers = [];
  document.body.onclick = function (event) {
    bodyClick && bodyClick(event);
    // 清空时间弹出层
    document.body.popLayers.forEach(function (component) {
      var componentDom = reactDom.findDOMNode(component);

      // 兼容Chrome、FF、Safari
      if (event.path && event.path.indexOf(componentDom) === -1 || !isDescendentNode(componentDom, event.target)) {
        component.hideOptionsHandle && component.hideOptionsHandle();
      }
    });
  };
};

init();

/**
 * 管理弹出层组件.
 * @param  {[Component]} component  [组件]
 */
var manager = function manager(component) {
  document.body.popLayers.push(component);
};

/**
 * 取消弹出层组件管理.
 * @param  {[Component]} component [组件]
 */
var unmanager = function unmanager(component) {
  document.body.popLayers = document.body.popLayers.filter(function (item) {
    return item !== component;
  });
};

/**
 * Dropdown组件.
 */

var Dropdown = function (_PureComponent) {
  inherits(Dropdown, _PureComponent);

  function Dropdown(props, context) {
    classCallCheck(this, Dropdown);

    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props, context));

    _this.toggleOptionsHandle = function (flag) {
      var active = _this.state.active;


      _this.setState({
        active: typeof flag === 'boolean' ? flag : !active
      });
    };

    _this.hideOptionsHandle = function () {
      _this.setState({
        active: false
      });
    };

    manager(_this);

    _this.state = {
      active: undefined === props.active ? false : props.active
    };
    return _this;
  }
  // prop type校验

  // 默认props

  // 显示/隐藏菜单

  // 隐藏菜单


  createClass(Dropdown, [{
    key: 'componentWillUnmount',

    // 清空组件管理.
    value: function componentWillUnmount() {
      unmanager(this);
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          trigger = _props.trigger,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['trigger', 'className', 'children']),
          active = this.state.active;


      children = React__default.Children.map(children, function (child) {
        if (!child) {
          return child;
        }

        return React__default.cloneElement(child, {
          trigger: trigger,
          toggleMenu: _this2.toggleOptionsHandle
        });
      });

      if (trigger === 'hover') {
        others.onMouseOver = function () {
          return _this2.toggleOptionsHandle(true);
        };
        others.onMouseOut = function () {
          return _this2.toggleOptionsHandle(false);
        };
      }

      delete others.active;

      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('dropdown', { active: active }, className)
        }),
        children
      );
    }
  }]);
  return Dropdown;
}(React.PureComponent);

Dropdown.propTypes = {
  // 是否激活
  active: PropTypes.bool,
  // 触发动作
  trigger: PropTypes.oneOf(['click', 'hover']),
  // 子节点
  children: PropTypes.array.isRequired,
  className: PropTypes.string };
Dropdown.defaultProps = {
  active: false,
  trigger: 'click' };


Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
Dropdown.MenuDivider = DropdownMenuDivider;

/**
 * FlexItem组件.
 */

var FlexItem = function (_PureComponent) {
  inherits(FlexItem, _PureComponent);

  function FlexItem() {
    classCallCheck(this, FlexItem);
    return possibleConstructorReturn(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
  }

  createClass(FlexItem, [{
    key: 'render',

    // 渲染

    // prop type校验
    value: function render() {
      var _props = this.props,
          flex = _props.flex,
          children = _props.children,
          className = _props.className,
          others = objectWithoutProperties(_props, ['flex', 'children', 'className']),
          flexClass = 'flex-item' + (flex > 1 ? '-' + flex : '');


      return React__default.createElement(
        'div',
        _extends({}, others, { className: classnames(flexClass, className) }),
        children
      );
    }
    // 默认props

  }]);
  return FlexItem;
}(React.PureComponent);

FlexItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  flex: PropTypes.number };
FlexItem.defaultProps = {
  flex: 1 };

/**
 * Flex布局组件.
 */

var Flex = function (_PureComponent) {
  inherits(Flex, _PureComponent);

  function Flex() {
    classCallCheck(this, Flex);
    return possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
  }

  createClass(Flex, [{
    key: 'render',

    // 渲染

    // prop type校验
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          others = objectWithoutProperties(_props, ['direction', 'align', 'children', 'className']),
          directionClass = direction === 'row' ? '' : 'flex-vertical',
          alignClass = align ? 'flex-items-' + align : null;


      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('flex', directionClass, alignClass, className)
        }),
        children
      );
    }
    // 默认props

  }]);
  return Flex;
}(React.PureComponent);

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  direction: PropTypes.oneOf(['row', 'column']) };
Flex.defaultProps = {
  direction: 'row' };


Flex.Item = FlexItem;

/**
 * FormGroup 组件.
 */
var FormGroup = function FormGroup(_ref) {
  var col = _ref.col,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['col', 'className', 'children']);

  var colClass = col ? 'col-xs-' + col : null;

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('form-group', colClass, className) }),
    children
  );
};

FormGroup.propTypes = {
  // 所占比例
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any
};

/**
 * FormControlLabel 组件.
 */
var FormControlLabel = function FormControlLabel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['children', 'className']);

  return React__default.createElement(
    'label',
    _extends({}, others, { className: classnames('form-control-label', className) }),
    children
  );
};

FormControlLabel.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any
};

/**
 * FormControl 组件.
 */

var FormControl = function (_PureComponent) {
  inherits(FormControl, _PureComponent);

  function FormControl() {
    classCallCheck(this, FormControl);
    return possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).apply(this, arguments));
  }

  createClass(FormControl, [{
    key: 'render',

    // 渲染
    value: function render() {
      var children = this.props.children,
          _children = children,
          className = _children.className;


      children = React__default.cloneElement(children, {
        className: classnames(className, 'form-control')
      });

      return children;
    }
    // prop type校验

  }]);
  return FormControl;
}(React.PureComponent);

FormControl.propTypes = {
  // 子节点
  children: PropTypes.element.isRequired };


FormControl.Label = FormControlLabel;

/**
 * Form 组件.
 */

var Form = function (_PureComponent) {
  inherits(Form, _PureComponent);

  function Form() {
    classCallCheck(this, Form);
    return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  createClass(Form, [{
    key: 'render',

    // 渲染

    // props校验
    value: function render() {
      var _props = this.props,
          type = _props.type,
          grid = _props.grid,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['type', 'grid', 'className', 'children']),
          typeClass = type ? 'form-' + type : null;


      return React__default.createElement(
        'form',
        _extends({}, others, {
          className: classnames(typeClass, { row: grid }, className)
        }),
        children
      );
    }
    // 默认props

  }]);
  return Form;
}(React.PureComponent);

Form.propTypes = {
  // 排列方向
  type: PropTypes.string,
  // 是否分列
  grid: PropTypes.bool,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any };
Form.defaultProps = {
  type: 'inline',
  grid: false };


Form.Group = FormGroup;
Form.Control = FormControl;

/**
 * Image组件
 */

var Image = function (_PureComponent) {
  inherits(Image, _PureComponent);

  function Image() {
    classCallCheck(this, Image);
    return possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  createClass(Image, [{
    key: 'render',

    // 渲染

    // prop type校验
    value: function render() {
      var _props = this.props,
          fluid = _props.fluid,
          rounded = _props.rounded,
          circle = _props.circle,
          thumbnail = _props.thumbnail,
          className = _props.className,
          others = objectWithoutProperties(_props, ['fluid', 'rounded', 'circle', 'thumbnail', 'className']),
          classes = {
        'img-fluid': fluid,
        'img-rounded': rounded,
        'img-circle': circle,
        'img-thumbnail': thumbnail
      };


      return React__default.createElement('img', _extends({}, others, { className: classnames(classes, className) }));
    }
    // 默认props

  }]);
  return Image;
}(React.PureComponent);

Image.propTypes = {
  // 形状（fluid、rounded、circle、thumbnail）
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  thumbnail: PropTypes.bool,
  className: PropTypes.string };
Image.defaultProps = {
  fluid: false,
  rounded: false,
  circle: false,
  thumbnail: false };

/**
 * InlineSelectOption组件.
 */
var InlineSelectOption = function InlineSelectOption(_ref) {
  var active = _ref.active,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['active', 'className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, {
      className: classnames('inline-select-option', { active: active }, className)
    }),
    children
  );
};

InlineSelectOption.propTypes = {
  // 是否选中
  active: PropTypes.bool,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any
};

/**
 * InlineSelect组件.
 */

var InlineSelect = function (_PureComponent) {
  inherits(InlineSelect, _PureComponent);

  function InlineSelect(props) {
    classCallCheck(this, InlineSelect);

    // 是否木偶组件
    var _this = possibleConstructorReturn(this, (InlineSelect.__proto__ || Object.getPrototypeOf(InlineSelect)).call(this, props));

    _this.isPuppet = props.value !== undefined;

    var initValue = {
      value: _this.isPuppet ? undefined : props.defaultValue
    };

    _this.state = _extends({}, initValue);
    return _this;
  }
  // props 校验


  createClass(InlineSelect, [{
    key: 'getValue',
    value: function getValue() {
      if (this.isPuppet) {
        return this.props.value;
      }

      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!this.isPuppet) this.setState({ value: value });
    }
    /**
     * option选中回调.
     * @param  {[Any]} value       [值]
     * @param  {[String]} text     [名称]
     * @param  {[Number]} index    [索引]
     */

  }, {
    key: 'selectOptionHandle',
    value: function selectOptionHandle(value, text, index) {
      var onChange = this.props.onChange;

      // 木偶组件

      if (this.isPuppet) {
        onChange && onChange(value, text, index);
      } else {
        this.setState({
          value: value
        }, function () {
          onChange && onChange(value, text, index);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['className', 'children']),
          originValue = this.isPuppet ? this.props.value : this.state.value;


      children = React__default.Children.map(children, function (child, index) {
        if (!child) {
          return child;
        }

        var _child$props = child.props,
            value = _child$props.value,
            children = _child$props.children;


        return React__default.cloneElement(child, {
          key: index,
          active: originValue !== undefined && originValue === value,
          onClick: function onClick() {
            return _this2.selectOptionHandle(value, children, index);
          }
        });
      });

      return React__default.createElement(
        'div',
        _extends({}, others, { className: classnames('inline-select', className) }),
        children
      );
    }
  }]);
  return InlineSelect;
}(React.PureComponent);

// getValue


InlineSelect.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // onChange
  onChange: PropTypes.func,
  // value
  value: PropTypes.any,
  // defaultValue
  defaultValue: PropTypes.any
};
InlineSelect.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
InlineSelect.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

InlineSelect.Option = InlineSelectOption;

/**
 * 上传组件.
 */

var Upload = function (_PureComponent) {
  inherits(Upload, _PureComponent);

  // 初始state

  // props校验
  function Upload(props, context) {
    classCallCheck(this, Upload);

    var _this = possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props, context));

    _this.openFileDialogHandle = function () {
      _this.refs.main.click();
    };

    _this.fileChangeHandle = function (event) {
      var onChange = _this.props.onChange;


      _this.setState({
        file: event.target.value
      });

      onChange && onChange(event);
    };

    _this.imagePreviewHandle = function (event) {
      var onChange = _this.props.onChange,
          file = event.target.files[0],
          reader = new FileReader();


      if (file) {
        reader.onload = function (e) {
          _this.setState({
            previewImageUrl: e.currentTarget.result
          });
        };
      }

      reader.readAsDataURL(file);
      onChange && onChange(event);
    };

    _this.state = {
      file: ''
    };
    return _this;
  }
  // 默认props


  createClass(Upload, [{
    key: 'getValue',
    value: function getValue() {
      return this.refs.main.files[0];
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.refs.main.files[0] = value;
    }
    /**
     * 打开文件浏览器对话框.
     */

    /**
     * 设置文件名.
     */

    /**
     * 图片预览处理.
     * @param  {[Event]} event [事件]
     */

  }, {
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          preview = _props.preview,
          message = _props.message,
          src = _props.src,
          btnText = _props.btnText,
          btnStyle = _props.btnStyle,
          placeholder = _props.placeholder,
          className = _props.className,
          children = _props.children,
          onChange = _props.onChange,
          others = objectWithoutProperties(_props, ['preview', 'message', 'src', 'btnText', 'btnStyle', 'placeholder', 'className', 'children', 'onChange']),
          _state = this.state,
          file = _state.file,
          previewImageUrl = _state.previewImageUrl;

      // 预览模式

      if (preview) {
        children && (children = React__default.cloneElement(children, {
          className: classnames('upload-preview-addon', children.props.className)
        }));

        return React__default.createElement(
          'div',
          { className: 'upload-preview', onClick: this.openFileDialogHandle },
          children || React__default.createElement(Icon, { type: 'camera', className: 'upload-preview-addon' }),
          React__default.createElement(
            'span',
            { className: 'upload-preview-text' },
            message
          ),
          React__default.createElement('input', {
            type: 'file',
            ref: 'main',
            onChange: onChange && this.imagePreviewHandle
          }),
          (previewImageUrl || src) && React__default.createElement(
            'div',
            { className: 'upload-preview-img' },
            React__default.createElement('img', { src: previewImageUrl || src })
          )
        );
      }

      // Input type="file"
      return React__default.createElement(
        'div',
        _extends({}, others, {
          className: classnames('input-group', 'input-group-upload', className)
        }),
        React__default.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: placeholder,
          disabled: true,
          value: file
        }),
        React__default.createElement(
          'span',
          { className: 'input-group-btn' },
          React__default.createElement(
            'button',
            {
              type: 'button',
              className: classnames('btn', 'btn-' + btnStyle),
              onClick: this.openFileDialogHandle
            },
            btnText
          )
        ),
        React__default.createElement('input', {
          type: 'file',
          ref: 'main',
          onChange: onChange && this.fileChangeHandle
        })
      );
    }
  }]);
  return Upload;
}(React.PureComponent);

// getValue


Upload.propTypes = {
  className: PropTypes.string,
  btnText: PropTypes.string,
  placeholder: PropTypes.string,
  btnStyle: PropTypes.string,
  preview: PropTypes.bool,
  message: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func };
Upload.defaultProps = {
  btnText: '浏 览',
  btnStyle: 'default',
  placeholder: '请选择要上传的附件',
  preview: false };
Upload.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
Upload.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

/**
 * Input 组件.
 */

var Input = function (_PureComponent) {
  inherits(Input, _PureComponent);

  /**
   * 初始化.
   */
  function Input(props, context) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props, context));

    _this.showOptionHandle = function () {
      var disabled = _this.props.disabled;


      !disabled && _this.setState({
        showOption: true,
        showClear: false
      });
    };

    _this.hideOptionsHandle = function () {
      if (!_this.refMain) {
        return;
      }

      _this.refMain.blur && _this.refMain.blur();
      _this.setState({
        showOption: false,
        showClear: false
      });
    };

    _this.clearInputHandle = function () {
      var disabled = _this.props.disabled;


      if (disabled) {
        return;
      }

      _this.refMain && (_this.refMain.value = '');
    };

    _this.selectOptionsHandle = function (value) {
      _this.refMain && (_this.refMain.value = value);

      _this.setState({
        showOption: false,
        showClear: false
      });
    };

    _this.showClearHandle = function () {
      !_this.props.disabled && _this.refMain && _this.refMain.value && _this.setState({
        showClear: true
      });
    };

    _this.hideClearHandle = function () {
      _this.setState({
        showClear: false
      });
    };

    manager(_this);

    _this.state = {
      showOption: false,
      showClear: false
    };
    return _this;
  }
  // prop type校验

  // 默认props


  createClass(Input, [{
    key: 'getValue',

    // 获取Input value
    value: function getValue() {
      var type = this.props.type;


      switch (type) {
        case 'file':
          return this.refMain.refs.main.files[0];
        default:
          return this.refMain ? this.refMain.value : undefined;
      }
    }
    // 设置Input value

  }, {
    key: 'setValue',
    value: function setValue(value) {
      var type = this.props.type;


      switch (type) {
        case 'file':
          this.refMain.refs.main.files[0] = value;
          break;
        default:
          this.refMain && (this.refMain.value = value);
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refMain.focus();
    }
    // 显示候选项

    // 隐藏候选项.

    // 清空输入框.

    /**
     * 选中候选项.
     * @param  {[String]} value [候选项值]
     */

    // 显示清空按钮.

    // 隐藏清空按钮.

  }, {
    key: 'componentWillUnmount',

    // 清空组件管理.
    value: function componentWillUnmount() {
      unmanager(this);
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          value = _props.value,
          defaultValue = _props.defaultValue,
          disabled = _props.disabled,
          placeholder = _props.placeholder,
          clearable = _props.clearable,
          style = _props.style,
          pill = _props.pill,
          onClick = _props.onClick,
          className = _props.className,
          children = _props.children,
          _onChange = _props.onChange,
          others = objectWithoutProperties(_props, ['type', 'value', 'defaultValue', 'disabled', 'placeholder', 'clearable', 'style', 'pill', 'onClick', 'className', 'children', 'onChange']),
          _state = this.state,
          showOption = _state.showOption,
          showClear = _state.showClear,
          pillClass = pill ? 'input-pill' : null;


      children && (children = React__default.cloneElement(children, {
        className: classnames('input-addon', children.props.className)
      }));

      switch (type) {
        case 'date':
        case 'month':
          return React__default.createElement(
            'div',
            {
              className: classnames('input', className),
              ref: 'container',
              onMouseEnter: this.showClearHandle,
              onMouseLeave: this.hideClearHandle
            },
            React__default.createElement('input', {
              type: 'text',
              ref: function ref(_ref) {
                return _this2.refMain = _ref;
              },
              value: value,
              defaultValue: defaultValue,
              className: classnames('form-control', pillClass, 'input-field', 'input-field-addon'),
              readOnly: true,
              disabled: disabled,
              placeholder: placeholder,
              onChange: function onChange(event) {
                return _onChange && _onChange(event, defaultValue);
              },
              onClick: this.showOptionHandle,
              style: style
            }),
            clearable && showClear && React__default.createElement('i', {
              className: 'fa fa-times input-addon',
              onClick: this.clearInputHandle
            }),
            (!showClear || !clearable) && React__default.createElement('i', {
              className: 'fa fa-calendar input-addon',
              onClick: this.showOptionHandle
            }),
            showOption && React__default.createElement(DatePicker, _extends({}, others, {
              type: type,
              value: this.refMain.value,
              onChange: function onChange(value) {
                return _onChange && _onChange(value);
              },
              onSelect: this.selectOptionsHandle
            }))
          );
        case 'search':
          return React__default.createElement(
            'div',
            { className: classnames('input', className), ref: 'container' },
            React__default.createElement('input', _extends({}, others, {
              type: 'text',
              ref: function ref(_ref2) {
                return _this2.refMain = _ref2;
              },
              value: value,
              className: classnames('form-control', pillClass, 'input-field', 'input-field-addon'),
              readOnly: true,
              onClick: onClick,
              onChange: function onChange(e) {
                return _onChange && _onChange(e.target.value, e);
              },
              disabled: disabled,
              placeholder: placeholder,
              style: style
            })),
            children,
            !children && React__default.createElement('i', { className: 'fa fa-search input-addon', onClick: onClick })
          );
        case 'file':
          return React__default.createElement(Upload, _extends({}, others, {
            ref: function ref(_ref3) {
              return _this2.refMain = _ref3;
            },
            className: className,
            placeholder: placeholder,
            onChange: function onChange(e) {
              return _onChange && _onChange(e.target.files[0], e);
            }
          }));
        case 'textarea':
          return React__default.createElement('textarea', _extends({
            rows: '10',
            ref: function ref(_ref4) {
              return _this2.refMain = _ref4;
            },
            style: style,
            disabled: disabled,
            placeholder: placeholder,
            value: value,
            onChange: function onChange(e) {
              return _onChange && _onChange(e.target.value, e);
            },
            defaultValue: defaultValue
          }, others, {
            className: classnames('form-control', className)
          }));
        default:
          return React__default.createElement(
            'div',
            { className: classnames('input', className), ref: 'container' },
            React__default.createElement('input', _extends({}, others, {
              type: type,
              ref: function ref(_ref5) {
                return _this2.refMain = _ref5;
              },
              value: value,
              defaultValue: defaultValue,
              className: classnames('form-control', pillClass, 'input-field', {
                'input-field-addon': children
              }),
              onChange: function onChange(e) {
                return _onChange && _onChange(e.target.value, e);
              },
              disabled: disabled,
              placeholder: placeholder,
              style: style
            })),
            children
          );
      }
    }
  }]);
  return Input;
}(React.PureComponent);

// getValue


Input.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  // 行内样式
  style: PropTypes.object,
  // 类型
  type: PropTypes.oneOf(['text', 'password', 'file', 'date', 'emaile', 'month', 'search', 'textarea']),
  // 提示
  placeholder: PropTypes.string,
  // 值
  value: PropTypes.any,
  // 默认值
  defaultValue: PropTypes.any,
  // 是否可清除
  clearable: PropTypes.bool,
  // 是否不可选
  disabled: PropTypes.bool,
  // 子元素只能为节点
  children: PropTypes.element,
  // 是否椭圆形
  pill: PropTypes.bool,
  // 点击事件
  onClick: PropTypes.func,
  // onChange
  onChange: PropTypes.func };
Input.defaultProps = {
  type: 'text',
  clearable: true,
  disabled: false };
Input.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
Input.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

/**
 * InputGroupAddon组件.
 */
var InputGroupAddon = function InputGroupAddon(_ref) {
  var pure = _ref.pure,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['pure', 'className', 'children']);

  var pureClass = pure ? 'bg-pure' : null;

  return React__default.createElement(
    'span',
    _extends({}, others, {
      className: classnames('input-group-addon', pureClass, className)
    }),
    children
  );
};

InputGroupAddon.propTypes = {
  pure: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
};

// import InputGroupAddon from '../InputGroupAddon';

/**
 * InputGroup组件.
 */

var InputGroupInput = function (_PureComponent) {
  inherits(InputGroupInput, _PureComponent);

  function InputGroupInput() {
    classCallCheck(this, InputGroupInput);
    return possibleConstructorReturn(this, (InputGroupInput.__proto__ || Object.getPrototypeOf(InputGroupInput)).apply(this, arguments));
  }

  createClass(InputGroupInput, [{
    key: 'getValue',

    // props校验
    value: function getValue() {
      return this.refMain ? this.refMain.value : undefined;
    }
    // 默认props

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.refMain && (this.refMain.value = value);
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          className = _props.className,
          placeholder = _props.placeholder,
          others = objectWithoutProperties(_props, ['type', 'className', 'placeholder']);


      return React__default.createElement('input', _extends({}, others, {
        type: type,
        className: classnames('form-control', className),
        placeholder: placeholder,
        ref: function ref(_ref) {
          return _this2.refMain = _ref;
        }
      }));
    }
  }]);
  return InputGroupInput;
}(React.PureComponent);

// getValue


InputGroupInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string };
InputGroupInput.defaultProps = {
  type: 'text'
};
InputGroupInput.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getVaule();
};

// setValue
InputGroupInput.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

/**
 * InputGroupButton组件.
 */

var InputGroupButton = function (_PureComponent) {
  inherits(InputGroupButton, _PureComponent);

  function InputGroupButton() {
    classCallCheck(this, InputGroupButton);
    return possibleConstructorReturn(this, (InputGroupButton.__proto__ || Object.getPrototypeOf(InputGroupButton)).apply(this, arguments));
  }

  createClass(InputGroupButton, [{
    key: 'render',

    // 渲染

    // props校验
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['theme', 'className', 'children']);


      return React__default.createElement(
        'span',
        _extends({}, others, { className: 'input-group-btn' }),
        React__default.createElement(
          Button,
          { theme: theme, className: classnames(className) },
          children
        )
      );
    }
    // 默认props

  }]);
  return InputGroupButton;
}(React.PureComponent);

InputGroupButton.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any };
InputGroupButton.defaultProps = {
  theme: 'primary' };

/**
 * InputGroup组件.
 */
var InputGroup = function InputGroup(_ref) {
  var size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['size', 'className', 'children']);

  var sizeClass = size ? 'input-group-' + size : null;

  return React__default.createElement(
    'div',
    _extends({}, others, {
      className: classnames('input-group', sizeClass, className)
    }),
    children
  );
};

InputGroup.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  children: PropTypes.any
};
InputGroup.Addon = InputGroupAddon;
InputGroup.Input = InputGroupInput;
InputGroup.Button = InputGroupButton;

/**
 * ListGroupItem 组件
 */

var ListGroupItem = function (_PureComponent) {
  inherits(ListGroupItem, _PureComponent);

  // 构造函数
  function ListGroupItem(props, context) {
    classCallCheck(this, ListGroupItem);

    var _this = possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).call(this, props, context));

    _this.state = {
      Tag: props.href ? 'a' : 'li'
    };
    return _this;
  }
  // props校验


  createClass(ListGroupItem, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          href = _props.href,
          disabled = _props.disabled,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          others = objectWithoutProperties(_props, ['href', 'disabled', 'active', 'children', 'className']),
          Tag = this.state.Tag,
          disabledStyle = disabled ? 'disabled' : null,
          activeStyle = active ? 'active' : null,
          actionStyle = href ? 'list-group-item-action' : null;


      return React__default.createElement(
        Tag,
        _extends({}, others, {
          href: href,
          className: classnames('list-group-item', activeStyle, disabledStyle, actionStyle, className)
        }),
        children
      );
    }
  }]);
  return ListGroupItem;
}(React.PureComponent);

ListGroupItem.propTypes = {
  href: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  header: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any };

/**
 * ListGroup组件.
 */
var ListGroup = function ListGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'ul',
    _extends({}, others, { className: classnames('list-group', className) }),
    children
  );
};

ListGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
ListGroup.Item = ListGroupItem;

/**
 * LoadingAddon组件.
 */

var LoadingAddon = function (_PureComponent) {
  inherits(LoadingAddon, _PureComponent);

  /**
   * 初始信息.
   */
  function LoadingAddon(props, context) {
    classCallCheck(this, LoadingAddon);

    var _this = possibleConstructorReturn(this, (LoadingAddon.__proto__ || Object.getPrototypeOf(LoadingAddon)).call(this, props, context));

    _this.state = {
      dottedCount: 0
    };
    return _this;
  }
  // props校验

  // 默认props


  createClass(LoadingAddon, [{
    key: 'getLoadingAddon',

    /**
     * 根据类型获取loading的addon.
     * @return {Html} [addon片段]
     */
    value: function getLoadingAddon() {
      var type = this.props.type;


      switch (type) {
        case 'pendule':
          // 摆钟
          return React__default.createElement(
            'div',
            { className: classnames('loading-addon') },
            React__default.createElement('div', null),
            React__default.createElement('div', null)
          );
        case 'cyclone':
          // 旋风
          return React__default.createElement('div', { className: classnames('loading-addon') });
        default:
          // 喷泉、波纹
          return React__default.createElement(
            'div',
            { className: classnames('loading-addon') },
            React__default.createElement('div', null)
          );
      }
    }
    /**
     * 获取点点数量.
     * @return {String} [点点]
     */

  }, {
    key: 'getDotted',
    value: function getDotted() {
      var dottedCount = this.state.dottedCount,
          result = [];


      for (var i = 0; i < dottedCount; i++) {
        result[i] = '.';
      }

      return result.join('');
    }
    /**
     * 设置定时器.
     */

  }, {
    key: 'setDottedInterval',
    value: function setDottedInterval() {
      var _this2 = this;

      var dottedCount = this.state.dottedCount;


      this.interval = setInterval(function () {
        dottedCount += 1;
        dottedCount > 3 && (dottedCount = 0);

        _this2.setState({
          dottedCount: dottedCount
        });
      }, 600);
    }
    /**
     * 清空定时器.
     */

  }, {
    key: 'clearDottedInterval',
    value: function clearDottedInterval() {
      clearInterval(this.interval);
    }
    /**
     * 清除定时器.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearDottedInterval();
    }
    /**
     * 根据props添加或清空定时器.
     * @param  {Object} nextprops [新props]
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      !nextprops.show && this.clearDottedInterval();
      !this.props.show && nextprops.show && this.setDottedInterval();
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          loadingMsg = _props.loadingMsg,
          className = _props.className,
          others = objectWithoutProperties(_props, ['type', 'loadingMsg', 'className']),
          typeClass = 'loading-' + type,
          loadingAddon = this.getLoadingAddon(),
          dotted = this.getDotted();


      delete others.show;

      return React__default.createElement(
        'div',
        _extends({}, others, { className: classnames('loading', typeClass, className) }),
        loadingAddon,
        React__default.createElement(
          'div',
          { className: 'loading-message' },
          loadingMsg,
          React__default.createElement(
            'span',
            { className: 'loading-message-dotted' },
            dotted
          )
        )
      );
    }
  }]);
  return LoadingAddon;
}(React.PureComponent);

LoadingAddon.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  // 类型
  type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
  // 信息提示
  loadingMsg: PropTypes.string,
  // 显示
  show: PropTypes.bool };
LoadingAddon.defaultProps = {
  type: 'cyclone',
  loadingMsg: '加载中',
  show: false };

var _loading = void 0,
    _startDate = void 0,
    _endDate = void 0,
    _duration = 1000;

/**
 * Loading组件.
 */

var Loading = function (_PureComponent) {
  inherits(Loading, _PureComponent);

  /**
   * 初始信息.
   */
  function Loading(props, context) {
    classCallCheck(this, Loading);

    var _this = possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props, context));

    _this.hideHandle = function () {
      var closeable = _this.props.closeable;


      closeable && _this.setState({
        show: false
      });
    };

    _loading = _this;

    props.duration && (_duration = props.duration);
    _this.state = {
      show: false
    };
    return _this;
  }
  // props校验

  // 默认props

  /**
   * 关闭loading.
   */


  createClass(Loading, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          type = _props.type,
          loadingMsg = _props.loadingMsg,
          className = _props.className,
          show = this.state.show;


      return React__default.createElement(
        'div',
        {
          className: classnames('loading-mask', { invisible: !show }, className),
          onClick: this.hideHandle
        },
        React__default.createElement(LoadingAddon, { type: type, show: show, loadingMsg: loadingMsg })
      );
    }
  }]);
  return Loading;
}(React.PureComponent);

Loading.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  // 类型
  type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
  // 加载文本
  loadingMsg: PropTypes.string,
  // 可关闭
  closeable: PropTypes.bool,
  // 停留时间
  duration: PropTypes.number };
Loading.defaultProps = {
  type: 'cyclone',
  closeable: false,
  loadingMsg: '加载中' };


Loading.Addon = LoadingAddon;
Loading.show = function () {
  _startDate = new Date();
  _loading.setState({
    show: true
  });
};

Loading.hide = function () {
  _endDate = new Date();
  if (_endDate - _startDate < _duration) {
    setTimeout(function () {
      _loading.setState({
        show: false
      });
    }, _duration - (_endDate - _startDate));

    return;
  }

  _loading.setState({
    show: false
  });
};

// Message组件引用
var _message = void 0,
    _timers = [];

/**
 * Message组件.
 */

var Message = function (_Component) {
  inherits(Message, _Component);

  function Message(props, context) {
    classCallCheck(this, Message);

    var _this = possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props, context));

    _message = _this;

    _this.state = {
      show: props.show || false,
      message: null,
      theme: props.theme
    };
    return _this;
  }
  // prop type校验

  // 默认props


  createClass(Message, [{
    key: 'componentWillUnmount',

    /**
     * 移除定时器.
     */
    value: function componentWillUnmount() {
      _timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
    }
    /**
     * 获取信息图标.
     * @return {[type]} [description]
     */

  }, {
    key: 'getTitleIcon',
    value: function getTitleIcon() {
      var theme = this.state.theme;


      return {
        info: ['fa', 'fa-volume-up'],
        success: ['fa', 'fa-check-circle'],
        warning: ['fa', 'fa-exclamation-triangle'],
        danger: ['fa', 'fa-times-circle'],
        loading: ['message-loading']
      }[theme];
    }
    /**
     * [获取主题样式]
     * @return {[String]} [主题样式类名]
     */

  }, {
    key: 'getStyleClass',
    value: function getStyleClass() {
      var theme = this.state.theme;


      return {
        info: 'message-primary',
        warning: 'message-warning',
        success: 'message-success',
        danger: 'message-danger',
        loading: 'message-primary'
      }[theme];
    }
    /**
     * 渲染.
     */

  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className,
          _state = this.state,
          message = _state.message,
          show = _state.show,
          themeClass = this.getStyleClass(),
          iconClass = this.getTitleIcon();


      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          ReactCSSTransitionGroup,
          {
            component: 'div',
            transitionName: 'message',
            transitionEnterTimeout: 240,
            transitionLeaveTimeout: 360
          },
          show && React__default.createElement(
            'div',
            { className: classnames('message', themeClass, className) },
            React__default.createElement(
              'div',
              { className: 'message-header' },
              React__default.createElement('i', { className: classnames(iconClass) })
            ),
            React__default.createElement(
              'div',
              { className: 'message-body' },
              message
            )
          )
        )
      );
    }
  }]);
  return Message;
}(React.Component);

// 隐藏消息


Message.propTypes = {
  className: PropTypes.string,
  // 是否显示
  show: PropTypes.bool,
  // 类型
  theme: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'loading']) };
Message.defaultProps = {
  theme: 'info' };
var hideMessage = function hideMessage(duration) {
  _timers.push(setTimeout(function () {
    _message.setState({
      show: false
    });
  }, duration));
};

// 显示消息
var showMessage = function showMessage(theme, message) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

  // 清空隐藏消息定时器
  _timers.forEach(function (timer) {
    return clearTimeout(timer);
  });
  _timers = [];

  _message.setState({
    show: true,
    theme: theme,
    message: message,
    duration: duration
  });

  // 隐藏消息
  duration > 0 && hideMessage(duration);
};

// 显示info信息
Message.info = function (message, duration) {
  showMessage('info', message, duration);
};

// 显示info信息
Message.success = function (message, duration) {
  showMessage('success', message, duration);
};

// 显示warning信息
Message.warning = function (message, duration) {
  showMessage('warning', message, duration);
};

// 显示error信息
Message.error = function (message, duration) {
  showMessage('danger', message, duration);
};

// 显示loading信息
Message.loading = function (message) {
  showMessage('loading', message, 0);
};

// 隐藏信息
Message.hideMessage = function () {
  hideMessage(0);
};

/**
 * MessageItem组件.
 */

var MessageItem = function (_PureComponent) {
  inherits(MessageItem, _PureComponent);

  function MessageItem() {
    classCallCheck(this, MessageItem);
    return possibleConstructorReturn(this, (MessageItem.__proto__ || Object.getPrototypeOf(MessageItem)).apply(this, arguments));
  }

  createClass(MessageItem, [{
    key: 'render',

    /**
     * 渲染.
     */
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return React__default.createElement(
        'div',
        { className: classnames('message-item', className) },
        React__default.createElement(
          'div',
          { className: 'message-item-title' },
          React__default.createElement('i', { className: classnames(['fa', 'fa-check-circle']) })
        ),
        React__default.createElement(
          'div',
          { className: 'message-item-body' },
          children
        )
      );
    }
    // prop type校验

  }]);
  return MessageItem;
}(React.PureComponent);

MessageItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string };

/**
 * ModalHeader组件.
 */
var ModalHeader = function ModalHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('modal-header', className) }),
    children
  );
};

ModalHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * ModalBody组件.
 */
var ModalBody = function ModalBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('modal-body', className) }),
    children
  );
};

ModalBody.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string
};

/**
 * ModalFooter组件.
 */
var ModalFooter = function ModalFooter(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('modal-footer', className) }),
    children
  );
};

ModalFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

/**
 * Modal组件.
 */
var Modal = function Modal(_ref) {
  var size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['size', 'className', 'children']);

  var sizeClass = size ? 'modal-' + size : null;

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('modal', className) }),
    React__default.createElement(
      'div',
      { className: classnames('modal-dialog', sizeClass) },
      React__default.createElement(
        'div',
        { className: 'modal-content slideInDown' },
        children
      )
    )
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 大小
  size: PropTypes.string
};
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

/**
 * NavItem 组件
 */

var NavItem = function (_PureComponent) {
  inherits(NavItem, _PureComponent);

  function NavItem() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NavItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NavItem.__proto__ || Object.getPrototypeOf(NavItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClickHandle = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          active = _this$props.active,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey;


      !disabled && !active && onClick(eventKey);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // props校验

  // 默认props

  // 回调函数


  createClass(NavItem, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          active = _props.active,
          eventKey = _props.eventKey,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['disabled', 'active', 'eventKey', 'className', 'children']),
          childClass = {
        disabled: disabled,
        active: active
      };


      return eventKey !== undefined ? React__default.createElement(
        'li',
        _extends({}, others, {
          className: classnames('nav-item', className),
          onClick: this.onClickHandle
        }),
        React__default.createElement(
          'span',
          { className: classnames('nav-link', childClass) },
          children
        )
      ) : React__default.createElement(
        'div',
        _extends({}, others, { className: classnames('nav-item', className) }),
        children
      );
    }
  }]);
  return NavItem;
}(React.PureComponent);

NavItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  eventKey: PropTypes.any,
  onClick: PropTypes.func };
NavItem.defaultProps = {
  disabled: false,
  active: false };

// props校验
var propTypes$1 = {
  className: PropTypes.string,
  children: PropTypes.any

  /**
   * NavLink 组件
   */
};var NavLink = function NavLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['children', 'className']);

  if (!children) {
    return children;
  }

  var childrenProps = {
    className: classnames('nav-link', children.props.className)
  };

  if (children.type && ['a', 'span', 'div'].indexOf(children.type) === -1) {
    childrenProps.activeClassName = 'active';
  }

  children = React__default.cloneElement(children, childrenProps);

  return React__default.createElement(
    'li',
    _extends({}, others, { className: classnames('nav-item', className) }),
    children
  );
};

NavLink.propTypes = propTypes$1;

/**
 * NavTitle 组件
 */
var NavTitle = function NavTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['children', 'className']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('nav-title', className) }),
    children
  );
};

NavTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

// 返回type映射的class
var getTypeClassMap = function getTypeClassMap(type) {
  var map = {
    tab: 'nav-tabs',
    pill: 'nav-pills',
    inline: 'nav-inline',
    'inline-bordered': 'nav-inline nav-inline-bordered'
  };

  return map[type] ? map[type] : type;
};

/**
 * Nav 组件
 */

var Nav = function (_PureComponent) {
  inherits(Nav, _PureComponent);

  // 构造函数
  function Nav(props, context) {
    classCallCheck(this, Nav);

    var _this = possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props, context));

    _this.onSelectHandle = function (eventKey) {
      var activeKey = _this.state.activeKey,
          onSelect = _this.props.onSelect;


      if (activeKey === eventKey) {
        return false;
      }
      _this.setState({ activeKey: eventKey });
      onSelect && onSelect(eventKey);

      return true;
    };

    _this.state = {
      activeKey: _this.props.activeKey
    };
    return _this;
  }
  // props校验

  // 默认props

  // 选中回调


  createClass(Nav, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          stacked = _props.stacked,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['type', 'stacked', 'className', 'children']),
          activeKey = this.state.activeKey,
          navStacked = stacked && type === 'pill' ? 'nav-stacked' : null,
          navStyle = getTypeClassMap(type);


      delete others.activeKey;
      type && (children = React__default.Children.map(children, function (child, index) {
        if (!child) {
          return child;
        }

        var eventKey = child.props.eventKey,
            options = {
          key: index,
          onClick: _this2.onSelectHandle
        };


        if (eventKey !== undefined) {
          options.eventKey = eventKey;
          options.active = eventKey === activeKey;
        }

        return React__default.cloneElement(child, options);
      }));

      return React__default.createElement(
        'ul',
        _extends({}, others, {
          className: classnames('nav', navStacked, navStyle, className)
        }),
        children
      );
    }
  }]);
  return Nav;
}(React.PureComponent);

Nav.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
  stacked: PropTypes.bool,
  activeKey: PropTypes.any,
  onSelect: PropTypes.func };
Nav.defaultProps = {
  stacked: false };


Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Title = NavTitle;

/**
 * NavbarBrand 组件
 */
var NavbarBrand = function NavbarBrand(_ref) {
  var href = _ref.href,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['href', 'className', 'children']);

  return React__default.createElement(
    'a',
    _extends({}, others, {
      className: classnames('navbar-brand', className),
      href: href || '#'
    }),
    children
  );
};

NavbarBrand.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};

/**
 * Navbar 组件
 */
var NavbarButton = function NavbarButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    Button,
    _extends({}, others, { className: classnames('navbar-btn', className) }),
    children
  );
};

NavbarButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

// props校验
var propTypes$2 = {
  className: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.string

  /**
   * Navbar 组件
   */
};var Navbar = function Navbar(_ref) {
  var theme = _ref.theme,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['theme', 'className', 'children']);

  var themeClass = theme ? 'navbar-' + theme : undefined;

  return React__default.createElement(
    'nav',
    _extends({}, others, { className: classnames('navbar', themeClass, className) }),
    children
  );
};

Navbar.propTypes = propTypes$2;
Navbar.Brand = NavbarBrand;
Navbar.Button = NavbarButton;

/**
 * Notice组件.
 */

var Notice = function (_PureComponent) {
  inherits(Notice, _PureComponent);

  function Notice() {
    classCallCheck(this, Notice);
    return possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).apply(this, arguments));
  }

  createClass(Notice, [{
    key: 'getTitleIcon',

    /**
     * 获取信息图标.
     * @return {[type]} [description]
     */

    // prop type校验
    value: function getTitleIcon() {
      var theme = this.props.theme;


      return {
        info: ['fa', 'fa-volume-up'],
        success: ['fa', 'fa-check-circle'],
        warning: ['fa', 'fa-exclamation-triangle'],
        danger: ['fa', 'fa-times-circle']
      }[theme];
    }
    /**
     * 渲染.
     */

    // 默认props

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          message = _props.message,
          theme = _props.theme,
          closeable = _props.closeable,
          close = _props.close,
          children = _props.children,
          className = _props.className,
          themeClass = 'notice-' + theme,
          iconClass = this.getTitleIcon();


      return React__default.createElement(
        'div',
        { className: classnames('notice', themeClass, className) },
        React__default.createElement(
          'div',
          { className: 'notice-header' },
          React__default.createElement('i', { className: classnames(iconClass) })
        ),
        React__default.createElement(
          'div',
          { className: 'notice-body' },
          React__default.createElement(
            'div',
            { className: 'notice-title' },
            title,
            closeable && React__default.createElement(
              'button',
              { type: 'button', className: 'close', onClick: close },
              '\xD7'
            )
          ),
          React__default.createElement(
            'div',
            { className: 'notice-content' },
            message || children
          )
        )
      );
    }
  }]);
  return Notice;
}(React.PureComponent);

Notice.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  // 类型
  theme: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  // 标题
  title: PropTypes.string,
  // 内容
  message: PropTypes.string,
  // 关闭
  close: PropTypes.func,
  // 是否可关闭
  closeable: PropTypes.bool };
Notice.defaultProps = {
  theme: 'info',
  title: '通知' };

// Notification组件引用
var _notification = void 0;

/**
 * 通知容器.
 */

var Notification = function (_Component) {
  inherits(Notification, _Component);

  /**
   * 初始化信息.
   * @param  {[type]} props   [description]
   * @param  {[type]} context [description]
   */
  function Notification(props, context) {
    classCallCheck(this, Notification);

    var _this = possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props, context));

    _this.removeNotice = function (key) {
      delete _this.state[key];
      _this.setState(_this.state);
    };

    _this.state = {};
    _this.key = 0;
    _this.timers = [];
    _notification = _this;
    return _this;
  }
  // prop type校验

  // 默认props


  createClass(Notification, [{
    key: 'componentWillUnmount',

    /**
     * 移除定时器.
     */
    value: function componentWillUnmount() {
      this.timers.forEach(function (timer) {
        clearTimeout(timer);
      });
    }
    /**
     * 添加通知.
     * @param {[String]} options.title    [标题]
     * @param {[String]} options.message  [内容]
     * @param {Number}   options.duration [延时]
     */

  }, {
    key: 'addNotice',
    value: function addNotice(_ref, theme) {
      var title = _ref.title,
          message = _ref.message,
          _ref$duration = _ref.duration,
          duration = _ref$duration === undefined ? 2000 : _ref$duration,
          _ref$closeable = _ref.closeable,
          closeable = _ref$closeable === undefined ? this.props.closeable : _ref$closeable;

      var key = this.key++,
          state = _extends({}, this.state);

      state[key] = {
        title: title,
        message: message,
        theme: theme,
        closeable: closeable
      };
      this.setState(state);
      this.timeToRemoveNotice(key, duration);
    }
    /**
     * 移除通知.
     * @param  {[Number]} key      [索引]
     */

  }, {
    key: 'timeToRemoveNotice',

    /**
     * 移除通知.
     * @param  {[Number]} key      [索引]
     * @param  {[Number]} duration [延时]
     */
    value: function timeToRemoveNotice(key, duration) {
      var _this2 = this;

      this.timers.push(setTimeout(function () {
        _this2.removeNotice(key);
      }, duration));
    }
    /**
     * 渲染.
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = this.props.className;


      return React__default.createElement(
        'div',
        { className: classnames('notification', className) },
        React__default.createElement(
          ReactCSSTransitionGroup,
          {
            component: 'div',
            transitionName: 'notice',
            transitionEnterTimeout: 200,
            transitionLeaveTimeout: 800
          },
          Object.keys(this.state).map(function (key) {
            return React__default.createElement(
              Notice,
              {
                key: key,
                theme: _this3.state[key].theme,
                closeable: _this3.state[key].closeable,
                title: _this3.state[key].title,
                close: function close() {
                  return _this3.removeNotice(key);
                }
              },
              _this3.state[key].message
            );
          })
        )
      );
    }
  }]);
  return Notification;
}(React.Component);

// 添加一条info消息


Notification.propTypes = {
  className: PropTypes.string,
  // 是否可关闭
  closeable: PropTypes.bool };
Notification.defaultProps = {
  closeable: true };
Notification.info = function (options) {
  _notification.addNotice(options, 'info');
};

// 添加一条success消息
Notification.success = function (options) {
  _notification.addNotice(options, 'success');
};

// 添加一条warning消息
Notification.warning = function (options) {
  _notification.addNotice(options, 'warning');
};

// 添加一条danger消息
Notification.error = function (options) {
  _notification.addNotice(options, 'danger');
};

/**
 * Pagination组件.
 */

var Pagination = function (_PureComponent) {
  inherits(Pagination, _PureComponent);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.prevPageHandle = function () {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          activePage = _this$props.activePage;


      activePage -= 1;
      activePage >= 1 && onSelect && onSelect(activePage);
    }, _this.nextPageHandle = function () {
      var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          activePage = _this$props2.activePage,
          _this$props2$totalPag = _this$props2.totalPage,
          totalPage = _this$props2$totalPag === undefined ? 1 : _this$props2$totalPag;


      activePage += 1;
      activePage <= totalPage && onSelect && onSelect(activePage);
    }, _this.goPageHandle = function (page) {
      var onSelect = _this.props.onSelect;


      onSelect && onSelect(page);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // 默认props

  // props校验

  // 上一页

  // 下一页

  // 跳转至某页


  createClass(Pagination, [{
    key: 'getShowPageArray',

    // 获取显示页码
    value: function getShowPageArray() {
      var _props = this.props,
          scope = _props.scope,
          _props$totalPage = _props.totalPage,
          totalPage = _props$totalPage === undefined ? 1 : _props$totalPage,
          activePage = _props.activePage,
          result = [];


      scope = scope < 0 ? 2 : scope;
      for (var i = activePage - scope; i <= activePage + scope; i++) {
        if (i > 0 && i <= totalPage) {
          i === activePage - scope && i === 2 && result.push(1);
          result.push(i);
          i === activePage + scope && i === totalPage - 1 && result.push(totalPage);
        }
      }

      return result;
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          _props2$totalPage = _props2.totalPage,
          totalPage = _props2$totalPage === undefined ? 1 : _props2$totalPage,
          className = _props2.className,
          ellipsis = _props2.ellipsis,
          activePage = _props2.activePage,
          others = objectWithoutProperties(_props2, ['totalPage', 'className', 'ellipsis', 'activePage']),
          children = this.getShowPageArray();


      return React__default.createElement(
        'ul',
        _extends({}, others, { className: classnames('Pagination', className) }),
        React__default.createElement(
          'li',
          { className: classnames('page-item', { disabled: activePage <= 1 }) },
          React__default.createElement(
            'a',
            {
              className: 'page-link',
              href: 'javascript:void(0);',
              onClick: this.prevPageHandle
            },
            React__default.createElement('i', { className: 'fa fa-angle-left' })
          )
        ),
        ellipsis && children[0] > 1 && React__default.createElement(
          'li',
          { className: 'page-item disabled' },
          React__default.createElement('i', { className: 'fa fa-ellipsis-h' })
        ),
        children.map(function (child) {
          return React__default.createElement(
            'li',
            {
              key: child,
              className: classnames('page-item', {
                active: child === activePage
              })
            },
            React__default.createElement(
              'a',
              {
                className: 'page-link',
                href: 'javascript:void(0);',
                onClick: function onClick() {
                  return _this2.goPageHandle(child);
                }
              },
              child
            )
          );
        }),
        ellipsis && children[children.length - 1] < totalPage && React__default.createElement(
          'li',
          { className: 'page-item disabled' },
          React__default.createElement('i', { className: 'fa fa-ellipsis-h' })
        ),
        React__default.createElement(
          'li',
          {
            className: classnames('page-item', {
              disabled: activePage >= totalPage
            })
          },
          React__default.createElement(
            'a',
            {
              className: 'page-link',
              href: 'javascript:void(0);',
              onClick: this.nextPageHandle
            },
            React__default.createElement('i', { className: 'fa fa-angle-right' })
          )
        )
      );
    }
  }]);
  return Pagination;
}(React.PureComponent);

Pagination.defaultProps = {
  activePage: 1,
  scope: 2,
  ellipsis: true,
  totalPage: 1 };
Pagination.propTypes = {
  // 前后延伸
  scope: PropTypes.number,
  // 当前在第几页
  activePage: PropTypes.number,
  // 总页数
  totalPage: PropTypes.number.isRequired,
  // 是否显示省略号
  ellipsis: PropTypes.bool,
  // onSelect
  onSelect: PropTypes.func,
  // 自定义样式
  className: PropTypes.string };

/**
 * Popover组件.
 */

var Popover = function (_PureComponent) {
  inherits(Popover, _PureComponent);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.onMouseOver = function (event) {
      var rect = event.target.getBoundingClientRect();

      _this.createPopover(rect);
    }, _this.onMouseOut = function () {
      document.body.removeChild(_this.popover);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // prop type校验

  // 默认props


  createClass(Popover, [{
    key: 'createPopover',

    // 创建popover
    value: function createPopover(targetRect) {
      var _props = this.props,
          position = _props.position,
          title = _props.title,
          content = _props.content,
          positionClass = 'popover-' + position,
          popoverNode = document.createElement('div'),
          arrowNode = document.createElement('div'),
          titleNode = document.createElement('div'),
          contentNode = document.createElement('div');


      popoverNode.className = 'popover ' + positionClass;
      arrowNode.className = 'popover-arrow';
      titleNode.className = 'popover-title';
      contentNode.className = 'popover-content';

      titleNode.innerHTML = title;
      contentNode.innerHTML = content;
      popoverNode.appendChild(arrowNode);
      popoverNode.appendChild(titleNode);
      popoverNode.appendChild(contentNode);

      document.body.appendChild(popoverNode);
      var popoverRect = popoverNode.getBoundingClientRect();

      // 计算left、top
      switch (position) {
        case 'top':
          popoverNode.style.top = targetRect.top - popoverRect.height + 'px';
          popoverNode.style.left = targetRect.left - (popoverRect.width - targetRect.width) / 2 + 'px';
          break;
        case 'left':
          popoverNode.style.left = targetRect.left - popoverRect.width + 'px';
          popoverNode.style.top = targetRect.top + (targetRect.height - popoverRect.height) / 2 + 'px';
          break;
        case 'right':
          popoverNode.style.left = targetRect.left + targetRect.width + 'px';
          popoverNode.style.top = targetRect.top + (targetRect.height - popoverRect.height) / 2 + 'px';
          break;
        default:
          popoverNode.style.top = targetRect.top + targetRect.height + 'px';
          popoverNode.style.left = targetRect.left - (popoverRect.width - targetRect.width) / 2 + 'px';
          break;
      }

      this.popover = popoverNode;
    }
    // 显示popover

    // 移除popover

  }, {
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var children = this.props.children,
          _children$props = children.props,
          onMouseOver = _children$props.onMouseOver,
          onMouseOut = _children$props.onMouseOut;


      children = React__default.cloneElement(children, {
        onMouseOver: onMouseOver ? function (event) {
          onMouseOver();
          _this2.onMouseOver(event);
        } : this.onMouseOver,
        onMouseOut: onMouseOut ? function (event) {
          onMouseOut();
          _this2.onMouseOut(event);
        } : this.onMouseOut
      });

      return children;
    }
  }]);
  return Popover;
}(React.PureComponent);

Popover.propTypes = {
  // 显示位置
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  // 标题
  title: PropTypes.node,
  // 内容
  content: PropTypes.node,
  // 子节点
  children: PropTypes.element.isRequired };
Popover.defaultProps = {
  position: 'right' };

/**
 * 进度条组件.
 */

var Progress = function (_PureComponent) {
  inherits(Progress, _PureComponent);

  function Progress() {
    classCallCheck(this, Progress);
    return possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  createClass(Progress, [{
    key: 'render',

    // 渲染

    // prop type校验
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          striped = _props.striped,
          value = _props.value,
          max = _props.max,
          className = _props.className,
          others = objectWithoutProperties(_props, ['theme', 'striped', 'value', 'max', 'className']),
          themeClass = theme ? 'progress-' + theme : '',
          stripedClass = striped ? 'progress-striped' : '';


      return React__default.createElement('progress', _extends({}, others, {
        value: value,
        max: max,
        className: classnames('progress', themeClass, stripedClass, className)
      }));
    }
    // 默认props

  }]);
  return Progress;
}(React.PureComponent);

Progress.propTypes = {
  className: PropTypes.string,
  // 样式
  theme: PropTypes.string,
  // 斑马线
  striped: PropTypes.bool,
  // 值
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // 最大值
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };
Progress.defaultProps = {
  max: 100,
  striped: false };

/**
 * Radio组件.
 */

var Radio = function (_PureComponent) {
  inherits(Radio, _PureComponent);

  function Radio() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Radio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeHandle = function (event, value) {
      var onChange = _this.props.onChange;


      onChange && onChange(event, value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // props校验

  // 默认props


  createClass(Radio, [{
    key: 'getValue',
    value: function getValue() {
      var value = this.props.value,
          main = this.refs.main; // dom节点

      if (value === undefined) {
        return main.checked;
      }

      return value;
    }
  }, {
    key: 'setValue',
    value: function setValue(checked) {
      var main = this.refs.main;


      main.checked = !!checked;
    }
  }, {
    key: 'render',


    // 渲染
    value: function render() {
      var _props = this.props,
          value = _props.value,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          disabled = _props.disabled,
          className = _props.className,
          name = _props.name,
          _onChange = _props.onChange,
          children = _props.children,
          others = objectWithoutProperties(_props, ['value', 'checked', 'defaultChecked', 'disabled', 'className', 'name', 'onChange', 'children']);


      return React__default.createElement(
        'label',
        _extends({}, others, {
          className: classnames('radio', className),
          htmlFor: 'radio' + this._reactInternalInstance._mountOrder
        }),
        React__default.createElement('input', {
          ref: 'main',
          type: 'radio',
          name: name,
          checked: checked,
          defaultChecked: defaultChecked,
          disabled: disabled,
          onChange: function onChange(event) {
            return _onChange && _onChange(event, value);
          },
          id: 'radio' + this._reactInternalInstance._mountOrder
        }),
        React__default.createElement(
          'div',
          { className: 'radio-addon' },
          React__default.createElement('i', null)
        ),
        React__default.createElement(
          'span',
          { className: 'radio-label' },
          children
        )
      );
    }
  }]);
  return Radio;
}(React.PureComponent);

// getValue


Radio.propTypes = {
  // 名称
  name: PropTypes.any,
  // 返回值
  value: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 是否选中
  checked: PropTypes.bool,
  // 默认是否选中
  defaultChecked: PropTypes.bool,
  // 是否disabled
  disabled: PropTypes.bool,
  // 回调函数
  onChange: PropTypes.func,
  children: PropTypes.any };
Radio.defaultProps = {
  disabled: false
};
Radio.getValue = function (ref) {
  if (!ref) return undefined;
  return ref.getValue();
};

// setValue
Radio.setValue = function (ref, checked) {
  if (!ref) return;

  ref.setValue(checked);
};

/**
 * RadioGroup组件.
 */

var RadioGroup = function (_PureComponent) {
  inherits(RadioGroup, _PureComponent);

  // 初始化state
  function RadioGroup(props) {
    classCallCheck(this, RadioGroup);

    // 是否木偶组件
    var _this = possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _this.onChangeHandle = function (event, value) {
      var onChange = _this.props.onChange;


      if (_this.isPuppet) {
        onChange && onChange(value, event);
      } else {
        _this.setState({
          value: value
        }, function () {
          onChange && onChange(value, event);
        });
      }
    };

    _this.isPuppet = props.value !== undefined;

    var initValue = {
      value: _this.isPuppet ? undefined : props.defaultValue
    };

    _this.state = _extends({}, initValue);
    return _this;
  }
  // props校验

  // 默认props


  createClass(RadioGroup, [{
    key: 'getValue',
    value: function getValue() {
      return this.isPuppet ? this.props.value : this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!this.isPuppet) this.setState({ value: value });
    }
    // radio切换回调函数

  }, {
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          name = _props.name,
          direction = _props.direction,
          children = _props.children,
          others = objectWithoutProperties(_props, ['className', 'name', 'direction', 'children']),
          originValue = this.isPuppet ? this.props.value : this.state.value,
          directionClass = direction === 'row' ? 'radio-inline' : 'radio-vertical';


      children = React__default.Children.map(children, function (child, index) {
        if (!child) {
          return child;
        }

        var _child$props = child.props,
            value = _child$props.value,
            disabled = _child$props.disabled,
            options = {
          name: name || 'radio_' + _this2._reactInternalInstance._mountOrder,
          key: index,
          onChange: _this2.onChangeHandle,
          disabled: disabled || _this2.props.disabled

          // 是否选中
        };
        if (value !== undefined || originValue !== undefined) {
          options.checked = originValue === value;
        }

        return React__default.cloneElement(child, options);
      });

      delete others.onChange;

      return React__default.createElement(
        'div',
        _extends({}, others, { className: classnames(directionClass, className) }),
        children
      );
    }
  }]);
  return RadioGroup;
}(React.PureComponent);

// getValue


RadioGroup.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  // 值
  value: PropTypes.any,
  // 默认是否选中
  defaultValue: PropTypes.any,
  // 回调函数
  onChange: PropTypes.func,
  // 是否disabled
  disabled: PropTypes.bool,
  // 名称
  name: PropTypes.string,
  // 排列方向
  direction: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.any };
RadioGroup.defaultProps = {
  disabled: false,
  direction: 'row'
};
RadioGroup.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
RadioGroup.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

/**
 * Row组件.
 */

var Row = function (_PureComponent) {
  inherits(Row, _PureComponent);

  function Row() {
    classCallCheck(this, Row);
    return possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  createClass(Row, [{
    key: 'getChildren',

    /**
     * 自动计算col属性.
     * @return {[Array]} [子元素]
     */
    value: function getChildren() {
      var children = this.props.children,
          count = 0,
          allocation = 0;


      React__default.Children.forEach(children, function (child) {
        if (!child) {
          return;
        }

        if (child.props.hasOwnProperty('col')) {
          count += Number.parseInt(child.props.col, 10);
        } else {
          allocation += 1; // 校验
        }
      });

      var surplus = 12 - count;

      return React__default.Children.map(children, function (child, index) {
        if (!child) {
          return child;
        }

        var col = child.props.col;


        return React__default.cloneElement(child, {
          key: index,
          col: col || Number.parseInt(surplus / allocation, 10)
        });
      });
    }
    // 渲染

    // props校验

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['className', 'children']);


      children = this.getChildren();
      return React__default.createElement(
        'div',
        _extends({}, others, { className: classnames('row', className) }),
        children
      );
    }
  }]);
  return Row;
}(React.PureComponent);

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any };

/**
 * Option组件.
 */

var Option = function (_PureComponent) {
  inherits(Option, _PureComponent);

  function Option() {
    classCallCheck(this, Option);
    return possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  createClass(Option, [{
    key: 'render',

    // 渲染

    // prop type校验
    value: function render() {
      var _props = this.props,
          active = _props.active,
          disabled = _props.disabled,
          onClick = _props.onClick,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['active', 'disabled', 'onClick', 'className', 'children']);


      return React__default.createElement(
        'li',
        _extends({}, others, {
          className: classnames('select-option', { active: active, disabled: disabled }, className),
          onClick: onClick
        }),
        children
      );
    }
    // 默认props

  }]);
  return Option;
}(React.PureComponent);

Option.propTypes = {
  // 是否不可用
  disabled: PropTypes.bool,
  // 自定义样式
  className: PropTypes.string,
  // 是否选中
  active: PropTypes.bool,
  // value
  value: PropTypes.any.isRequired,
  // 回调
  onClick: PropTypes.func,
  children: PropTypes.any };
Option.defaultProps = {
  disabled: false,
  active: false };

/**
 * Select组件.
 */

var Select = function (_PureComponent) {
  inherits(Select, _PureComponent);

  // 初始state
  function Select(props, context) {
    classCallCheck(this, Select);

    var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props, context));

    _this.toggleOptionsHandle = function () {
      !_this.props.disabled && _this.setState({
        showOption: !_this.state.showOption
      });
    };

    _this.hideOptionsHandle = function () {
      return _this.setState({ showOption: false });
    };

    manager(_this);

    // 是否木偶组件
    _this.isPuppet = props.value !== undefined;

    // 子组件数据
    _this.options = [];

    var initValue = {
      showOption: false,
      value: _this.isPuppet ? undefined : props.defaultValue
    };

    _this.state = _extends({}, initValue);
    return _this;
  }
  // prop type校验

  // 默认props


  createClass(Select, [{
    key: 'getValue',
    value: function getValue() {
      return this.isPuppet ? this.props.value : this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var main = this.refs.main;


      if (!this.isPuppet) {
        main.value = null;
        this.options.forEach(function (option) {
          if (value === option.value) main.value = option.name;
        });

        this.setState({
          value: value
        });
      }
    }
    // focus  没调用？

  }, {
    key: 'focus',
    value: function focus() {
      this.refs.main.focus();
    }
    // 显示/隐藏菜单

    // 隐藏菜单

  }, {
    key: 'selectOptionHandle',


    /**
     * option选中回调.
     * @param  {[String]} newValue [值]
     * @param  {[String]} text     [文本显示]
     * @param  {[Number]} index    [索引]
     */
    value: function selectOptionHandle(newValue, text, index) {
      var onChange = this.props.onChange,
          main = this.refs.main,
          value = this.isPuppet ? this.props.value : this.state.value;

      // 木偶组件
      if (!this.isPuppet) {
        this.setState({
          value: newValue
        }, function () {
          onChange && newValue !== value && onChange(newValue, text, index);
          main.value = text;
        });
      } else {
        onChange && newValue !== value && onChange(newValue, text, index);
      }

      this.setState({
        showOption: false
      });
    }
    /**
     * 清空组件管理.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      unmanager(this);
    }
    // 渲染

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          style = _props.style,
          className = _props.className,
          children = _props.children,
          showOption = this.state.showOption,
          originValue = this.isPuppet ? this.props.value : this.state.value,
          text = void 0;


      this.options = []; // this问题

      children = React__default.Children.map(children, function (child, index) {
        if (!child) {
          return child;
        } // ? child ?

        var _child$props = child.props,
            value = _child$props.value,
            children = _child$props.children,
            disabled = _child$props.disabled;


        _this2.options.push({
          name: children,
          value: value
        });
        value === originValue && (text = children);
        value === originValue && !disabled && _this2.refs.main && (_this2.refs.main.value = children);
        return React__default.cloneElement(child, {
          key: index,
          active: value === originValue,
          onClick: function onClick() {
            return !disabled && _this2.selectOptionHandle(value, children, index);
          }
        });
      });

      return React__default.createElement(
        'div',
        {
          style: style,
          className: classnames('select', { disabled: disabled }, { open: showOption }, className),
          disabled: disabled
        },
        React__default.createElement('input', {
          type: 'text',
          defaultValue: text,
          readOnly: true,
          ref: 'main',
          placeholder: placeholder,
          disabled: disabled,
          className: classnames('form-control', 'select-selection'),
          onClick: this.toggleOptionsHandle
        }),
        React__default.createElement('i', {
          className: 'fa fa-angle-down select-addon',
          onClick: this.toggleOptionsHandle
        }),
        React__default.createElement(
          'ul',
          { className: 'select-options' },
          children
        )
      );
    }
  }]);
  return Select;
}(React.PureComponent);

// getValue


Select.propTypes = {
  // 值
  value: PropTypes.any,
  // 默认值
  defaultValue: PropTypes.any,
  // 是否不可用
  disabled: PropTypes.bool,
  // style
  style: PropTypes.object,
  // 自定义样式
  className: PropTypes.string,
  // placeholder
  placeholder: PropTypes.string,
  // onChange
  onChange: PropTypes.func,
  children: PropTypes.any };
Select.defaultProps = {
  disabled: false,
  placeholder: '请选择'
};
Select.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
Select.setValue = function (ref, value) {
  if (!ref) return;

  ref.setValue(value);
};

Select.Option = Option;

// props校验
var propTypes$3 = {
  img: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any

  /**
   * Sidebar 顶部组件
   */
};var SidebarHeader = function SidebarHeader(_ref) {
  var img = _ref.img,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['img', 'className', 'children']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('sidebar-header', className) }),
    img && React__default.createElement('img', { src: img }),
    children
  );
};

SidebarHeader.propTypes = propTypes$3;

function oldAdd(element, className) {
  var classes = element.className.split(' ');
  if (classes.indexOf(className) < 0) {
    classes.push(className);
  }
  element.className = classes.join(' ');
}

function oldRemove(element, className) {
  var classes = element.className.split(' ');
  var idx = classes.indexOf(className);
  if (idx >= 0) {
    classes.splice(idx, 1);
  }
  element.className = classes.join(' ');
}

var add = function (element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    oldAdd(element, className);
  }
};

var remove = function (element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    oldRemove(element, className);
  }
};

var list = function (element) {
  if (element.classList) {
    return Array.prototype.slice.apply(element.classList);
  } else {
    return element.className.split(' ');
  }
};

var _class = {
  add: add,
  remove: remove,
  list: list
};

var DOM = {};

DOM.e = function (tagName, className) {
  var element = document.createElement(tagName);
  element.className = className;
  return element;
};

DOM.appendTo = function (child, parent) {
  parent.appendChild(child);
  return child;
};

function cssGet(element, styleName) {
  return window.getComputedStyle(element)[styleName];
}

function cssSet(element, styleName, styleValue) {
  if (typeof styleValue === 'number') {
    styleValue = styleValue.toString() + 'px';
  }
  element.style[styleName] = styleValue;
  return element;
}

function cssMultiSet(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val.toString() + 'px';
    }
    element.style[key] = val;
  }
  return element;
}

DOM.css = function (element, styleNameOrObject, styleValue) {
  if (typeof styleNameOrObject === 'object') {
    // multiple set with object
    return cssMultiSet(element, styleNameOrObject);
  } else {
    if (typeof styleValue === 'undefined') {
      return cssGet(element, styleNameOrObject);
    } else {
      return cssSet(element, styleNameOrObject, styleValue);
    }
  }
};

DOM.matches = function (element, query) {
  if (typeof element.matches !== 'undefined') {
    return element.matches(query);
  } else {
    if (typeof element.matchesSelector !== 'undefined') {
      return element.matchesSelector(query);
    } else if (typeof element.webkitMatchesSelector !== 'undefined') {
      return element.webkitMatchesSelector(query);
    } else if (typeof element.mozMatchesSelector !== 'undefined') {
      return element.mozMatchesSelector(query);
    } else if (typeof element.msMatchesSelector !== 'undefined') {
      return element.msMatchesSelector(query);
    }
  }
};

DOM.remove = function (element) {
  if (typeof element.remove !== 'undefined') {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
};

DOM.queryChildren = function (element, selector) {
  return Array.prototype.filter.call(element.childNodes, function (child) {
    return DOM.matches(child, selector);
  });
};

var dom = DOM;

var helper = createCommonjsModule(function (module, exports) {

  var toInt = exports.toInt = function (x) {
    return parseInt(x, 10) || 0;
  };

  var clone = exports.clone = function (obj) {
    if (!obj) {
      return null;
    } else if (obj.constructor === Array) {
      return obj.map(clone);
    } else if (typeof obj === 'object') {
      var result = {};
      for (var key in obj) {
        result[key] = clone(obj[key]);
      }
      return result;
    } else {
      return obj;
    }
  };

  exports.extend = function (original, source) {
    var result = clone(original);
    for (var key in source) {
      result[key] = clone(source[key]);
    }
    return result;
  };

  exports.isEditable = function (el) {
    return dom.matches(el, "input,[contenteditable]") || dom.matches(el, "select,[contenteditable]") || dom.matches(el, "textarea,[contenteditable]") || dom.matches(el, "button,[contenteditable]");
  };

  exports.removePsClasses = function (element) {
    var clsList = _class.list(element);
    for (var i = 0; i < clsList.length; i++) {
      var className = clsList[i];
      if (className.indexOf('ps-') === 0) {
        _class.remove(element, className);
      }
    }
  };

  exports.outerWidth = function (element) {
    return toInt(dom.css(element, 'width')) + toInt(dom.css(element, 'paddingLeft')) + toInt(dom.css(element, 'paddingRight')) + toInt(dom.css(element, 'borderLeftWidth')) + toInt(dom.css(element, 'borderRightWidth'));
  };

  exports.startScrolling = function (element, axis) {
    _class.add(element, 'ps-in-scrolling');
    if (typeof axis !== 'undefined') {
      _class.add(element, 'ps-' + axis);
    } else {
      _class.add(element, 'ps-x');
      _class.add(element, 'ps-y');
    }
  };

  exports.stopScrolling = function (element, axis) {
    _class.remove(element, 'ps-in-scrolling');
    if (typeof axis !== 'undefined') {
      _class.remove(element, 'ps-' + axis);
    } else {
      _class.remove(element, 'ps-x');
      _class.remove(element, 'ps-y');
    }
  };

  exports.env = {
    isWebKit: 'WebkitAppearance' in document.documentElement.style,
    supportsTouch: 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    supportsIePointer: window.navigator.msMaxTouchPoints !== null
  };
});
var helper_1 = helper.toInt;
var helper_2 = helper.clone;
var helper_3 = helper.extend;
var helper_4 = helper.isEditable;
var helper_5 = helper.removePsClasses;
var helper_6 = helper.outerWidth;
var helper_7 = helper.startScrolling;
var helper_8 = helper.stopScrolling;
var helper_9 = helper.env;

var defaultSetting = {
  handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipePropagation: true,
  useBothWheelAxes: false,
  wheelPropagation: false,
  wheelSpeed: 1,
  theme: 'default'
};

var EventElement = function (element) {
  this.element = element;
  this.events = {};
};

EventElement.prototype.bind = function (eventName, handler) {
  if (typeof this.events[eventName] === 'undefined') {
    this.events[eventName] = [];
  }
  this.events[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function (eventName, handler) {
  var isHandlerProvided = typeof handler !== 'undefined';
  this.events[eventName] = this.events[eventName].filter(function (hdlr) {
    if (isHandlerProvided && hdlr !== handler) {
      return true;
    }
    this.element.removeEventListener(eventName, hdlr, false);
    return false;
  }, this);
};

EventElement.prototype.unbindAll = function () {
  for (var name in this.events) {
    this.unbind(name);
  }
};

var EventManager = function () {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function (element) {
  var ee = this.eventElements.filter(function (eventElement) {
    return eventElement.element === element;
  })[0];
  if (typeof ee === 'undefined') {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function (element, eventName, handler) {
  this.eventElement(element).unbind(eventName, handler);
};

EventManager.prototype.unbindAll = function () {
  for (var i = 0; i < this.eventElements.length; i++) {
    this.eventElements[i].unbindAll();
  }
};

EventManager.prototype.once = function (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (e) {
    ee.unbind(eventName, onceHandler);
    handler(e);
  };
  ee.bind(eventName, onceHandler);
};

var eventManager = EventManager;

var guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();

var instances = {};

function Instance(element) {
  var i = this;

  i.settings = helper.clone(defaultSetting);
  i.containerWidth = null;
  i.containerHeight = null;
  i.contentWidth = null;
  i.contentHeight = null;

  i.isRtl = dom.css(element, 'direction') === "rtl";
  i.isNegativeScroll = function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  }();
  i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  i.event = new eventManager();
  i.ownerDocument = element.ownerDocument || document;

  function focus() {
    _class.add(element, 'ps-focus');
  }

  function blur() {
    _class.remove(element, 'ps-focus');
  }

  i.scrollbarXRail = dom.appendTo(dom.e('div', 'ps-scrollbar-x-rail'), element);
  i.scrollbarX = dom.appendTo(dom.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);
  i.scrollbarX.setAttribute('tabindex', 0);
  i.event.bind(i.scrollbarX, 'focus', focus);
  i.event.bind(i.scrollbarX, 'blur', blur);
  i.scrollbarXActive = null;
  i.scrollbarXWidth = null;
  i.scrollbarXLeft = null;
  i.scrollbarXBottom = helper.toInt(dom.css(i.scrollbarXRail, 'bottom'));
  i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom; // !isNaN
  i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : helper.toInt(dom.css(i.scrollbarXRail, 'top'));
  i.railBorderXWidth = helper.toInt(dom.css(i.scrollbarXRail, 'borderLeftWidth')) + helper.toInt(dom.css(i.scrollbarXRail, 'borderRightWidth'));
  // Set rail to display:block to calculate margins
  dom.css(i.scrollbarXRail, 'display', 'block');
  i.railXMarginWidth = helper.toInt(dom.css(i.scrollbarXRail, 'marginLeft')) + helper.toInt(dom.css(i.scrollbarXRail, 'marginRight'));
  dom.css(i.scrollbarXRail, 'display', '');
  i.railXWidth = null;
  i.railXRatio = null;

  i.scrollbarYRail = dom.appendTo(dom.e('div', 'ps-scrollbar-y-rail'), element);
  i.scrollbarY = dom.appendTo(dom.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
  i.scrollbarY.setAttribute('tabindex', 0);
  i.event.bind(i.scrollbarY, 'focus', focus);
  i.event.bind(i.scrollbarY, 'blur', blur);
  i.scrollbarYActive = null;
  i.scrollbarYHeight = null;
  i.scrollbarYTop = null;
  i.scrollbarYRight = helper.toInt(dom.css(i.scrollbarYRail, 'right'));
  i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight; // !isNaN
  i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : helper.toInt(dom.css(i.scrollbarYRail, 'left'));
  i.scrollbarYOuterWidth = i.isRtl ? helper.outerWidth(i.scrollbarY) : null;
  i.railBorderYWidth = helper.toInt(dom.css(i.scrollbarYRail, 'borderTopWidth')) + helper.toInt(dom.css(i.scrollbarYRail, 'borderBottomWidth'));
  dom.css(i.scrollbarYRail, 'display', 'block');
  i.railYMarginHeight = helper.toInt(dom.css(i.scrollbarYRail, 'marginTop')) + helper.toInt(dom.css(i.scrollbarYRail, 'marginBottom'));
  dom.css(i.scrollbarYRail, 'display', '');
  i.railYHeight = null;
  i.railYRatio = null;
}

function getId(element) {
  return element.getAttribute('data-ps-id');
}

function setId(element, id) {
  element.setAttribute('data-ps-id', id);
}

function removeId(element) {
  element.removeAttribute('data-ps-id');
}

var add$1 = function (element) {
  var newId = guid();
  setId(element, newId);
  instances[newId] = new Instance(element);
  return instances[newId];
};

var remove$1 = function (element) {
  delete instances[getId(element)];
  removeId(element);
};

var get$1 = function (element) {
  return instances[getId(element)];
};

var instances_1 = {
  add: add$1,
  remove: remove$1,
  get: get$1
};

var destroy = function (element) {
  var i = instances_1.get(element);

  if (!i) {
    return;
  }

  i.event.unbindAll();
  dom.remove(i.scrollbarX);
  dom.remove(i.scrollbarY);
  dom.remove(i.scrollbarXRail);
  dom.remove(i.scrollbarYRail);
  helper.removePsClasses(element);

  instances_1.remove(element);
};

var lastTop;
var lastLeft;

var createDOMEvent = function (name) {
  var event = document.createEvent("Event");
  event.initEvent(name, true, true);
  return event;
};

var updateScroll = function (element, axis, value) {
  if (typeof element === 'undefined') {
    throw 'You must provide an element to the update-scroll function';
  }

  if (typeof axis === 'undefined') {
    throw 'You must provide an axis to the update-scroll function';
  }

  if (typeof value === 'undefined') {
    throw 'You must provide a value to the update-scroll function';
  }

  if (axis === 'top' && value <= 0) {
    element.scrollTop = value = 0; // don't allow negative scroll
    element.dispatchEvent(createDOMEvent('ps-y-reach-start'));
  }

  if (axis === 'left' && value <= 0) {
    element.scrollLeft = value = 0; // don't allow negative scroll
    element.dispatchEvent(createDOMEvent('ps-x-reach-start'));
  }

  var i = instances_1.get(element);

  if (axis === 'top' && value >= i.contentHeight - i.containerHeight) {
    // don't allow scroll past container
    value = i.contentHeight - i.containerHeight;
    if (value - element.scrollTop <= 1) {
      // mitigates rounding errors on non-subpixel scroll values
      value = element.scrollTop;
    } else {
      element.scrollTop = value;
    }
    element.dispatchEvent(createDOMEvent('ps-y-reach-end'));
  }

  if (axis === 'left' && value >= i.contentWidth - i.containerWidth) {
    // don't allow scroll past container
    value = i.contentWidth - i.containerWidth;
    if (value - element.scrollLeft <= 1) {
      // mitigates rounding errors on non-subpixel scroll values
      value = element.scrollLeft;
    } else {
      element.scrollLeft = value;
    }
    element.dispatchEvent(createDOMEvent('ps-x-reach-end'));
  }

  if (!lastTop) {
    lastTop = element.scrollTop;
  }

  if (!lastLeft) {
    lastLeft = element.scrollLeft;
  }

  if (axis === 'top' && value < lastTop) {
    element.dispatchEvent(createDOMEvent('ps-scroll-up'));
  }

  if (axis === 'top' && value > lastTop) {
    element.dispatchEvent(createDOMEvent('ps-scroll-down'));
  }

  if (axis === 'left' && value < lastLeft) {
    element.dispatchEvent(createDOMEvent('ps-scroll-left'));
  }

  if (axis === 'left' && value > lastLeft) {
    element.dispatchEvent(createDOMEvent('ps-scroll-right'));
  }

  if (axis === 'top') {
    element.scrollTop = lastTop = value;
    element.dispatchEvent(createDOMEvent('ps-scroll-y'));
  }

  if (axis === 'left') {
    element.scrollLeft = lastLeft = value;
    element.dispatchEvent(createDOMEvent('ps-scroll-x'));
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + element.scrollTop;
  }
  dom.css(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: element.scrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  dom.css(i.scrollbarYRail, yRailOffset);

  dom.css(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth });
  dom.css(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth });
}

var updateGeometry = function (element) {
  var i = instances_1.get(element);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  var existingRails;
  if (!element.contains(i.scrollbarXRail)) {
    existingRails = dom.queryChildren(element, '.ps-scrollbar-x-rail');
    if (existingRails.length > 0) {
      existingRails.forEach(function (rail) {
        dom.remove(rail);
      });
    }
    dom.appendTo(i.scrollbarXRail, element);
  }
  if (!element.contains(i.scrollbarYRail)) {
    existingRails = dom.queryChildren(element, '.ps-scrollbar-y-rail');
    if (existingRails.length > 0) {
      existingRails.forEach(function (rail) {
        dom.remove(rail);
      });
    }
    dom.appendTo(i.scrollbarYRail, element);
  }

  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, helper.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = helper.toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }

  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, helper.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = helper.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    _class.add(element, 'ps-active-x');
  } else {
    _class.remove(element, 'ps-active-x');
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    updateScroll(element, 'left', 0);
  }
  if (i.scrollbarYActive) {
    _class.add(element, 'ps-active-y');
  } else {
    _class.remove(element, 'ps-active-y');
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    updateScroll(element, 'top', 0);
  }
};

function bindClickRailHandler(element, i) {
  function pageOffset(el) {
    return el.getBoundingClientRect();
  }
  var stopPropagation = function (e) {
    e.stopPropagation();
  };

  i.event.bind(i.scrollbarY, 'click', stopPropagation);
  i.event.bind(i.scrollbarYRail, 'click', function (e) {
    var positionTop = e.pageY - window.pageYOffset - pageOffset(i.scrollbarYRail).top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    updateScroll(element, 'top', element.scrollTop + direction * i.containerHeight);
    updateGeometry(element);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'click', stopPropagation);
  i.event.bind(i.scrollbarXRail, 'click', function (e) {
    var positionLeft = e.pageX - window.pageXOffset - pageOffset(i.scrollbarXRail).left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    updateScroll(element, 'left', element.scrollLeft + direction * i.containerWidth);
    updateGeometry(element);

    e.stopPropagation();
  });
}

var clickRail = function (element) {
  var i = instances_1.get(element);
  bindClickRailHandler(element, i);
};

function bindMouseScrollXHandler(element, i) {
  var currentLeft = null;
  var currentPageX = null;

  function updateScrollLeft(deltaX) {
    var newLeft = currentLeft + deltaX * i.railXRatio;
    var maxLeft = Math.max(0, i.scrollbarXRail.getBoundingClientRect().left) + i.railXRatio * (i.railXWidth - i.scrollbarXWidth);

    if (newLeft < 0) {
      i.scrollbarXLeft = 0;
    } else if (newLeft > maxLeft) {
      i.scrollbarXLeft = maxLeft;
    } else {
      i.scrollbarXLeft = newLeft;
    }

    var scrollLeft = helper.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - i.railXRatio * i.scrollbarXWidth)) - i.negativeScrollAdjustment;
    updateScroll(element, 'left', scrollLeft);
  }

  var mouseMoveHandler = function (e) {
    updateScrollLeft(e.pageX - currentPageX);
    updateGeometry(element);
    e.stopPropagation();
    e.preventDefault();
  };

  var mouseUpHandler = function () {
    helper.stopScrolling(element, 'x');
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  };

  i.event.bind(i.scrollbarX, 'mousedown', function (e) {
    currentPageX = e.pageX;
    currentLeft = helper.toInt(dom.css(i.scrollbarX, 'left')) * i.railXRatio;
    helper.startScrolling(element, 'x');

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

function bindMouseScrollYHandler(element, i) {
  var currentTop = null;
  var currentPageY = null;

  function updateScrollTop(deltaY) {
    var newTop = currentTop + deltaY * i.railYRatio;
    var maxTop = Math.max(0, i.scrollbarYRail.getBoundingClientRect().top) + i.railYRatio * (i.railYHeight - i.scrollbarYHeight);

    if (newTop < 0) {
      i.scrollbarYTop = 0;
    } else if (newTop > maxTop) {
      i.scrollbarYTop = maxTop;
    } else {
      i.scrollbarYTop = newTop;
    }

    var scrollTop = helper.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - i.railYRatio * i.scrollbarYHeight));
    updateScroll(element, 'top', scrollTop);
  }

  var mouseMoveHandler = function (e) {
    updateScrollTop(e.pageY - currentPageY);
    updateGeometry(element);
    e.stopPropagation();
    e.preventDefault();
  };

  var mouseUpHandler = function () {
    helper.stopScrolling(element, 'y');
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  };

  i.event.bind(i.scrollbarY, 'mousedown', function (e) {
    currentPageY = e.pageY;
    currentTop = helper.toInt(dom.css(i.scrollbarY, 'top')) * i.railYRatio;
    helper.startScrolling(element, 'y');

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

var dragScrollbar = function (element) {
  var i = instances_1.get(element);
  bindMouseScrollXHandler(element, i);
  bindMouseScrollYHandler(element, i);
};

function bindKeyboardHandler(element, i) {
  var hovered = false;
  i.event.bind(element, 'mouseenter', function () {
    hovered = true;
  });
  i.event.bind(element, 'mouseleave', function () {
    hovered = false;
  });

  var shouldPrevent = false;
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
      return;
    }

    var focused = dom.matches(i.scrollbarX, ':focus') || dom.matches(i.scrollbarY, ':focus');

    if (!hovered && !focused) {
      return;
    }

    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (helper.isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37:
        // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38:
        // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39:
        // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40:
        // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 33:
        // page up
        deltaY = 90;
        break;
      case 32:
        // space bar
        if (e.shiftKey) {
          deltaY = 90;
        } else {
          deltaY = -90;
        }
        break;
      case 34:
        // page down
        deltaY = -90;
        break;
      case 35:
        // end
        if (e.ctrlKey) {
          deltaY = -i.contentHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 36:
        // home
        if (e.ctrlKey) {
          deltaY = element.scrollTop;
        } else {
          deltaY = i.containerHeight;
        }
        break;
      default:
        return;
    }

    updateScroll(element, 'top', element.scrollTop - deltaY);
    updateScroll(element, 'left', element.scrollLeft + deltaX);
    updateGeometry(element);

    shouldPrevent = shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent) {
      e.preventDefault();
    }
  });
}

var keyboard = function (element) {
  var i = instances_1.get(element);
  bindKeyboardHandler(element, i);
};

function bindMouseWheelHandler(element, i) {
  var shouldPrevent = false;

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
        // IE in some mouse drivers
        deltaX = 0;
        deltaY = e.wheelDelta;
      }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(deltaX, deltaY) {
    var child = element.querySelector('textarea:hover, select[multiple]:hover, .ps-child:hover');
    if (child) {
      if (!window.getComputedStyle(child).overflow.match(/(scroll|auto)/)) {
        // if not scrollable
        return false;
      }

      var maxScrollTop = child.scrollHeight - child.clientHeight;
      if (maxScrollTop > 0) {
        if (!(child.scrollTop === 0 && deltaY > 0) && !(child.scrollTop === maxScrollTop && deltaY < 0)) {
          return true;
        }
      }
      var maxScrollLeft = child.scrollLeft - child.clientWidth;
      if (maxScrollLeft > 0) {
        if (!(child.scrollLeft === 0 && deltaX < 0) && !(child.scrollLeft === maxScrollLeft && deltaX > 0)) {
          return true;
        }
      }
    }
    return false;
  }

  function mousewheelHandler(e) {
    var delta = getDeltaFromEvent(e);

    var deltaX = delta[0];
    var deltaY = delta[1];

    if (shouldBeConsumedByChild(deltaX, deltaY)) {
      return;
    }

    shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      updateScroll(element, 'top', element.scrollTop - deltaY * i.settings.wheelSpeed);
      updateScroll(element, 'left', element.scrollLeft + deltaX * i.settings.wheelSpeed);
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        updateScroll(element, 'top', element.scrollTop - deltaY * i.settings.wheelSpeed);
      } else {
        updateScroll(element, 'top', element.scrollTop + deltaX * i.settings.wheelSpeed);
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        updateScroll(element, 'left', element.scrollLeft + deltaX * i.settings.wheelSpeed);
      } else {
        updateScroll(element, 'left', element.scrollLeft - deltaY * i.settings.wheelSpeed);
      }
      shouldPrevent = true;
    }

    updateGeometry(element);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== "undefined") {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== "undefined") {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

var mouseWheel = function (element) {
  var i = instances_1.get(element);
  bindMouseWheelHandler(element, i);
};

function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
        return !i.settings.swipePropagation;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
        return !i.settings.swipePropagation;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    updateScroll(element, 'top', element.scrollTop - differenceY);
    updateScroll(element, 'left', element.scrollLeft - differenceX);

    updateGeometry(element);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;
  var inGlobalTouch = false;
  var inLocalTouch = false;

  function globalTouchStart() {
    inGlobalTouch = true;
  }
  function globalTouchEnd() {
    inGlobalTouch = false;
  }

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }
  function shouldHandle(e) {
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }
    return false;
  }
  function touchStart(e) {
    if (shouldHandle(e)) {
      inLocalTouch = true;

      var touch = getTouch(e);

      startOffset.pageX = touch.pageX;
      startOffset.pageY = touch.pageY;

      startTime = new Date().getTime();

      if (easingLoop !== null) {
        clearInterval(easingLoop);
      }

      e.stopPropagation();
    }
  }
  function touchMove(e) {
    if (!inLocalTouch && i.settings.swipePropagation) {
      touchStart(e);
    }
    if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPreventDefault(differenceX, differenceY)) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (!inGlobalTouch && inLocalTouch) {
      inLocalTouch = false;

      clearInterval(easingLoop);
      easingLoop = setInterval(function () {
        if (!instances_1.get(element)) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (supportsTouch) {
    i.event.bind(window, 'touchstart', globalTouchStart);
    i.event.bind(window, 'touchend', globalTouchEnd);
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(window, 'pointerdown', globalTouchStart);
      i.event.bind(window, 'pointerup', globalTouchEnd);
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(window, 'MSPointerDown', globalTouchStart);
      i.event.bind(window, 'MSPointerUp', globalTouchEnd);
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var touch = function (element) {
  if (!helper.env.supportsTouch && !helper.env.supportsIePointer) {
    return;
  }

  var i = instances_1.get(element);
  bindTouchHandler(element, i, helper.env.supportsTouch, helper.env.supportsIePointer);
};

function bindSelectionHandler(element, i) {
  function getRangeNode() {
    var selection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : '';
    if (selection.toString().length === 0) {
      return null;
    } else {
      return selection.getRangeAt(0).commonAncestorContainer;
    }
  }

  var scrollingLoop = null;
  var scrollDiff = { top: 0, left: 0 };
  function startScrolling() {
    if (!scrollingLoop) {
      scrollingLoop = setInterval(function () {
        if (!instances_1.get(element)) {
          clearInterval(scrollingLoop);
          return;
        }

        updateScroll(element, 'top', element.scrollTop + scrollDiff.top);
        updateScroll(element, 'left', element.scrollLeft + scrollDiff.left);
        updateGeometry(element);
      }, 50); // every .1 sec
    }
  }
  function stopScrolling() {
    if (scrollingLoop) {
      clearInterval(scrollingLoop);
      scrollingLoop = null;
    }
    helper.stopScrolling(element);
  }

  var isSelected = false;
  i.event.bind(i.ownerDocument, 'selectionchange', function () {
    if (element.contains(getRangeNode())) {
      isSelected = true;
    } else {
      isSelected = false;
      stopScrolling();
    }
  });
  i.event.bind(window, 'mouseup', function () {
    if (isSelected) {
      isSelected = false;
      stopScrolling();
    }
  });
  i.event.bind(window, 'keyup', function () {
    if (isSelected) {
      isSelected = false;
      stopScrolling();
    }
  });

  i.event.bind(window, 'mousemove', function (e) {
    if (isSelected) {
      var mousePosition = { x: e.pageX, y: e.pageY };
      var containerGeometry = {
        left: element.offsetLeft,
        right: element.offsetLeft + element.offsetWidth,
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight
      };

      if (mousePosition.x < containerGeometry.left + 3) {
        scrollDiff.left = -5;
        helper.startScrolling(element, 'x');
      } else if (mousePosition.x > containerGeometry.right - 3) {
        scrollDiff.left = 5;
        helper.startScrolling(element, 'x');
      } else {
        scrollDiff.left = 0;
      }

      if (mousePosition.y < containerGeometry.top + 3) {
        if (containerGeometry.top + 3 - mousePosition.y < 5) {
          scrollDiff.top = -5;
        } else {
          scrollDiff.top = -20;
        }
        helper.startScrolling(element, 'y');
      } else if (mousePosition.y > containerGeometry.bottom - 3) {
        if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
          scrollDiff.top = 5;
        } else {
          scrollDiff.top = 20;
        }
        helper.startScrolling(element, 'y');
      } else {
        scrollDiff.top = 0;
      }

      if (scrollDiff.top === 0 && scrollDiff.left === 0) {
        stopScrolling();
      } else {
        startScrolling();
      }
    }
  });
}

var selection = function (element) {
  var i = instances_1.get(element);
  bindSelectionHandler(element, i);
};

function bindNativeScrollHandler(element, i) {
  i.event.bind(element, 'scroll', function () {
    updateGeometry(element);
  });
}

var nativeScroll = function (element) {
  var i = instances_1.get(element);
  bindNativeScrollHandler(element, i);
};

// Handlers
var handlers = {
  'click-rail': clickRail,
  'drag-scrollbar': dragScrollbar,
  'keyboard': keyboard,
  'wheel': mouseWheel,
  'touch': touch,
  'selection': selection
};

var initialize = function (element, userSettings) {
  userSettings = typeof userSettings === 'object' ? userSettings : {};

  _class.add(element, 'ps-container');

  // Create a plugin instance.
  var i = instances_1.add(element);

  i.settings = helper.extend(i.settings, userSettings);
  _class.add(element, 'ps-theme-' + i.settings.theme);

  i.settings.handlers.forEach(function (handlerName) {
    handlers[handlerName](element);
  });

  nativeScroll(element);

  updateGeometry(element);
};

var update = function (element) {
  var i = instances_1.get(element);

  if (!i) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;

  // Recalculate rail margins
  dom.css(i.scrollbarXRail, 'display', 'block');
  dom.css(i.scrollbarYRail, 'display', 'block');
  i.railXMarginWidth = helper.toInt(dom.css(i.scrollbarXRail, 'marginLeft')) + helper.toInt(dom.css(i.scrollbarXRail, 'marginRight'));
  i.railYMarginHeight = helper.toInt(dom.css(i.scrollbarYRail, 'marginTop')) + helper.toInt(dom.css(i.scrollbarYRail, 'marginBottom'));

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  dom.css(i.scrollbarXRail, 'display', 'none');
  dom.css(i.scrollbarYRail, 'display', 'none');

  updateGeometry(element);

  // Update top/left scroll to trigger events
  updateScroll(element, 'top', element.scrollTop);
  updateScroll(element, 'left', element.scrollLeft);

  dom.css(i.scrollbarXRail, 'display', '');
  dom.css(i.scrollbarYRail, 'display', '');
};

var main = {
  initialize: initialize,
  update: update,
  destroy: destroy
};

var perfectScrollbar = main;

/**
 * Sidebar 主内容组件
 */

var SidebarBody = function (_PureComponent) {
  inherits(SidebarBody, _PureComponent);

  function SidebarBody() {
    classCallCheck(this, SidebarBody);
    return possibleConstructorReturn(this, (SidebarBody.__proto__ || Object.getPrototypeOf(SidebarBody)).apply(this, arguments));
  }

  createClass(SidebarBody, [{
    key: 'componentDidMount',

    // 初始化滚动条
    value: function componentDidMount() {
      perfectScrollbar.initialize(this.refs.container);
    }
    // props校验

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          others = objectWithoutProperties(_props, ['className', 'children']);


      return React__default.createElement(
        'div',
        _extends({
          ref: 'container'
        }, others, {
          className: classnames('sidebar-body', className)
        }),
        children
      );
    }
  }]);
  return SidebarBody;
}(React.PureComponent);

SidebarBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any };

/**
 * Sidebar 底部组件
 */

var SidebarFooter = function (_PureComponent) {
  inherits(SidebarFooter, _PureComponent);

  function SidebarFooter() {
    classCallCheck(this, SidebarFooter);
    return possibleConstructorReturn(this, (SidebarFooter.__proto__ || Object.getPrototypeOf(SidebarFooter)).apply(this, arguments));
  }

  createClass(SidebarFooter, [{
    key: 'render',

    // 渲染
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          others = objectWithoutProperties(_props, ['children', 'className']);


      children = React__default.Children.map(children, function (child) {
        if (!child) {
          return child;
        }

        var className = child.props.className;


        return React__default.cloneElement(child, {
          className: classnames('sidebar-footer-item', className)
        });
      });

      return React__default.createElement(
        'div',
        _extends({}, others, { className: classnames('sidebar-footer', className) }),
        children
      );
    }
    // props校验

  }]);
  return SidebarFooter;
}(React.PureComponent);

SidebarFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any };

// props校验
var propTypes$4 = {
  className: PropTypes.string,
  children: PropTypes.any

  /**
   * Sidebar 组件
   */
};var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = objectWithoutProperties(_ref, ['children', 'className']);

  return React__default.createElement(
    'div',
    _extends({}, others, { className: classnames('sidebar', className) }),
    children
  );
};

Sidebar.propTypes = propTypes$4;
Sidebar.Header = SidebarHeader;
Sidebar.Body = SidebarBody;
Sidebar.Footer = SidebarFooter;

/**
 * Split组件.
 */

var Split = function (_PureComponent) {
  inherits(Split, _PureComponent);

  function Split() {
    classCallCheck(this, Split);
    return possibleConstructorReturn(this, (Split.__proto__ || Object.getPrototypeOf(Split)).apply(this, arguments));
  }

  createClass(Split, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return React__default.createElement(
        'span',
        { className: classnames('split', className) },
        children || '|'
      );
    }
    // 默认props

  }]);
  return Split;
}(React.PureComponent);

Split.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any };
Split.defaultProps = {};

/**
 * Switch组件.
 */

var Switch = function (_PureComponent) {
  inherits(Switch, _PureComponent);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeHandle = function (event) {
      var onChange = _this.props.onChange,
          checked = event.target.checked;


      onChange(checked, event);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // props校验

  // 默认props


  createClass(Switch, [{
    key: 'getValue',
    value: function getValue() {
      var value = this.props.value,
          main = this.refs.main;


      if (value === undefined) {
        return main.checked;
      }

      return value;
    }
  }, {
    key: 'setValue',
    value: function setValue(checked) {
      var main = this.refs.main;


      main.checked = !!checked;
    }
    // 状态切换回调

  }, {
    key: 'render',


    // 渲染
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          onChange = _props.onChange,
          disabled = _props.disabled,
          className = _props.className,
          others = objectWithoutProperties(_props, ['checked', 'defaultChecked', 'onChange', 'disabled', 'className']);


      return React__default.createElement(
        'label',
        _extends({}, others, {
          className: classnames('switch', className),
          htmlFor: 'switch' + this._reactInternalInstance._mountOrder
        }),
        React__default.createElement('input', {
          ref: 'main',
          type: 'checkbox',
          checked: checked,
          defaultChecked: defaultChecked,
          disabled: disabled,
          onChange: onChange && this.onChangeHandle,
          id: 'switch' + this._reactInternalInstance._mountOrder
        }),
        React__default.createElement('div', { className: 'switch-addon' })
      );
    }
  }]);
  return Switch;
}(React.PureComponent);

// getValue


Switch.propTypes = {
  // 自定义class
  className: PropTypes.string,
  // 是否选中
  checked: PropTypes.bool,
  // 是否默认选中
  defaultChecked: PropTypes.bool,
  // 是否disabled
  disabled: PropTypes.bool,
  // 状态切换回调
  onChange: PropTypes.func,
  value: PropTypes.any };
Switch.defaultProps = {
  disabled: false
};
Switch.getValue = function (ref) {
  if (!ref) return undefined;

  return ref.getValue();
};

// setValue
Switch.setValue = function (ref, checked) {
  if (!ref) return;

  ref.setValue(checked);
};

/**
 * Tag组件
 */

var Tag = function (_PureComponent) {
  inherits(Tag, _PureComponent);

  function Tag() {
    classCallCheck(this, Tag);
    return possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
  }

  createClass(Tag, [{
    key: 'render',

    // 渲染

    // props校验
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          closable = _props.closable,
          onClose = _props.onClose,
          shape = _props.shape,
          outline = _props.outline,
          children = _props.children,
          className = _props.className,
          others = objectWithoutProperties(_props, ['theme', 'closable', 'onClose', 'shape', 'outline', 'children', 'className']),
          tagStyle = outline ? 'tag-outline-' + theme : 'tag-' + theme,
          tagShape = shape ? 'tag-' + shape : '';


      return React__default.createElement(
        'span',
        _extends({}, others, {
          className: classnames('tag', tagStyle, tagShape, className)
        }),
        children,
        closable && React__default.createElement(
          'span',
          { className: 'tag-close', onClick: onClose },
          '\xD7'
        )
      );
    }
    // 默认props

  }]);
  return Tag;
}(React.PureComponent);

Tag.propTypes = {
  // 样式（default、primary、success、info、warning、danger）
  theme: PropTypes.string,
  // 形状（pill）
  shape: PropTypes.string,
  // 是否outline
  outline: PropTypes.bool,
  // 是否可删除
  closable: PropTypes.bool,
  // 删除回调
  onClose: PropTypes.func,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any };
Tag.defaultProps = {
  theme: 'default',
  closable: false,
  outline: false };

var propTypes$5 = {
  // 自定义icon
  dot: PropTypes.element,
  // 不可达
  unreachable: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string

  /**
   * TimelineItem组件.
   */
};var TimelineItem = function TimelineItem(_ref) {
  var dot = _ref.dot,
      unreachable = _ref.unreachable,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['dot', 'unreachable', 'className', 'children']);

  var unreachableClass = unreachable ? 'timeline-item-unreachable' : null;

  return React__default.createElement(
    'li',
    _extends({}, others, {
      className: classnames('timeline-item', unreachableClass, className)
    }),
    React__default.createElement('div', { className: 'timeline-item-line' }),
    React__default.createElement(
      'div',
      { className: 'timeline-item-addon' },
      dot || React__default.createElement('i', { className: 'fa fa-circle-o' })
    ),
    React__default.createElement(
      'div',
      { className: 'timeline-item-body' },
      children
    )
  );
};

TimelineItem.propTypes = propTypes$5;

var propTypes$6 = {
  // 大小
  size: PropTypes.oneOf(['lg']),
  children: PropTypes.any,
  className: PropTypes.string

  /**
   * Timeline组件.
   */
};var Timeline = function Timeline(_ref) {
  var size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      others = objectWithoutProperties(_ref, ['size', 'className', 'children']);

  var sizeClass = size ? 'timeline-' + size : null;

  return React__default.createElement(
    'ul',
    _extends({}, others, { className: classnames('timeline', sizeClass, className) }),
    children
  );
};

Timeline.propTypes = propTypes$6;
Timeline.Item = TimelineItem;

/**
 * Tooltip组件.
 */

var Tooltip = function (_PureComponent) {
  inherits(Tooltip, _PureComponent);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.onMouseOver = function (event) {
      var rect = event.target.getBoundingClientRect();

      _this.createTooltip(rect);
    }, _this.onMouseOut = function () {
      document.body.removeChild(_this.tooltip);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // prop type校验

  // 默认props


  createClass(Tooltip, [{
    key: 'createTooltip',

    // 创建tooltip
    value: function createTooltip(targetRect) {
      var _props = this.props,
          position = _props.position,
          content = _props.content,
          positionClass = 'tooltip-' + position,
          tooltipNode = document.createElement('div'),
          arrowNode = document.createElement('div'),
          innerNode = document.createElement('div');


      tooltipNode.className = 'tooltip ' + positionClass;
      arrowNode.className = 'tooltip-arrow';
      innerNode.className = 'tooltip-inner';

      innerNode.innerHTML = content;
      tooltipNode.appendChild(arrowNode);
      tooltipNode.appendChild(innerNode);

      document.body.appendChild(tooltipNode);

      var tooltipRect = tooltipNode.getBoundingClientRect();

      // 计算left、top
      switch (position) {
        case 'top':
          tooltipNode.style.top = targetRect.top - tooltipRect.height + 'px';
          tooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width) / 2 + 'px';
          break;
        case 'left':
          tooltipNode.style.left = targetRect.left - tooltipRect.width + 'px';
          tooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2 + 'px';
          break;
        case 'right':
          tooltipNode.style.left = targetRect.left + targetRect.width + 'px';
          tooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2 + 'px';
          break;
        default:
          tooltipNode.style.top = targetRect.top + targetRect.height + 'px';
          tooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width) / 2 + 'px';
          break;
      }

      tooltipNode.classList.add('in');
      this.tooltip = tooltipNode;
    }
    // 显示tooltip

    // 移除tooltip

  }, {
    key: 'render',

    // 渲染
    value: function render() {
      var _this2 = this;

      var children = this.props.children,
          _children$props = children.props,
          onMouseOver = _children$props.onMouseOver,
          onMouseOut = _children$props.onMouseOut;


      children = React__default.cloneElement(children, {
        onMouseOver: onMouseOver ? function (event) {
          onMouseOver();
          _this2.onMouseOver(event);
        } : this.onMouseOver,
        onMouseOut: onMouseOut ? function (event) {
          onMouseOut();
          _this2.onMouseOut(event);
        } : this.onMouseOut
      });

      return children;
    }
  }]);
  return Tooltip;
}(React.PureComponent);

Tooltip.propTypes = {
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  content: PropTypes.string,
  children: PropTypes.element.isRequired };
Tooltip.defaultProps = {
  position: 'right' };

exports.Alert = Alert;
exports.Attention = Attention;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonToolbar = ButtonToolbar;
exports.Calendar = Calendar;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.Col = Col;
exports.Collapse = Collapse;
exports.Confirm = Confirm;
exports.Container = Container;
exports.Content = Content;
exports.DatePicker = DatePicker;
exports.Dropdown = Dropdown;
exports.Flex = Flex;
exports.Form = Form;
exports.Icon = Icon;
exports.Image = Image;
exports.InlineSelect = InlineSelect;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.ListGroup = ListGroup;
exports.Loading = Loading;
exports.Message = Message;
exports.MessageItem = MessageItem;
exports.Modal = Modal;
exports.Nav = Nav;
exports.Navbar = Navbar;
exports.Notice = Notice;
exports.Notification = Notification;
exports.Pagination = Pagination;
exports.Popover = Popover;
exports.Progress = Progress;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Row = Row;
exports.Select = Select;
exports.Sidebar = Sidebar;
exports.Split = Split;
exports.Switch = Switch;
exports.Tag = Tag;
exports.Timeline = Timeline;
exports.Tooltip = Tooltip;
exports.Upload = Upload;
