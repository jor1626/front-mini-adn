import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/admin/',
    title: 'Starter Page',
    icon: 'mdi mdi-gauge',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '',
  //   title: 'UI Components',
  //   icon: '',
  //   class: 'nav-small-cap',
  //   label: '',
  //   labelClass: '',
  //   extralink: true,
  //   submenu: []
  // },
  // {
  //   path: '',
  //   title: 'Component',
  //   icon: 'mdi mdi-bullseye',
  //   class: 'has-arrow',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/admin/accordion',
  //       title: 'Accordion',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/alert',
  //       title: 'Alert',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/carousel',
  //       title: 'Carousel',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/dropdown',
  //       title: 'Dropdown',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/modal',
  //       title: 'Modal',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/pagination',
  //       title: 'Pagination',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/poptool',
  //       title: 'Popover & Tooltip',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/progressbar',
  //       title: 'Progressbar',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/rating',
  //       title: 'Ratings',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/tabs',
  //       title: 'Tabs',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/timepicker',
  //       title: 'Timepicker',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/buttons',
  //       title: 'Button',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/admin/cards',
  //       title: 'Card',
  //       icon: '',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     }
  //   ]
  // },
  {
    path: '',
    title: 'Informes',
    icon: 'mdi mdi-arrange-send-backward',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/admin/balance-general',
        title: 'Balance General',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/estado-resultado',
        title: 'Estado Resultado',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/existencia-articulo',
        title: 'Existencia Articulos',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
];
