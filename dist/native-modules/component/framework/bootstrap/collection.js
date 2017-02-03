'use strict';

exports.__esModule = true;
exports.CollectionCustomElement = undefined;

var _collection = require('./../collection');



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionCustomElement = exports.CollectionCustomElement = function (_Collection) {
  _inherits(CollectionCustomElement, _Collection);

  function CollectionCustomElement() {
    

    return _possibleConstructorReturn(this, _Collection.apply(this, arguments));
  }

  return CollectionCustomElement;
}(_collection.Collection);