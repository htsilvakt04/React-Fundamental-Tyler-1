let React = require('react');
let PropType = require('prop-types');

function RepoGrid (props) {
    return (
        <ul className='repo-grid'>
            {props.repos.map((repo, index) => {
                return (
                    <li key={repo.name} className='repo-item'>
                        <div className='item-rank'>#{index + 1}</div>
                        <ul className='space-list-item'>
                            <li>
                                <img src={repo.owner.avatar_url} alt="avatar" className='avatar'/>
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} starts</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    );
}

RepoGrid.propTypes = {
    repos: PropType.arrayOf(PropType.object).isRequired
};

module.exports = RepoGrid;