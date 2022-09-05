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
  IconSearch,
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

    // [theme.fn.smallerThan('xs')]: {
    //   display: 'none',
    // },
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
        padding: `2px ${theme.spacing.md}px`,
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
  // const router = useRouter()
  const { classes, theme, cx } = useStyles()
  // const signOut = () => {
  //   router.push(getPath('SIGN_IN'))
  // }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      shadow="lg"
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar
              src={
                'https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              }
              alt={'Jhon Doe'}
              radius="xl"
              size={30}
            />
            {/* <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              Alwi Sofwan
            </Text> */}
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Group
          my={12}
          spacing={10}
          position="center"
          sx={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Avatar
            src={
              'https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
            alt={'Jhon Doe'}
            radius="xl"
            size={55}
          />
          <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
            Alwi Sofwan
          </Text>
        </Group>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
          Change account
        </Menu.Item>
        <Menu.Item color="red" icon={<IconLogout size={14} stroke={1.5} />}>
          Logout
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
    <Group position="center" my="md">
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
