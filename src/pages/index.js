import React from "react"
import { SimpleNavbar } from "components/Navbar"
import Index from "routes/Start"
import Layout from "components/Layout"
import Container from "components/container"

export default () => (
  <Layout>
    <SimpleNavbar />
    <Container>
      <Index />
    </Container>
  </Layout>
)
