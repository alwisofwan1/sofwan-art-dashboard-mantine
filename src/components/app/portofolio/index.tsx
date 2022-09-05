import { createStyles, Text, SimpleGrid, UnstyledButton } from '@mantine/core'
import {
  IconNews,
  IconHeadphones,
  IconVideo,
  IconSlideshow,
} from '@tabler/icons'
import { useRouter } from 'next/router'
import { getPath } from 'src/lib/const'

const mockdata = [
  {
    title: 'Information',
    icon: IconNews,
    color: 'violet',
    to: getPath('CONTENT_ARTICLE'),
  },
  { title: 'Skills', icon: IconHeadphones, color: 'indigo', to: '/audio' },
  { title: 'Experience', icon: IconVideo, color: 'blue', to: '/video' },
  { title: 'Projects', icon: IconSlideshow, color: 'green', to: '/gallery' },
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
    boxShadow:
      'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
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
  const router = useRouter()

  const handleClick = (e: string) => {
    router.push(e)
  }

  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      onClick={() => handleClick(item.to)}
    >
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
