let React = require('react');
let ReactRouter = require('react-router-dom');
let Link = ReactRouter.Link;

function Home () {
    return (
        <div className='home'>
            <h3>Github Battle: Battle your friends... and stuff.</h3>
            <Link className='battle-link' to='/battle'>Battle</Link>
        </div>
    )
}

module.exports = Home;