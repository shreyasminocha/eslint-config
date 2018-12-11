import test from 'ava';
import { CLIEngine } from 'eslint';

test('Rule syntax is valid', (t) => {
    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'index.js'
    });

    const code = '';

    t.is(cli.executeOnText(code).errorCount, 0);
});
