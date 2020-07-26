
Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
})






var app= new Vue({
  el:"#app-3",
  data:{
    grocerylist:[
      {id:0,text:'vegtables'},
      {id:1,text:'cheese'},
      {id:2,text: 'what ever else humans are supposed to eat'}
    ]
  }
})
