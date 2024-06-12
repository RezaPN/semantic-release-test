const conventionalChangelogAngular = require('conventional-changelog-angular');

module.exports = conventionalChangelogAngular.then(writerOpts => {
  const originalTransform = writerOpts.writerOpts.transform;

  writerOpts.writerOpts.transform = (commit, context) => {
    if (commit.type === 'update') {
      commit.type = 'Updates'; // Set the custom type
    }

    // Apply the original transform
    commit = originalTransform(commit, context);

    return commit;
  };

  return writerOpts;
});
