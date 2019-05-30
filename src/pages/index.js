import React from "react"
import { SimpleNavbar } from "components/Navbar"
import Index from "routes/Start"
import Layout from "components/Layout"
import Container from "components/container"

// the landing page is generated like other Gatsby pages
// other unprotected routes like /login, /privacy, etc
// are completely server side rendered by gatsby build
export default () => (
  <Layout>
    <SimpleNavbar />
    <Container>
      <Index />
    </Container>
  </Layout>
)
