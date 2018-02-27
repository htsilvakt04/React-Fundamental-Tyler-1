let React = require('react');
let NavLink = require('react-router-dom').NavLink;

function Navbar () {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active'>Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
            </li>
        </ul>
    )
}

NavLink.defaultProps = {
    to: '/'
};
module.exports = Navbar;