import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Subscription from '../views/Subscription'
import Myaccount from '../views/myaccount'
import Home from '../views/Home.vue'
import Registration from '../views/registration.vue'

var user = localStorage.getItem('user')
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/Category/:name?/:id?',
  name: 'Category',
  component: () =>
    import('../views/Category.vue')
},
{
  path: '/CategoryName/:name?/:id?',
  name: 'CategoryName',
  component: () =>
    import('../views/CategoryName.vue')
},
{
  path: '/Opinion/:name?/:id?',
  name: 'Opinion',
  component: () =>
    import('../views/opinion.vue')
},
{
  path: '/SearchNews/:name?/:id?',
  name: 'SearchNews',
  component: () =>
    import('../views/SearchNews.vue')
},
{
  path: '/Detail/:id?',
  name: 'Detail',

  component: () =>
    import('../views/Detail.vue')
},
{
  path: '/OpinianDetail/:id?',
  name: 'OpinianDetail',

  component: () =>
    import('../views/OpinianDetail.vue')
},
{
    path: '/login/',
    name: 'login',
    component: user ? Myaccount : Login 
},
{
  path: '/Subscription/',
  name: 'Subscription',
  component: user ? Subscription : Login 
},
{
  path: '/Payment/',
  name: 'Payment',
  component: () =>
      import('../views/Payment.vue')
},
{
  path: '/EBook/',
  name: 'EBook',
  component: () =>
      import('../views/EBook.vue')
},
{
  path: '/Ebook-Paper/:id?',
  name: 'Ebook-Paper',
  component: () =>
      import('../views/Ebook-Paper.vue')
},
// {
//   path: '/textInvoice/',
//   name: 'textInvoice',
//   component: () =>
//       import('../views/textInvoice.vue')
// },
// {
//   path: '/gallery/',
//   name: 'gallery',
//   component: () =>
//       import('../views/Gallery.vue')
// },
{
  path: '/SignIn/',
  name: 'SignIn',
  component: user ? Myaccount :  Registration
},
  {
      path: '/myaccount/',
      name: 'myaccount',
      component:  user ? Myaccount : Login ,
  },
   {
      path: '/Author/:id?',
      name: 'Author',
      component: () =>
          import('../views/Author.vue')
  },
  // {
  //     path: '/aboutus/',
  //     name: 'aboutus',
  //     component: () =>
  //         import('../views/aboutus.vue')
  // },
  // {
  //   path: '/XmlTest/',
  //   name: 'XmlTest',
  //   component: () =>
  //       import('../views/XmlTest.vue')
  // },
  // {
  //   path: '/invoice/:id',
  //   name: 'invoice',
  //   component: () =>
  //       import('../views/Invoice.vue')
  // },

  // {
  //     path: '/wishlist/',
  //     name: 'wishlist',
  //     component: () =>
  //         import('../views/wishlist.vue')
  // },
  {
      path: '/contactus',
      name: 'contactus',
      component: () =>
          import('../views/contactus.vue')
  },
  {
      path: '/privecypolicy',
      name: 'privecypolicy',
      component: () =>
          import('../views/privecypolicy.vue')
  },
  {
      path: '/TermsConditions',
      name: 'TermsConditions',
      component: () =>
          import('../views/TermsConditions.vue')
  },
  {
      path: '/success',
      name: 'success',
      component: () =>
          import('../views/success.vue')
  },
  // {
  //     path: '/orderDetail',
  //     name: 'orderDetail',
  //     component: () =>
  //         import('../views/orderDetail.vue')
  // },
  // {
  //     path: '/forget',
  //     name: 'forget',
  //     component: () =>
  //         import('../views/forget.vue')
  // },
  // {
  //     path: '/resetpassword',
  //     name: 'resetpassword',
  //     component: () =>
  //         import('../views/resetpassword.vue')
  // },
  // {
  //   path: '/shippingtest',
  //   name: 'shippingtest',
  //   component: () =>
  //       import('../views/ShippingTest.vue')
  // },
  // {
  //   path: '/TrackOrder/:id',
  //   name: 'TrackOrder',
  //   component: () =>
  //       import('../views/TrackOrder.vue')
  // }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  var user = localStorage.getItem('user')
  var check_2 = localStorage.getItem('local_mobile');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      if (check_2 != null) {
        var paths = '/Signup';
      } else {
        var paths = '/Step1';
      }
      next({
        path: paths,
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
  if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (user) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
