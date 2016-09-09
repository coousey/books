exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:9000/',

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    },
    specs: ['e2e/*e2e-spec.js']
};
