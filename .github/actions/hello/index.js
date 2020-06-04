/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-require-import
const {getInput, setOutput, setFailed} = require('@actions/core')
//const core = require('@actions/core')
const github = require('@actions/github')

try {
  const name = getInput('who-to-greet')
  const time = new Date()

  setOutput('time', time.toTimeString())

  console.log('HEYYYYYYY YEAHHHHHHHHHHHH...HEYYYY YEAHHHHHH')
  console.log(`${name}`)
  console.log(JSON.stringify(github.event, null, '\t'))
} catch (error) {
  setFailed(error)
}
// 8.1 3.1
// 311.6 62.6
