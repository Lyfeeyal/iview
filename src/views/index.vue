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

        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>

        <!--全局組件-->
        <my-component>

            <p slot="mySlot">
                This is slot content!
            </p>

        </my-component>

        <!--局部組件-->
        <my-component1></my-component1>
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
        },
        components: {
            'my-component1': {
                template: '<div>A custom component11!' +
                '<slot name="mySlot"></slot></div>'
            }
        }
    }
</script>
