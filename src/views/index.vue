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


        <!--全局組件-->
        <my-component>

            <p slot="mySlot">
                This is slot content!
            </p>

        </my-component>

        <!--局部組件-->
        <my-component1 message="props message"></my-component1>


    </div>

</template>
<template id="myComponent2">
    <div>
        <h2>{{ msg }}</h2>

        <button @click="showMsg">Show Message</button>
    </div>
</template>
<script>

    export default {

        data: function () {
            return {
                msg: 'This is a component!'
            }
        },
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            showMsg: function () {
                alert(this.msg)
            }
        },
        components: {
            'my-component1': {
                props: ['message'],
                template: '<div>A custom component11! {{message}}' +
                '<slot name="mySlot"></slot>' +
                '</div>'
            }
        }
    }
</script>
