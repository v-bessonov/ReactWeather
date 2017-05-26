var React = require('react');
var { NavLink} = require('react-router-dom');
// var Examples = React.createClass({
//   render: function() {
//     return(
//       <h3> Examples component </h3>
//     );
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title"> Examples!</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <NavLink to="/?location=Moscow">Moscow, RU</NavLink>
        </li>
        <li>
          <NavLink to="/?location=Yoshksr-Ola">Yoshksr-Ola, RU</NavLink>
        </li>
      </ol>
    </div>

  )
};

module.exports = Examples;
