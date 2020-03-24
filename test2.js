import { Selector } from 'testcafe';

var time = new Date()

var session_time = String(session_time).substr(4,22)

process.env.BROWSERSTACK_USERNAME = 'rathilpatel1'
process.env.BROWSERSTACK_ACCESS_KEY = 'LGUNnQMtjxeGa7xnuXi9'
process.env.BROWSERSTACK_PROJECT_NAME = 'Falcon 900'
process.env.BROWSERSTACK_BUILD_ID = 'Vormir- '+session_time
process.env.BROWSERSTACK_TEST_RUN_NAME = 'Infinity_Test-'+session_time
process.env.BROWSERSTACK_PARALLEL_RUNS = '10'
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
	

	