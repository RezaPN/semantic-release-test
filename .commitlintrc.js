/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("@commitlint/types").UserConfig} */
// eslint-disable-next-line no-undef
module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          ...require("@commitlint/config-angular-type-enum").value(),
          'update',
          'chore'
        ]
      ]
    }
  }
  