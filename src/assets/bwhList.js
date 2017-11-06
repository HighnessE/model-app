let [arrb, arrw, arrh] = [
    Array(120).fill().map(function (v, i) { return i + 30; }), 
    Array(120).fill().map(function (v, i) { return i + 30; }), 
    Array(120).fill().map(function (v, i) { return i + 30; })
];

module.exports = [arrb, arrw, arrh];