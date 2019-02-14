<template>
  <div class="menu-w color-scheme-dark color-style-bright menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
    <div class="logo-w">
      <router-link :to="{ name: 'Dashboard'}">
        <img src="https://s3.amazonaws.com/navi-public/api/logo.png">
        <div class="logo-label">MMN 3.0</div>
      </router-link>
    </div>
    <div class="menu-actions">
      <div class="messages-notifications os-dropdown-trigger os-dropdown-position-right">
        <i class="os-icon os-icon-mail-14"></i>
        <div class="new-messages-count">12</div>
        <div class="os-dropdown light message-list">
          <ul>
            <li>
              <a href="#">
                <div class="user-avatar-w">
                  <img alt="" src="img/avatar1.jpg">
                </div>
                <div class="message-content">
                  <h6 class="message-from">
                    John Mayers
                  </h6>
                  <h6 class="message-title">
                    Account Update
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="user-avatar-w">
                  <img alt="" src="img/avatar2.jpg">
                </div>
                <div class="message-content">
                  <h6 class="message-from">
                    Phil Jones
                  </h6>
                  <h6 class="message-title">
                    Secutiry Updates
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="user-avatar-w">
                  <img alt="" src="img/avatar3.jpg">
                </div>
                <div class="message-content">
                  <h6 class="message-from">
                    Bekky Simpson
                  </h6>
                  <h6 class="message-title">
                    Vacation Rentals
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="user-avatar-w">
                  <img alt="" src="img/avatar4.jpg">
                </div>
                <div class="message-content">
                  <h6 class="message-from">
                    Alice Priskon
                  </h6>
                  <h6 class="message-title">
                    Payment Confirmation
                  </h6>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <SearchUser/>
    <h1 class="menu-page-header">
      Page Header
    </h1>
    <ul class="main-menu">
      <li class="sub-header">
        <span>Menu</span>
      </li>
      <li>
        <router-link :to="{ name: 'Dashboard'}">
          <div class="icon-w">
            <div class="os-icon os-icon-layout"></div>
          </div>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Products'}">
          <div class="icon-w">
            <div class="os-icon os-icon-box"></div>
          </div>
          <span>Products</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Order'}">
          <div class="icon-w">
            <div class="os-icon os-icon-file"></div>
          </div>
          <span> Orders</span>
        </router-link>
      </li>
      <li class="has-sub-menu">
        <a>
          <div class="icon-w">
            <div class="os-icon os-icon-dollar-sign"></div>
          </div>
          <span> Financial</span>
        </a>
        <div class="sub-menu-w">
          <div class="sub-menu-header">
            Financial
          </div>
          <div class="sub-menu-icon">
            <i class="os-icon os-icon-dollar-sign"></i>
          </div>
          <div class="sub-menu-i">
            <ul class="sub-menu">
              <li>
                <router-link :to="{ name: 'FinancialWithdraw'}">
                  <span> Withdraw</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="sub-header">
        <span>System Configs</span>
      </li>
      <li class="has-sub-menu">
        <a>
          <div class="icon-w">
            <div class="os-icon os-icon-ui-46"></div>
          </div>
          <span>Config</span>
        </a>
        <div class="sub-menu-w">
          <div class="sub-menu-header">
            Config
          </div>
          <div class="sub-menu-icon">
            <i class="os-icon os-icon-ui-46"></i>
          </div>
          <div class="sub-menu-i">
            <ul class="sub-menu">
              <li>
                <router-link :to="{ name: 'SysBusiness'}">
                  <span>Business</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Bonus'}">
                  <span>Bonus</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'AditionalBonus'}">
                  <span>Aditional Bonus</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'SysGraduations'}">
                  <span> Graduations</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>


      <li>
        <router-link :to="{ name: 'BusinessPlan'}">
          <div class="icon-w">
            <div class="os-icon os-icon-sliders"></div>
          </div>
          <span> Summary</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import SearchUser from '@/components/users/search.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SearchUser
  }
}


</script>
