var React = require('react');
var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute} = require('react-router');


var Main = require('Main');

//Load foundation-sites

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


// var objOne = {
//   name : 'Andrew',
//   location: 'Moscow'
// };
//
// var objTwo = {
//   age: 25,
//   ...objOne
// };
//console.log(objTwo);

ReactDOM.render(
<Main/>,


  document.getElementById('app')
);
