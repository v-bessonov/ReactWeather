var React = require('react');
var { NavLink} = require('react-router-dom');

// var Nav = React.createClass({
//   render: function() {
//     return(
//       <div>
//         <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Get the Weather</NavLink>
//         <NavLink to="/about" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>About</NavLink>
//         <NavLink to="/examples" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Examples</NavLink>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return(
    <div>
      <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Get the Weather</NavLink>
      <NavLink to="/about" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>About</NavLink>
      <NavLink to="/examples" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Examples</NavLink>
    </div>
  );
};

module.exports = Nav;
