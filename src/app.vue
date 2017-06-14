<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }

    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout" style="height: 100%;">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo" style="line-height: 36px;color: #00cc66;" align="middle">LOGO</div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant" align="center">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-content" v-bind:style="{height:contentH}">
            <Row style="height: 100%;">
                <i-col span="5" style="height: 100%;">

                    <Menu style="height: 100%;overflow-y: scroll;" active-name="" width="auto" :open-names="[]"
                          @on-select="onSelect">

                        <Submenu name="1" v-for="item in items">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                {{item.navTitle}}
                            </template>

                            <Menu-item v-bind:name="one.href" v-for="one in item.items">
                                {{one.name}}
                            </Menu-item>
                        </Submenu>
                    </Menu>


                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
            <span @click="stateGO('go')">Start iView</span>
        </div>
    </div>
</template>
<script>

    import navConfig from './nav-config.js';
    export default {
        data: function () {

            return {
                items: navConfig
            }
        }
        ,
        computed: {
            contentH: function () {
                console.log(document.body.clientHeight);
                return (document.body.clientHeight - 200) + 'px';
            }
        }
        ,
        methods: {
            onSelect: function (state) {
                console.log(state);
                this.$router.push(state);
            }
        }
    }
</script>

