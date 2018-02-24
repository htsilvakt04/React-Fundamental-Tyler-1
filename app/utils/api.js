var axios = require('axios');

module.exports = {
    fetchPopularRepos: function (lang) {
        let uri = window.encodeURI(
            'https://api.github.com/search/repositories?q=stars:>1+language:' + lang +
            '&sort=stars&order=desc&type=Repositories&client_id=46641076941ca494908d&client_secret=6a805d0abd33ed3f74cc9ff6ebdf0e924a52fab7');
        return axios.get(uri).then(response => {
            return response.data.items;
        });
    }
};