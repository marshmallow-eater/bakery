import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import * as theme from './index.module.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={theme.main}>
      bakery 
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
