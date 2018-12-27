import test from 'ava';
import { CLIEngine } from 'eslint';

// Test empty code against config files to verify
// ...that all config files are valid

const code = '';

test('main rules are valid', (t) => {
    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'index.js'
    });

    t.is(cli.executeOnText(code).errorCount, 0);
});

test('node-specific rules are valid', (t) => {
    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'node.js'
    });

    t.is(cli.executeOnText(code).errorCount, 0);
});

test('browser-specific rules are valid', (t) => {
    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'browser.js'
    });

    t.is(cli.executeOnText(code).errorCount, 0);
});

test('ava rules are valid', (t) => {
    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'ava.js'
    });

    t.is(cli.executeOnText(code).errorCount, 0);
});
