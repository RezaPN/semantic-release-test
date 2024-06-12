const conventionalChangelogAngular = require('conventional-changelog-angular');

module.exports = conventionalChangelogAngular.then(writerOpts => {
  const originalTransform = writerOpts.writerOpts.transform;

  writerOpts.writerOpts.transform = (commit, context) => {
    if (commit.type === 'update') {
      // Add a dummy note to prevent discard
      const dummyNote = {
        title: 'dummy',
        text: 'dummy',
      };
      
      if (!commit.notes.length) {
        commit.notes = [dummyNote];
      }

      // Apply the original transform
      commit = originalTransform(commit, context);

      // Remove the dummy note and set the custom type
      commit.notes = commit.notes.filter(note => note !== dummyNote);
      commit.type = 'Updates';
    } else {
      commit = originalTransform(commit, context);
    }

    return commit;
  };

  return writerOpts;
});