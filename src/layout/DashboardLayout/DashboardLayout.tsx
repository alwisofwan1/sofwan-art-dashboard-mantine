import { FC, useEffect } from 'react'
import type { CustomLayout } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useDisclosure } from '@mantine/hooks'
import { AppShell, Box, Burger, Drawer, MediaQuery } from '@mantine/core'

import { LayoutErrorBoundary } from '../LayoutErrorBoundary'

const Header = dynamic(async () => {
  const { Header } = await import('./Header')
  return Header
})

const SideNav = dynamic(async () => {
  const { SideNav } = await import('./SideNav')
  return SideNav
})

export const DashboardLayout: CustomLayout = (page) => {
  const [opened, handlers] = useDisclosure(false)

  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        body: { minHeight: '100vh' },
        main: {
          padding: 0,
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <SideNav />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
    >
      <Header
        left={
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={handlers.toggle} size="sm" />
          </MediaQuery>
        }
      />
      <Box py="xl" px="md">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
    </AppShell>
  )
}

const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({
  opened,
  handleClose,
}) => {
  const router = useRouter()

  // SideNav
  useEffect(() => {
    router.events.on('routeChangeStart', handleClose)
    return () => {
      router.events.off('routeChangeStart', handleClose)
    }
  }, [handleClose, router.events])

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      sx={{ position: 'relative' }}
    >
      <SideNav />
    </Drawer>
  )
}
