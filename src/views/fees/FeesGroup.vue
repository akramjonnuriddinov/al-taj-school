<template>
    <div>
        <b-row class="p-2 border-bottom" v-for="item in count">
            <b-col cols="10" class="text-start">
                <div>test</div>
                <div class="fw-light">test</div>
            </b-col>
            <b-col cols="1">
                <img style="width: 32px !important" src="https://cdn3d.iconscout.com/3d/premium/thumb/pencil-2997200-2516238.png" alt="">
            </b-col>
            <b-col cols="1">
                <img @click="count--" style="width: 32px !important" src="https://cdn3d.iconscout.com/3d/premium/thumb/trash-4267917-3543861.png" alt="">
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 5
            }
        }
    }
</script>