/**
 * Created by whamsy on 4/11/17.
 */
const elasticsearch = require('elasticsearch');

var esClient = new elasticsearch.Client({
    host: 'https://search-tweetdb-77zsdirpjbc6rvql2vqlf3m6eq.us-west-2.es.amazonaws.com/',
    log: 'error'
});

module.exports = esClient;
