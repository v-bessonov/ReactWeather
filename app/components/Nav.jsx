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

// var Nav = (props) => {
//   return(
//
//     <div className="top-bar">
//       <div className="top-bar-left">
//         <ul className="menu">
//           <li className="menu-text">
//             React Weather App
//           </li>
//           <li>
//             <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Get the Weather</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/examples" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Examples</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-right">
//         <form onSubmit={this.onSearch}>
//         </form>
//
//         <ul className="menu">
//           <li><input type="search" placeholder="Search"/></li>
//           <li><button type="button" className="button">Search</button></li>
//         </ul>
//       </div>
//     </div>
//
//
//   );
// };


var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Not yet wired up!')
  },

  render: function() {
    return(

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Get the Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/examples" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search weather"/></li>
              <li><input type="submit" className="button" value="Get weather" /></li>
            </ul>
          </form>
        </div>
      </div>


    );
  }
});

module.exports = Nav;
