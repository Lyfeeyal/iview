<template>
    <div class="" justify="center">
        <h1 align="center">
            <img src="../images/logo.png">
        </h1>
        <h2 align="center">
            <p>Welcome to your iView app!</p>
            <Button type="ghost" @click="handleStart">Start iView</Button>
            <a type="ghost" href="/page2">Start iView</a>
        </h2>
        <!--<Col span="24">
        </Col>-->
        <!--<Row type="flex" justify="center" align="middle">-->
        <!--</Row>-->
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    }
</script>
