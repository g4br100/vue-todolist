const {createApp} = Vue;
createApp({
    data (){
        return {
            ntsk:"",
            items:[],
        }
    },
    methods:{
        addtsk(){
            if (this.ntsk !== ""){
                const newItem ={
                    text : this.ntsk,
                    status : false
                };
                this.items.unshift(newItem);
                this.ntsk="";
            }
        },
        taskD(indice){
            if (this.items[indice].status === false){
                this.items[indice].status = true;
            }
            else {
                this.items[indice].status=false;
            }
        },
        deltask(indice){
            this.items.splice(indice,1);
        }
    }
}).mount("#app");