import * as github from '@actions/github'
import * as core from '@actions/core'

// * Returning a string or null alerts the caller that there may be no tag, which
// * is the case if the workflow is triggered by some other event
export function getCreatedTag(): string | null {
  if (github.context.eventName !== 'create') {
    // * We log why the tag couldnt be retrieved then we return null
    core.info(`The event name was ${github.context.eventName}`)
    return null
  }

  // * Check if the create event was triggered by a tag
  if (github.context.payload.ref_type !== 'tag') {
    core.info('The created reference was a branch, not a tag')
    return null
  }

  // * If the above 2 conditions are met, we can return the name of the tag
  return github.context.payload.ref
}
