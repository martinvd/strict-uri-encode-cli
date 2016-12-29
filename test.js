import test from 'ava';
import execa from 'execa';

test('main', async t => {
  t.is(await execa.stdout('./cli.js', ['unicorn!foobar']), 'unicorn%21foobar');
  t.is(await execa.stdout('./cli.js', ['unicorn\'foobar']), 'unicorn%27foobar');
  t.is(await execa.stdout('./cli.js', ['unicorn*foobar']), 'unicorn%2Afoobar');
  t.not(await execa.stdout('./cli.js', ['unicorn*foobar']), encodeURIComponent('unicorn*foobar'));
});

test('stdin', async t => {
  t.is(await execa.stdout('./cli.js', {input: 'unicorn!foobar'}), 'unicorn%21foobar');
  t.is(await execa.stdout('./cli.js', {input: 'unicorn\'foobar'}), 'unicorn%27foobar');
  t.is(await execa.stdout('./cli.js', {input: 'unicorn*foobar'}), 'unicorn%2Afoobar');
  t.not(await execa.stdout('./cli.js', {input: 'unicorn*foobar'}), encodeURIComponent('unicorn*foobar'));
});
