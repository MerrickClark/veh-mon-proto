import React from "react"
import Layout from "../components/Layout"
import ClientsTable from "../components/ClientsTable"

export default function Home() {

  return (
    <Layout>
      <ClientsTable />
    </Layout>
  );
}