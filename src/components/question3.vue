<template>
  <div>
    <h3>Data</h3>
    <p>{{data1}}</p>
    <p>{{data2}}</p>
   <button @click="func()">Click</button>
  </div>
</template>

<script>
export default{
  name:"queS3",
  data(){
    return{
     data: [
            {"category1": [{ "name": "cat1", "description": "it is cat1", "details": ["name", "category", "age", "contact"]}]},
            {"category2": [{ "name": "cat2", "description": "it is cat2", "details": ["name2", "category2", "age2", "contact2"]}]}
],
data1:"",
data2:""
    }
  },
  methods:{
    func(){
      this.data1=this.data[0].category1[0].details
      this.data2=this.data[1].category2[0].details


    }
  }
}
</script>
