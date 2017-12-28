Vue.component("custom-input",{
    props:["custommove","title"],
    template:`
    <div class="select-input">
            <input type="text" @focus="focus" v-model="title">
        </div>
    `,
    methods:{
        focus(){
         this.$emit("custommove");
        }
    }

})

Vue.component("custom-list",{
    props:["listData","custommove","status"],
    template:`
    <ul class="select-list" v-show="status==true" >
            <li v-for="item in listData" @click="click(item.title)">{{item.title}}</li>
        </ul>
    `,
    methods:{
       click(val){
           this.$emit("custommove",val)
       }
    }
})