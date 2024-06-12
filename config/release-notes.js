// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const conventionalChangelogAngular = require('conventional-changelog-angular');

// eslint-disable-next-line no-undef
module.exports = conventionalChangelogAngular.then(writerOpts => {
  const originalTransform = writerOpts.writerOpts.transform;

  writerOpts.writerOpts.transform = (commit) => {
    commit.notes.forEach(note => {
      note.title = 'BREAKING CHANGES';
    });

    switch (commit.type) {
      case 'feat':
        commit.type = 'Features';
        break;
      case 'fix':
        commit.type = 'Bug Fixes';
        break;
      case 'update':
        commit.type = 'Updates';
        break;
      case 'perf':
        commit.type = 'Performance Improvements';
        break;
      case 'revert':
        commit.type = 'Reverts';
        break;
      case 'docs':
        commit.type = 'Documentation';
        break;
      case 'style':
        commit.type = 'Styles';
        break;
      case 'refactor':
        commit.type = 'Code Refactoring';
        break;
      case 'test':
        commit.type = 'Tests';
        break;
      case 'build':
        commit.type = 'Build System';
        break;
      case 'ci':
        commit.type = 'Continuous Integration';
        break;
    }

    if (commit.scope === '*') {
      commit.scope = '';
    }

    if (typeof commit.hash === 'string') {
      commit.shortHash = commit.hash.substring(0, 7);
    }

    // Adjust the commit subject format
    if (commit.scope && commit.scope !== '') {
      commit.subject = `(${commit.scope}): ${commit.subject}`;
    }

    if (typeof commit.subject === 'string') {
      commit.subject = commit.subject.substring(0, 72);
    }

    return originalTransform(commit);
  };

  return writerOpts;
});
