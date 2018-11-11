// this is just a fake module to simulate interacting with a server

// simulate the network request time...
import { ErrorInfo } from 'react'

const sleep = (time: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

interface IPostReturnData {
  data: {
    post: IPostData
  }
}

export interface IPostData {
  authorId: string
  content: string
  tags: string[]
  title: string
}

async function savePost(postData: IPostData): Promise<IPostReturnData> {
  await sleep(1000)
  return { data: { post: postData } }
}

const greetings = ['Hello', 'Hi', 'Hey there', `What's up`, 'Howdy', `G'day`]

export interface IGreeting {
  data: {
    greeting: string
  }
}

async function loadGreeting(subject: string): Promise<IGreeting> {
  return { data: { greeting: `${await fetchRandomGreeting()} ${subject}` } }
}

async function fetchRandomGreeting(): Promise<string> {
  await sleep(1000)
  return greetings[Math.floor(Math.random() * greetings.length)]
}

// a fire-and-forget function to report errors
// for componentDidCatch
async function reportError(
  error: Error,
  errorInfo: ErrorInfo,
): Promise<{ success: boolean }> {
  await sleep(1000)
  console.error(error.message, errorInfo)
  return { success: true }
}

export { savePost, loadGreeting, reportError }
