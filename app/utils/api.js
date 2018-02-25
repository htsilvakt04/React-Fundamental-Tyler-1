var axios = require('axios');
let param = 'client_id=46641076941ca494908d&client_secret=6a805d0abd33ed3f74cc9ff6ebdf0e924a52fab7';


function getProfile (username) {
    return axios.get('https://api.github.com/user/' + username + '?' + param)
        .then(user => user.data);
}
function getRepos (username) {
    return axios.get('https://api.github.com/' + username + '/repos' + '?' + 'per_page=100&' + param)
        .then(repo => repo.data);
}
function getStartCount (repos) {
    return repos.reduce((count, repo) => {
        return count + repo.stargazers_count;
    }, 0);
}

function calculateScore (profile, repos) {
    var followers = profile.followers;
    var totalStart = getStartCount(repos);

    return (followers * 2) + totalStart;
}

function handleErr (err) {
    console.warn(err);
    return null;
}

function getUserData (playerName) {
    return axios.all([
        getProfile(playerName),
        getRepos(playerName)
    ]).then(data => {
        let profile = data[0];

        return {
            profile: profile,
            score: calculateScore().apply(null, data)
        }
    });
}

function sortPlayer (players) {
    return players.sort((a, b) => {
        return b.score - a.score;
    })
}
module.exports = {
    //@return array of information of two users. the first item is the winner

    battle: function (players) {
        return Promise.all(players.map(getUserData))
            .then(sortPlayer)
            .catch(handleErr);
    },
    fetchPopularRepos: function (lang) {
        let uri = window.encodeURI(
            'https://api.github.com/search/repositories?q=stars:>1+language:' + lang +
            '&sort=stars&order=desc&type=Repositories&' + param);
        return axios.get(uri).then(response => {
            return response.data.items;
        });
    }
};