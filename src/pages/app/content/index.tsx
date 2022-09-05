import type { CustomNextPage } from 'next'
import { DashboardLayout } from 'src/layout'

import { PageContainer } from 'src/components/general/PageContainer'
import { CardContent } from 'src/components/app/content'

const Contents: CustomNextPage = () => {
  return (
    <PageContainer title="Pilih Konten">
      <CardContent cols={3} />
    </PageContainer>
  )
}

Contents.getLayout = DashboardLayout

export default Contents
