
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'DogRandom', name: 'DogRandom', component: () => import('pages/DogRandom.vue') },
      { path: 'DogSearch', name: 'DogSearch', component: () => import('pages/DogSearch.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
