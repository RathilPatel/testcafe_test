import { Selector } from 'testcafe';
var time = new Date()
var session_time = String(time).substr(4,17)


process.env.BROWSERSTACK_PROJECT_NAME = 'TestCafe_BrowserStack'
process.env.BROWSERSTACK_BUILD_ID = 'TestCafe Run- '+session_time
process.env.BROWSERSTACK_TEST_RUN_NAME = 'Fixture Getstarted'
process.env.BROWSERSTACK_PARALLEL_RUNS = '5'
process.env.BROWSERSTACK_USE_AUTOMATE = '1'
process.env.BROWSERSTACK_CHROME_ARGS="--start-maximized"

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first Soul test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});

test('My first Space test', async t => {
    await t
        .click('#tried-test-cafe')
        .typeText('#comments','John was here')
        .click('#submit-button');
});

test('My first Power test', async t => {
    await t
        .click('#remote-testing')
        .click('#reusing-js-code')
        .click('#background-parallel-testing')
        .click('#continuous-integration-embedding')
        .click('#traffic-markup-analysis');
});

test('My first Mind test', async t => {
    await t
        .click('#windows')
        .click('#macos')
        .click('#linux');
});
test('My first Reality test', async t => {
    await t
        .click('#windows')
        .click('#macos')
        .click('#linux');
});
