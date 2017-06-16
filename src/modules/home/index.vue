<template>
    <div class="" justify="center">
        <h1 align="center">
            <img src="../../images/logo.png">
        </h1>
        <h2 align="center">
            <p>Welcome to Home module!</p>

            <Button type="primary" @click="handleStart">Go home-index page1</Button>
        </h2>


        <my-component></my-component>


    </div>
</template>
<script>
    export default {

        methods: {
            handleStart () {
                console.log("!11111111");
                this.$router.push('/home-index/page1');
            }
        }
    }

</script>
