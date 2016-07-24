<script>
    import _ from 'lodash';
    import config from 'src/config';
    import v_fullpage from 'components/fullpage.vue';

    export default {
        el: '#app',
        created() {
            this.loading = true;
            this.type = this.$route.params.type;
            this.link = [config.Url_infopage, 'types=', this.type, '&id='].join('');
        },
        ready() {
            this.$http.get(config.Api_shoplist, {}, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response) {
                this.list = response.data.Result;
                this.loading = false;
            }, function(response) {
                this.list = [];
                this.loading = false;
            });
        },
        computed: {
            chunkList: function() {
                return _.chunk(this.list, 5);
            }
        },
        data () {
            return {
                list: [],
                hasData: true
            };
        },
        methods: {
            search: function() {
                let str = _.trim(this.searchStr);
                this.$http.get('http://test.zizhukongjian.com:2222/WX/GetCpInfoList?str=' + str, {}, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    emulateJSON: true
                }).then(function(response) {
                    this.list = response.data.Result;
                }, function(response) {
                    // handle error
                });
            }
        },
        components: {
            fullpage: v_fullpage
        }
    }
</script>
<template>
    <div class="list-title">
        <div class="list-title-ico {{type}}"></div>
    </div>
    <div class="list-con">
        <div class="search-con">
            <input class="search-input" type="text" @keyup.enter="search()" v-model="searchStr">
            <div class="search-btn" @click="search()">搜&nbsp;索</div>
        </div>
        <fullpage v-if="type === 'shop'" v-show="list.length > 0" class='shop' :chunk-list="chunkList" :link-start='link'></fullpage>
        <fullpage v-if="type === 'person'" v-show="list.length > 0" class='person' :chunk-list="chunkList" :link-start='link'></fullpage>
        <fullpage v-if="type === 'activity'" v-show="list.length > 0" class='activity' :chunk-list="chunkList" :link-start='link'></fullpage>
        <div v-show="!loading&&list.length <= 0" class="list-none">没有匹配的数据</div>
    </div>
</template>