import { FC, ReactNode, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Avatar,
  Box,
  Group,
  Indicator,
  Menu,
  Autocomplete,
  ActionIcon,
  UnstyledButton,
  createStyles,
  Text,
  useMantineColorScheme,
  ColorScheme,
} from '@mantine/core'
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconSun,
  IconMoonStars,
  IconBell,
  IconSearch
} from '@tabler/icons'
import { getPath } from 'src/lib/const'
import { useLocalStorage } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}))

export const Header: FC<{ left: ReactNode }> = ({ left }) => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `0px ${theme.spacing.md}px`,
        borderBottom:
          theme.colorScheme === 'dark'
            ? 'none'
            : `1px solid ${theme.colors.gray[2]}`,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Group spacing="lg" noWrap>
        {left}
        <SearchForm />
        <Notification />
        <ThemeSwitch />
        <UserMenu />
      </Group>
    </Box>
  )
}

const SearchForm: FC = () => {
  return (
    <Autocomplete
      data={[]}
      size="lg"
      placeholder="Search"
      icon={<IconSearch size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: { border: 0, backgroundColor: 'transparent' },
      }}
      onChange={(value) => {
        console.log(value)
      }}
    />
  )
}

const Notification: FC = () => {
  return (
    <Indicator inline size={14} offset={4} color="red" withBorder>
      <Link href={getPath('NOTIFICATION')} passHref>
        <ActionIcon component="a" variant="transparent" radius="xl" size={40}>
          <IconBell />
        </ActionIcon>
      </Link>
    </Indicator>
  )
}

const UserMenu: FC = () => {
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const router = useRouter()
  const { classes, theme, cx } = useStyles()
  const signOut = () => {
    router.push(getPath('SIGN_IN'))
  }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar
              src={
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
              }
              alt={'Jhon Doe'}
              radius="xl"
              size={20}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              Alwi Sofwan
            </Text>
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={
            <IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />
          }
        >
          Liked posts
        </Menu.Item>
        <Menu.Item
          icon={
            <IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />
          }
        >
          Saved posts
        </Menu.Item>
        <Menu.Item
          icon={
            <IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />
          }
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
          Change account
        </Menu.Item>
        <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
          Logout
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
          Pause subscription
        </Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

const ThemeSwitch: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  })

  const toggleColorScheme = () =>
    setColorScheme((current: string) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  )
}
