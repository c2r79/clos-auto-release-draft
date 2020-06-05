/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-require-import
const core = require('@actions/core')
//const core = require('@actions/core')
const github = require('@actions/github')

async function createIssue() {
  try {
    const token = core.getInput('token')
    const title = core.getInput('title')
    const body = core.getInput('body')
    const assignees = core.getInput('assignees')

    const octokit = new github.GitHub(token)

    const response = await octokit.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split('\n') : undefined
    })

    core.setOutput('issue', JSON.stringify(response.data))
  } catch (error) {
    core.setFailed(error)
  }
}

createIssue()
