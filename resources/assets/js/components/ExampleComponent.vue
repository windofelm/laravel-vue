<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component! Message: {{message}}
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/index'
    import {mapState} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        mounted() {
            console.log('Component mounted.')
            //axios.get("users").then(function(response){

                //console.log("First User:", response.data[0].name);

                store.dispatch('unshiftTodo')

                let todos = store.getters.allTodos;
                console.log(todos[0].text);


                /*store.dispatch('getUsers').then(() => {
                    let users = store.getters.getUsers;
                    //console.log(users);
                    //console.log("First User:", store.getters.getusers);
                })*/

            //});
        },
        data : function() {
            return {
                message : "Example message.."
            }
        },
        computed: {
            ...mapGetters([
                'getUsers'
            ]),
             ...mapGetters([
                'getUsers'
            ])
        },
        methods: {
            ...mapActions([
                'getUsers', // map `this.getUsers()` to `this.$store.dispatch('getUsers')`
            ]),
        }
        
    }
</script>
