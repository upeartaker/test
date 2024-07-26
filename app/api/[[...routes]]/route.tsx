/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  title: 'Frog Frame',
})

// Uncomment to use Edge Runtime
export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    // imageOptions: {
    //   format: 'svg',
    // },
    image: (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
       
        <div style={{ marginTop: 40 }}>Hello, World</div>
        {/* <img
          style={{
            width: 100,
          }}
          src='https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif'
        /> */}
      </div>
    ),
    intents: [
      <Button value='apples'>Apples</Button>,
      <Button value='oranges'>Oranges</Button>,
      <Button value='bananas'>Bananas</Button>,
    ],
  })
})

// devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
devtools(app, { assetsPath: '/.frog' })
// ```
