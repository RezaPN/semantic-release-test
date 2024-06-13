// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
module.exports = require("conventional-changelog-angular").then(
  conventionalChangelogAngular => {
    const transformAngular = conventionalChangelogAngular.writerOpts.transform
    const dummyNote = {
      title: 'dummy',
      text: 'dummy'
    }

    conventionalChangelogAngular.writerOpts.transform = (commit, context) => {
      if (commit.type == 'update') {
        // add notes to prevent discard
        // https://github.com/conventional-changelog/conventional-changelog/blob/bfe3bf1c49d4a125474b398b2d304749fd3b56c7/packages/conventional-changelog-angular/writer-opts.js#L31
        if (!commit.notes.length) {
          commit.notes = [dummyNote]
        }
        commit = transformAngular(commit, context)
        commit.notes = commit.notes.filter(note => note !== dummyNote)
        commit.type = "Updates"
      } else {
        commit = transformAngular(commit, context)
      }
      return commit
    }
    return conventionalChangelogAngular
  })