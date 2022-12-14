import { FC } from 'react'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks'
import {
  createStyles,
  Navbar,
  Group,
  UnstyledButton,
  Tooltip,
  MediaQuery,
} from '@mantine/core'
import { getPath } from 'src/lib/const'
import { ActiveLink } from 'src/lib/next'
import {
  IconArrowLeft,
  IconArticle,
  IconHome,
  IconSettings,
  IconArrowRight,
  IconDeviceAnalytics,
  IconBrowser,
} from '@tabler/icons'

const useStyles = createStyles<string, { collapsed?: boolean }>(
  (theme, params, getRef) => {
    const icon: string = getRef('icon')

    return {
      navbar: {
        position: 'sticky',
        top: 0,
        width: params?.collapsed ? 81 : 250,
        transition: params?.collapsed ? 'width 0.1s linear' : 'none',
      },

      header: {
        paddingBottom: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
      },

      footer: {
        paddingTop: theme.spacing.xs,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[2]}`,
      },

      logo: {
        ...theme.fn.focusStyles(),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: theme.spacing.sm,
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        fontWeight: 700,
      },

      link: {
        ...theme.fn.focusStyles(),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: theme.spacing.sm,
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        marginBottom: 4,
        fontWeight: 500,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[7],

          [`& .${icon}`]: {
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
          },
        },
      },

      linkActive: {
        '&, &:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? '#2C2E33' : '#ebeff2',
          color: theme.colorScheme === 'dark' ? '#ffffff' : '#16161a',
          [`& .${icon}`]: {
            color: theme.colorScheme === 'dark' ? '#ffffff' : '#16161a',
          },
        },
      },

      linkIcon: {
        ref: icon,
        color: theme.colors.gray[6],
      },

      linkLabel: params?.collapsed ? { display: 'none' } : {},
    }
  }
)

const ITEMS = [
  { href: getPath('INDEX'), label: 'Beranda', Icon: IconHome },
  { href: getPath('CONTENT'), label: 'Konten', Icon: IconArticle },
  { href: getPath('PORTOFOLIO'), label: 'Portofolio', Icon: IconBrowser },
  { href: getPath('SETTINGS'), label: 'Pengaturan', Icon: IconSettings },
]

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const [collapsed, handlers] = useDisclosure(false)
  const { classes, cx } = useStyles({ collapsed })

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link href={getPath('INDEX')}>
            <a className={classes.logo}>
              <IconDeviceAnalytics />
              <span className={classes.linkLabel}>Alwi Sofwan</span>
            </a>
          </Link>
        </Group>

        {ITEMS.map(({ label, href, Icon }) => (
          <Tooltip
            key={label}
            label={label}
            disabled={!collapsed}
            position="right"
            transitionDuration={0}
            withArrow
            sx={{ width: '100%' }}
          >
            <ActiveLink href={href} passHref>
              {(isActive) => {
                return (
                  <a
                    className={cx(classes.link, {
                      [classes.linkActive]: isActive,
                    })}
                  >
                    <Icon className={classes.linkIcon} />
                    <span className={classes.linkLabel}>{label}</span>
                  </a>
                )
              }}
            </ActiveLink>
          </Tooltip>
        ))}
      </Navbar.Section>

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Navbar.Section className={classes.footer}>
          <UnstyledButton className={classes.link} onClick={handlers.toggle}>
            {collapsed ? (
              <IconArrowRight className={classes.linkIcon} />
            ) : (
              <>
                <IconArrowLeft className={classes.linkIcon} />
                <span>Collapse</span>
              </>
            )}
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>

      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Navbar.Section className={classes.footer}>
          <UnstyledButton
            className={classes.link}
            onClick={() => getPath('INDEX')}
          >
            <Link href={getPath('INDEX')}>
              <a className={classes.link}>
                <IconArrowLeft className={classes.linkIcon} />
                <span>Kembali</span>
              </a>
            </Link>
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  )
}
