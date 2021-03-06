"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

require("./viewrow.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * When we display name/content pairs within the Portal/ESDB UI, we use a
 * standard table row to do this. So this is a simple helper to clean up that
 * code. It takes a name and a content as it's primary props. In addition you
 * can also pass in a class for the row and an optional width for the name cell
 * (it defaults to 200px).
 */
exports.default = _react2.default.createClass({
    displayName: "ViewRow",
    getDefaultProps: function getDefaultProps() {
        return {
            name: "",
            rowClass: "",
            valueWidth: 200
        };
    },
    render: function render() {
        if (!_underscore2.default.isUndefined(this.props.content)) {
            return _react2.default.createElement(
                "tr",
                { className: this.props.rowClass },
                _react2.default.createElement(
                    "td",
                    { className: "esnet-viewrow-label",
                        style: { verticalAlign: "top" },
                        width: this.props.valueWidth },
                    this.props.name
                ),
                _react2.default.createElement(
                    "td",
                    { className: "esnet-viewrow-content" },
                    this.props.content
                )
            );
        } else {
            var child = _react2.default.Children.only(this.props.children);
            return _react2.default.createElement(
                "tr",
                { className: this.props.rowClass },
                _react2.default.createElement(
                    "td",
                    { className: "esnet-viewrow-label",
                        style: { verticalAlign: "top" },
                        width: this.props.valueWidth },
                    this.props.name
                ),
                _react2.default.createElement(
                    "td",
                    { className: "esnet-viewrow-content" },
                    child
                )
            );
        }
    }
}); /**
     *  Copyright (c) 2015, The Regents of the University of California,
     *  through Lawrence Berkeley National Laboratory (subject to receipt
     *  of any required approvals from the U.S. Dept. of Energy).
     *  All rights reserved.
     *
     *  This source code is licensed under the BSD-style license found in the
     *  LICENSE file in the root directory of this source tree.
     */