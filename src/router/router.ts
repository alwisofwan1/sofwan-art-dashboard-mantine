export const routes = [
    {
      path: '/',
      name: 'Beranda',
      role: 'all'
    },
    {
      path: '/app/content',
      name: 'Konten',
      role: 'all'
    },
    {
      path: '/app/setting',
      name: 'Pengaturan',
      role: ['admin']
    }
  ]
  