// this is just a fake module to simulate interacting with a server

// simulate the network request time...
const sleep = (time: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

interface IPostData {
  data: {
    post: string
  }
}

async function savePost(postData: string): Promise<IPostData> {
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
async function reportError(): Promise<{ success: boolean }> {
  await sleep(1000)
  return { success: true }
}

export { savePost, loadGreeting, reportError }
