import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login.vue'
import Users from '@/components/users/list.vue'
import Products from '@/components/products/index.vue'
import ProductsDetails from '@/components/products/details.vue'
import SysBusiness from '@/components/sys/business.vue'
import SysGraduations from '@/components/sys/graduations.vue'
import Bonus from '@/components/sys/bonus/index.vue'
import AditionalBonus from '@/components/sys/bonus/aditional.vue'
import FinancialWithdraw from '@/components/financial/withdraw.vue'
import FinancialWithdrawID from '@/components/financial/withdrawId.vue'
import BusinessPlan from '@/components/business/plan.vue'

import Order from '@/components/orders/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Users,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/products/details/:id',
      name: 'ProductsDetails',
      component: ProductsDetails,
      props: true,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/sys/business',
      name: 'SysBusiness',
      component: SysBusiness,
      props: true,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/bonus',
      name: 'Bonus',
      component: Bonus,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/aditional-bonus',
      name: 'AditionalBonus',
      component: AditionalBonus,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/sys/graduations',
      name: 'SysGraduations',
      component: SysGraduations,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/financial/withdraw',
      name: 'FinancialWithdraw',
      component: FinancialWithdraw,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/financial/withdraw/:id',
      name: 'FinancialWithdrawID',
      component: FinancialWithdrawID,
      props: true,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/business/plan',
      name: 'BusinessPlan',
      component: BusinessPlan,
      meta: {
        forAuth: true
      }
    },
  ],
  mode: 'history'
})
