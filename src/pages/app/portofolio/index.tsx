import { CustomNextPage } from 'next'
import React from 'react'
import { PageContainer } from 'src/components/general/PageContainer'
import { PageContent } from 'src/components/general/PageContent'
import { DashboardLayout } from 'src/layout'
import { Stack } from '@mantine/core'

import { createStyles, Card, Group, Switch, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    '& *': {
      cursor: 'pointer',
    },
  },

  title: {
    lineHeight: 1,
  },
}))

interface SwitchesCardProps {
  title: string
  description: string
  data: {
    title: string
    description: string
  }[]
}

const dataDummy = [
  {
    id: '1',
    title: 'Test',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    id: '2',
    title: 'Test',
    description: 'lorem ipsum dolor sit amet',
  },
]

export function SwitchesCard({ title, description, data }: SwitchesCardProps) {
  const { classes } = useStyles()

  const items = data.map((item) => (
    <Group position="apart" className={classes.item} noWrap spacing="xl">
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch
        onLabel="ON"
        offLabel="OFF"
        className={classes.switch}
        size="lg"
      />
    </Group>
  ))

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text size="lg" className={classes.title} weight={500}>
        {title}
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        {description}
      </Text>
      {items}
    </Card>
  )
}

const Portofolio: CustomNextPage = () => {
  return (
    <Stack spacing="lg">
      <PageContent outerTitle title="Your Portofolio">
        <SwitchesCard title="Hello" description="lorem" data={dataDummy} />
      </PageContent>
    </Stack>
  )
}

Portofolio.getLayout = DashboardLayout

export default Portofolio
