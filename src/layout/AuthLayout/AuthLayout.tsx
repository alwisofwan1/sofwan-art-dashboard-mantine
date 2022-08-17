import { Center, Container } from '@mantine/core'
import { ReactNode } from 'react'

import { LayoutErrorBoundary } from '../LayoutErrorBoundary'

export const AuthLayout = (page: ReactNode) => {
  return (
    <Center
      sx={(theme) => ({
        minHeight: '100vh',
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <Container size="xs" sx={{ width: 480, paddingBottom: 16 }}>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Container>
    </Center>
  )
}
