import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from '../views/Home.vue'
import Integral from '../views/Integral.vue'
import Firsthome from '../views/Firsthome.vue'
import Storedetail from '../views/Storedetail.vue'
import Xzservice from '../views/Xzservice.vue'
import Submitorder from '../views/Submitorder.vue'
import Paysuccess from '../views/Paysuccess.vue'
import Orderdetail from '../views/Orderdetail.vue'
import Storelist from '../views/Storelist.vue'
import Myselef from '../views/Myselef.vue'
import Myorder from '../views/Myorder.vue'
import Evaluate from '../views/Evaluate.vue'
import Refund from '../views/Refund.vue'
import Garage from '../views/Garage.vue'
import Addgarage from '../views/Addgarage.vue'
import Brand from '../views/Brand.vue'
import Editvegicle from '../views/Editvegicle.vue'
import Recharge from '../views/Recharge.vue'
import Integraldetail from '../views/Integraldetail.vue'
import AddMyCar from '../views/AddMyCar.vue'
import ChooseBrand from '../views/ChooseBrand.vue'
import ChooseModel from '../views/ChooseModel.vue'
import ChooseSeries from '../views/ChooseSeries.vue'
import Couponsdetail from '../views/Couponsdetail.vue'
import Materialdetail from '../views/Materialdetail.vue'
import Submitintegral from '../views/Submitintegral.vue'
import Addressguan from '../views/Addressguan.vue'
import Addressadd from '../views/Addressadd.vue'
import Exchangerecord from '../views/Exchangerecord.vue'
import Integralorder from '../views/Integralorder.vue'
import Aftersale from '../views/Aftersale.vue'
import Interevalute from '../views/Interevalute.vue'
import Storesx from '../views/Storesx.vue'
import Physicalsupply from '../views/Physicalsupply.vue'
import Vouchercenter from '../views/Vouchercenter.vue'
import Couponbag from '../views/Couponbag.vue'
import Myvoucher from '../views/Myvoucher.vue'
import Myinfomation from '../views/Myinfomation.vue'
import Mycollection from '../views/Mycollection.vue'
import Partnership from '../views/Partnership.vue'
import Aboutus from '../views/Aboutus.vue'
import Feedback from '../views/Feedback.vue'
import Ceshi from '../views/Ceshi.vue'
import Ordersucess from '../views/Ordersucess.vue'
import Genneralevalut from '../views/Genneralevalut.vue'
import Myorderdetail from '../views/Myorderdetail.vue'
import City from '../views/City.vue'

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
  children: [{
    path: '/integral',
    name: 'Integral',
    component: Integral,
    meta: {
      'name2': '????????????'
    }
  }, {
    path: '/',
    name: 'Firsthome',
    component: Firsthome,
    meta: {
      'name2': '????????????'
    }
  }, {
    path: '/storelist',
    name: 'Storelist',
    component: Storelist,
    meta: {
      'name2': '????????????'
    }
  }, {
    path: '/myselef',
    name: 'Myselef',
    component: Myselef,
    meta: {
      'name2': '????????????'
    }
  }]
}, {
  path: '/storedetail',
  name: 'Storedetail',
  component: Storedetail,
  meta: {
    'name': '????????????',
    'name2': '??????????????????'

  }
}, {
  path: '/xzservice',
  name: 'Xzservice',
  component: Xzservice
}, {
  path: '/submitorder',
  name: 'Submitorder',
  component: Submitorder,
  meta: {
    'name': '????????????',
    'name2': '????????????',
  }

}, {
  path: '/paysuccess',
  name: 'Paysuccess',
  component: Paysuccess,
     // 'name': '????????????',
  meta: {
 
    'name2': '????????????',
  }
}, {
  path: '/orderdetail',
  name: 'Orderdetail',
  component: Orderdetail,
  meta: {
    'name': '???????????????',
    'name2': '????????????',
  }
}, {
  path: '/myorder',
  name: 'Myorder',
  component: Myorder,
  meta: {
    'name': '??????',
    'name2': '????????????',
  }
}, {
  path: '/evaluate',
  name: 'Evaluate',
  component: Evaluate
}, {
  path: '/refund',
  name: 'Refund',
  component: Refund
}
  , {
  path: '/garage',
  name: 'Garage',
  component: Garage,
  meta:{
    'name':'????????????',
    'name2':'????????????',
  }
}, {
  path: '/addgarage',
  name: 'Addgarage',
  component: Addgarage
}, {
  path: '/brand',
  name: 'Brand',
  component: Brand
}, {
  path: '/editvegicle',
  name: 'Editvegicle',
  component: Editvegicle,
  meta:{
    'name':'????????????',
    'name2':'????????????',
  }
}, {
  path: '/addmycar',
  name: 'AddMyCar',
  component: AddMyCar
}, {
  path: '/choosebrand',
  name: 'ChooseBrand',
  component: ChooseBrand,
  meta:{
    'name2':'????????????',
  }

}, {
  path: '/choosemodel',
  name: 'ChooseModel',
  component: ChooseModel,
  meta:{
    'name2':'????????????',
  }
}, {
  path: '/chooseseries',
  name: 'ChooseSeries',
  component: ChooseSeries,
  meta:{
    'name2':'????????????',
  }
}, {
  path: '/couponsdetail',
  name: 'Couponsdetail',
  component: Couponsdetail
}, {
  path: '/materialdetail',
  name: 'Materialdetail',
  component: Materialdetail,
  meta:{
    'name':'????????????',
    'name2':'????????????'
  }
}, {
  path: '/submitintegral',
  name: 'Submitintegral',
  component: Submitintegral,
  meta:{
    'name':'????????????',
    'name2':'????????????'
  }

}, {
  path: '/addressguan',
  name: 'Addressguan',
  component: Addressguan
}, {
  path: '/addressadd',
  name: 'Addressadd',
  component: Addressadd
}, {
  path: '/exchangerecord',
  name: 'Exchangerecord',
  component: Exchangerecord,
  meta:{
    'name':'????????????',
    'name2':'??????????????????',
  }
}, {
  path: '/integralorder',
  name: 'Integralorder',
  component: Integralorder,
  meta:{
    'name':'????????????',
    'name2':'????????????',
  }
}, {
  path: '/aftersale',
  name: 'Aftersale',
  component: Aftersale
}, {
  path: '/interevalute',
  name: 'Interevalute',
  component: Interevalute,
  meta: {
    'name': '????????????'
  }
}, {
  path: '/integraldetail',
  name: 'Integraldetail',
  component: Integraldetail,
  meta: {
    'name': '????????????',
    'name2': '????????????'
  }
}, {
  path: '/recharge',
  name: 'Recharge',
  component: Recharge,
  meta: {
    'name': '????????????',
    'name2': '????????????',
  }
}, {
  path: '/storesx',
  name: 'Storesx',
  component: Storesx,
  meta: {
    'name': '????????????',
    'name2': '??????????????????',
  }
}, {
  path: '/physicalsupply',
  name: 'Physicalsupply',
  component: Physicalsupply,
  meta: {
    'name': '????????????'
  }
}, {
  path: '/vouchercenter',
  name: 'Vouchercenter',
  component: Vouchercenter,
  meta: {
    'name': '???????????????',
    'name2': '????????????'
  }
}, {
  path: '/couponbag',
  name: 'Couponbag',
  component: Couponbag,
  meta: {
    'name': '????????????',
    'name2': '????????????',
  }
}, {
  path: '/myvoucher',
  name: 'Myvoucher',
  component: Myvoucher,
  meta: {
    'name': '????????????',
    'name2': '???????????????',
  }
},{
  path: '/myinfomation',
  name: 'Myinfomation',
  component: Myinfomation,
  meta: {
    'name': '????????????'
  }
},{
  path: '/mycollection',
  name: 'Mycollection',
  component: Mycollection,
  meta: {
    'name': '????????????',
    'name2': '????????????',
  }
},{
    path: '/partnership',
    name: 'Partnership',
    component: Partnership,
    meta: {
      'name': '????????????'
    }
},{
  path: '/aboutus',
  name: 'Aboutus',
  component: Aboutus,
  meta: {
    'name': '????????????'
  }
},{
  path: '/feedback',
  name: 'Feedback',
  component: Feedback,
  meta: {
    'name': '????????????'
  }
},{
  path: '/ceshi',
  name: 'Ceshi',
  component: Ceshi,
  meta: {
    'name': '??????'
  }
},{
  path: '/ordersucess',
  name: 'Ordersucess',
  component: Ordersucess,
  // meta: {
  //   'name': '????????????'
  // }
},{
  path: '/genneralevalut',
  name: 'Genneralevalut',
  component: Genneralevalut,
  meta: {
    'name': '????????????'
  }
},{
  path: '/myorderdetail',
  name: 'Myorderdetail',
  component: Myorderdetail,
  meta: {
    'name': '????????????',
    'name2': '????????????',
  }
},{
  path: '/city',
  name: 'City',
  component: City,
  meta: {
    'name': '??????'
  }
}












]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router