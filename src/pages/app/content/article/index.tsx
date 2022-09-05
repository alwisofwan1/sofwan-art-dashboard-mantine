import { CustomNextPage } from 'next'
import React from 'react'
import { PageContainer } from 'src/components/general/PageContainer'
import { PageContent } from 'src/components/general/PageContent'
import { DashboardLayout } from 'src/layout'
import { Stack } from '@mantine/core'
import { TableSort } from 'src/components/general/TableComponent'

const data = [
  {
    id: '1',
    name: 'Athena Weissnat',
    email: 'Elouise.Prohaska@yahoo.com',
    company: 'Little - Rippin',
  },
  {
    id: '2',
    name: 'Deangelo Runolfsson',
    email: 'Kadin_Trantow87@yahoo.com',
    company: 'Greenfelder - Krajcik',
  },
  {
    id: '3',
    name: 'Danny Carter',
    email: 'Marina3@hotmail.com',
    company: 'Kohler and Sons',
  },
  {
    id: '4',
    name: 'Trace Tremblay PhD',
    email: 'Antonina.Pouros@yahoo.com',
    company: 'Crona, Aufderhar and Senger',
  },
]

const Article: CustomNextPage = () => {
  return (
    <PageContainer
      title=""
      items={[
        { label: 'Home', href: '/' },
        { label: 'Content', href: '/app/content' },
        { label: 'Article', href: '' },
      ]}
      fluid
    >
      <Stack spacing="lg">
        <PageContent outerTitle title="Article">
          <TableSort data={data} />
        </PageContent>
      </Stack>
    </PageContainer>
  )
}

Article.getLayout = DashboardLayout

export default Article
