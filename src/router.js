import {createRouter,createWebHistory} from 'vue-router'
import buildings from './Views/buildings.vue'
import main from './Views/main.vue'
import flat from './Views/flat.vue'
import building from './Views/building'
import empSearch from './Views/empSearch'
import employee from './Views/employee.vue'
import newBuilding from './Views/newBuilding.vue'
import profile from './Views/profile.vue'
import newEmp from './Views/newEmp.vue'
import newFlat from './Views/newFlat.vue'
import customers from './Views/customers.vue'
import login from './Views/login.vue'




export const router =createRouter({
    history:createWebHistory(),
    routes:[
      
        {
            path:'/',
            component:login,
        },

        {
            path:'/main',
            component:main,
        },
        {
        path:'/buildings',
        component: buildings,
    },
    {
        path:'/newBuilding',
        component: newBuilding,
    },
    {
        path:'/building/:id',
        component:building,
    },
    {
        path:'/flat/:id',
        component:flat
    },
    {
        path:'/empSearch',
        component:empSearch
    },
    {
    path:'/employee/:id',
    component:employee
    },
    {
        path:'/profile',
        component:profile
        },
        {
            path:'/customers',
            component:customers
            },
        {
            path:'/newEmp',
            component:newEmp
            },
            {
                path:'/newFlat/:id',
                component:newFlat
                },


]
})