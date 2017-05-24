var React = require('react');
var { HashRouter,  Route,  Link} = require('react-router-dom');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');



// var Main = React.createClass({
//   render: function() {
//     return(
//       <div>
//           <HashRouter>
//             <div>
//               <Nav/>
//               <h2> Main component </h2>
//               <Route exact path="/" component={Weather}/>
//               <Route path='/about' component={About}/>
//               <Route path='/examples' component={Examples}/>
//             </div>
//           </HashRouter>
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
        <HashRouter>
          <div>
            <Nav/>
            <h2> Main component </h2>
            <Route exact path="/" component={Weather}/>
            <Route path='/about' component={About}/>
            <Route path='/examples' component={Examples}/>
          </div>
        </HashRouter>
    </div>
  )
};

module.exports = Main;
