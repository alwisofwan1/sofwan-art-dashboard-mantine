import type { CustomNextPage } from 'next'
import { Group, Stack } from '@mantine/core'
import { DashboardLayout } from 'src/layout'
import { PageContent } from 'src/components/PageContent'
import { PageContainer } from 'src/components/PageContainer'

const Settings: CustomNextPage = () => {
  return (
    <PageContainer
      title="Setting"
      items={[
        { label: 'Beranda', href: '#' },
        { label: 'Setting', href: '#' },
        { label: 'Profile', href: '#' },
      ]}
    >
      <Stack spacing="lg">
        <PageContent outerTitle title="Foo!">
          Foo
        </PageContent>
        <Group grow>
          <PageContent title="Bar!">Bar</PageContent>
          <PageContent title="Baz!">Baz</PageContent>
        </Group>
      </Stack>
    </PageContainer>
  )
}

Settings.getLayout = DashboardLayout

export default Settings
