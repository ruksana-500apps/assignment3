import Vue from 'vue'

import Router from 'vue-router'

//import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

const routes=[{

path:'/ques9',

name:"q5",

component:ques9

},

{

path:'/ques5',

name:"traindata",

component:ques5

},

{

path:'/ques6',

name:"map",

component:ques6

},

{

path:'/ques7',

name:"foreach",
component:ques7

},

{

path:'/ques8',

name:"indexs",

component:ques8

},

{

path:'/ques1',

name:"namechange",

component:ques1

},

{

path:'/ques2',

name:"stringlit",

component:ques2

},

{

path:'/ques3',

name:"spread",

component:ques3

},
{

    path:'/ques8',
    
    name:"indexs",
    
    component:ques8
    
    }

]

let router=new Router({routes})

export default router


