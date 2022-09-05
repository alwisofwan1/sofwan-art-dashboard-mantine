import { Button, Stack, Table } from '@mantine/core'
import type { CustomNextPage } from 'next'
import { DashboardLayout } from 'src/layout'
import { PageContent } from 'src/components/general/PageContent'
import { PageContainer } from 'src/components/general/PageContainer'
import { showNotification } from '@mantine/notifications'

const Index: CustomNextPage = () => {
  return (
    <PageContainer title="Beranda" fluid>
      <Stack spacing="xl">
        <PageContent title="Test">
          <SampleTable />
        </PageContent>
        <PageContent title="Notifikasi">
          <Button
            onClick={() =>
              showNotification({ message: 'Lorem ipsum dolor sit amet.' })
            }
          >
            Notif
          </Button>
        </PageContent>
      </Stack>
    </PageContainer>
  )
}

const SampleTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        {[
          { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
          { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
          { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
          { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
          { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
        ].map((element) => (
          <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

Index.getLayout = DashboardLayout

export default Index
