import React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <h4>About GoCarGo</h4>
      <p>
        This prototype aims to illustrate a possible UI for a vehicle health monitoring solution.
      </p>
      <p>
        Enrolled vehicles would utilize a networked OBD-II module that uploads telemetry to the cloud. Possible use cases include commercial fleet monitoring, commercial auto repair, and private vehicle collection monitoring.
      </p>
      <p>
        This site uses spoofed data towards prototyping the UI.
      </p>
    </Layout>
  )
}
