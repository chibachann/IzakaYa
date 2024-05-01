import * as React from 'react'
import Layout from '../layout'
import Title from '../components/Title/Title'

const IndexPage = () => {
  return (
    <Layout>
        <Title 
        title_p="会社紹介"
        title_h1="Company"
        explain_p="私達の会社についての紹介です。"
        />  
    </Layout>
  )
}

export default IndexPage
