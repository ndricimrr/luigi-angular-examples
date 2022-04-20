Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/sampleapp.html#/sample1'
          },
          {
            pathSegment: 'angular',
            label: 'Angular',
            icon: 'role',
            viewUrl: 'http://localhost:4444/',
            loadingIndicator: {
              enabled: false,
            },
            children: [
              {
                pathSegment: 'main',
                label: 'Orders',
                icon: '',
                viewUrl: 'http://localhost:4444/orders',
                virtualTree: true,
              }
            ]
          },
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi Angular App',
      logo: '/logo.svg'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
