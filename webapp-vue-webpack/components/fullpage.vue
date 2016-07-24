<script>
    import _ from 'lodash';
    import config from 'src/config';

    // let cards = config_cards.map(function(item) {
    //     item.url = '/resource/cards/default/' + item.url;
    //     return new Card(item);
    // });
    

    export default {
        el: '#app',
        props: ['chunkList', 'linkStart'],
        created() {
        },
        ready() {
            let _this = this;
            _this.auto = setInterval(function(){
                _this.next();
            } , 5000);
        },
        data () {
            return {
                index: 0,
                listLen: 1
            }
        },
        methods: {
            prev: function() {
                let _this = this;
                clearInterval(_this.auto);
                if(this.index > 0) {
                    this.index--;
                }else {
                    this.index = this.listLen - 1;
                }
                _this.auto = setInterval(function(){
                    _this.next();
                } , 5000);
            },
            next: function() {
                let _this = this;
                clearInterval(_this.auto);
                if(this.index < this.listLen - 1) {
                    this.index++;
                }else {
                    this.index = 0;
                }
                _this.auto = setInterval(function(){
                    _this.next();
                } , 5000);
            }
        },
        watch: {
            'chunkList': function(newVal, oldVal){
                let _this = this;
                _this.listLen = newVal.length;
            }
        },
        components: {
            //card: card
        }
    }
</script>
<template>
    <div class="page-list" v-touch:swipeleft="next()" v-touch:swiperight="prev()">
        <ul v-show="index === $index" 
            transition="expand" 
            class="page res-list" 
            v-for="chunk in chunkList">
            <li class="list-item" v-for="item in chunk">
                <a :href="linkStart + item.CompanyId" class="list-link">
                    <div class="center-warp">
                        <h5>{{item.CompanyName}}</h5>
                        <p>{{item.SmsRemark}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>