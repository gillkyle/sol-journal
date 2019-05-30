import React from "react"

import App from "components/App"
import Layout from "components/Layout"

/* similar to create-react-app, the App.js is like the 
   entrypoint to the protected/client only content,
   Context providers are moved to gatsby-browser.js
   to wrap the root element with necessary providers
   and context */
export default () => (
  <Layout>
    <App />
  </Layout>
)
