module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      let type = commit.type;

      if (type === 'feat') {
        type = 'Features';
      } else if (type === 'fix') {
        type = 'Bug Fixes';
      } else if (type === 'perf') {
        type = 'Performance Improvements';
      } else if (type === 'revert') {
        type = 'Reverts';
      } else if (type === 'docs') {
        type = 'Documentation';
      } else if (type === 'style') {
        type = 'Styles';
      } else if (type === 'refactor') {
        type = 'Code Refactoring';
      } else if (type === 'test') {
        type = 'Tests';
      } else if (type === 'build') {
        type = 'Build System';
      } else if (type === 'ci') {
        type = 'Continuous Integration';
      } else if (type === 'chore') {
        type = 'Chores';
      } else if (type === 'update') {
        type = 'Updates';
      } else {
        return;
      }

      commit.type = type;

      if (commit.scope === '*') {
        commit.scope = '';
      }

      if (typeof commit.hash === 'string') {
        commit.hash = commit.hash.substring(0, 7);
      }

      return commit;
    }
  }
};
