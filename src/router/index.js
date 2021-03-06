import Vue from 'vue'

import Router from 'vue-router'


import ques1 from '../components/question1.vue'
import ques2 from '../components/question2.vue'
import ques3 from '../components/question3.vue'
import ques5 from '../components/question5.vue'
import ques6 from '../components/question6.vue'
import ques7 from '../components/question7.vue'
import ques8 from  '../components/question8.vue'
import ques10 from '../components/question10.vue'

Vue.use(Router)

const routes=[{

path:'/ques1',

name:"ques1",

component:ques1

},
{
    path:'/ques2',
    name:"ques2",
    component:ques2
},
{
    path:'/ques3',
    name:"ques3",
    component:ques3
},
{
    path:'/ques5',
    name:"ques5",
    component:ques5
},
{
    path:'/ques6',
    name:"ques6",
    component:ques6
},
{
    path:'/ques7',
    name:"ques7",
    component:ques7
},
{
    path:'/ques8',
    name:"ques8",
    component:ques8
},

{
    path:'/ques10',
    name:"ques10",
    component:ques10
}
]
let router=new Router({routes})

export default router
