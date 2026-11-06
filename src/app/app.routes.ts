import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/storefront-layout/storefront-layout.component')
        .then(m => m.StorefrontLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/storefront/pages/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./features/storefront/pages/brands/brands.component')
            .then(m => m.BrandsComponent)
      },
      {
        path: 'brands/:slug',
        loadComponent: () =>
          import('./features/storefront/pages/brand-details/brand-details.component')
            .then(m => m.BrandDetailsComponent)
      },
      {
        path: 'women',
        loadComponent: () =>
          import('./features/women/pages/women-home/women-home.component')
            .then(m => m.WomenHomeComponent)
      },
      {
        path: 'women/:category',
        loadComponent: () =>
          import('./features/women/pages/women-home/women-home.component')
            .then(m => m.WomenHomeComponent)
      },
      {
        path: 'men',
        loadComponent: () =>
          import('./features/men/pages/men-home/men-home.component')
            .then(m => m.MenHomeComponent)
      },
      {
        path: 'men/:category',
        loadComponent: () =>
          import('./features/men/pages/men-home/men-home.component')
            .then(m => m.MenHomeComponent)
      },
      {
        path: 'kids',
        loadComponent: () =>
          import('./features/kids/pages/kids-home/kids-home.component')
            .then(m => m.KidsHomeComponent)
      },
      {
        path: 'kids/:category',
        loadComponent: () =>
          import('./features/kids/pages/kids-home/kids-home.component')
            .then(m => m.KidsHomeComponent)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/storefront/pages/product-list/product-list.component')
            .then(m => m.ProductListComponent)
      },
      {
        path: 'products/:slug',
        loadComponent: () =>
          import('./features/storefront/pages/product-details/product-details.component')
            .then(m => m.ProductDetailsComponent)
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./features/storefront/pages/search/search.component')
            .then(m => m.SearchComponent)
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/storefront/pages/cart/cart.component')
            .then(m => m.CartComponent)
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./features/storefront/pages/checkout/checkout.component')
            .then(m => m.CheckoutComponent)
      }
    ]
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./layouts/customer-layout/customer-layout.component')
        .then(m => m.CustomerLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/customer/pages/profile/profile.component')
            .then(m => m.ProfileComponent)
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/customer/pages/orders/orders.component')
            .then(m => m.OrdersComponent)
      }
    ]
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./layouts/employee-layout/employee-layout.component')
        .then(m => m.EmployeeLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/employee/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      }
    ]
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component')
        .then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
