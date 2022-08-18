import { createStyles, Text, SimpleGrid, UnstyledButton } from '@mantine/core'
import {
  IconNews,
  IconHeadphones,
  IconVideo,
  IconSlideshow,
} from '@tabler/icons'

const mockdata = [
  { title: 'Artikel', icon: IconNews, color: 'violet' },
  { title: 'Audio', icon: IconHeadphones, color: 'indigo' },
  { title: 'Video', icon: IconVideo, color: 'blue' },
  { title: 'Gallery', icon: IconSlideshow, color: 'green' },
]

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 120,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}))

interface CardContentProps {
  cols?: number
  props?: any
}

export function CardContent({ cols, props }: CardContentProps) {
  const { classes, theme } = useStyles()

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="sm" weight={500} mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))

  return (
    <SimpleGrid cols={cols} {...props}>
      {items}
    </SimpleGrid>
  )
}
