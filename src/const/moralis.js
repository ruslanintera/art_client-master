import Moralis from 'moralis'

Moralis.initialize(process.env.REACT_APP_APPID)
Moralis.serverURL = process.env.REACT_APP_SERVER_URL

Moralis.start({
  appId: process.env.REACT_APP_APPID,
  serverUrl: process.env.REACT_APP_SERVER_URL,
}).then((response) => {})

export default Moralis;