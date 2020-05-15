import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    // * We return the release-url parameter
    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

export default run
