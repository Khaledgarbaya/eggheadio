const argv = require('yargs')
const fs = require('fs')

const SECRET = 'egghead'

const assertSecret = ({ secret }) => {
  if (secret !== SECRET) {
    throw new Error('Please provide the correc secret')
  }
}
argv
  .usage('Usage: $0 <command> [options]')
  .command(
    'lessons',
    'List all user lessons',
    yargs => {
      return yargs.option('secret', { type: 'string' })
    },
    argv => {
      console.log(`
      Lessons: 
      - React hooks
      - React Suspense
    `)
    }
  )
  .command(
    'courses',
    'List all user lessons',
    yargs => {
      return yargs.option('secret')
    },
    argv => {
      console.log(`
      Courses
      - Advanced React
      - Beginner React
    `)
    }
  )
  .command(
    'instructors',
    'List all user lessons',
    yargs => {
      return yargs.option('secret')
    },
    argv => {
      console.log(`
      Instructors
      - Joel hooks
      - Kent.C.Dods
    `)
    }
  )
  .middleware(assertSecret).argv // this will be applied to every command and everyone will be happy
