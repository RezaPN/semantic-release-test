module.exports = [
  {
    breaking: true,
    release: "major"
  },
  {
    type: "fix",
    release: "patch"
  },
  {
    type: "update",
    release: "patch"
  },
  {
    type: "docs",
    release: "patch"
  },
  {
    type: "feat",
    release: "minor"
  },
  {
    type: "refactor",
    release: false
  },
  {
    type: "style",
    release: false
  },
  {
    type: "test",
    release: false
  },
  {
    scope: "config",
    release: false
  }
];