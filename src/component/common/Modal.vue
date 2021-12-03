<template>
    <v-dialog
        :value="value"
        :width="width"
        @input="close"
        :persistent="persistent"
        scrollable>
        <v-card color="container_body">
            <v-toolbar color="container_header"
                       >
                <v-toolbar-title>
                    <slot name="title"></slot>
                </v-toolbar-title>
                <slot name="addTitle"></slot>
                <v-btn icon class="ml-auto" @click="close">
                    <v-icon color="error">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text class="px-5 pt-5">
                <slot name="content"></slot>
            </v-card-text>
            <v-card-actions class="pa-4">
                <slot name="action-secondary">
                    <v-btn @click="close" width="120" color="error">Отмена</v-btn>
                </slot>
                <v-spacer/>
                <div @click="close">
                    <slot name="action-primary"></slot>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Modal",
    /*
            data () {
                return {
                    show: false,
                }
            },
    */
    props:{

        persistent:{
            type: Boolean,
            default: false,
        },

        value:{
            type: Boolean,
            default: false,
        },
        width:{
            type: String,
            default: '400',
        }
    },
    /*
            watch:{
                value(val/!*, oldv*!/){
                    // console.log('watch', newv, oldv);
                    this.show = val;
                },
            },
    */

    computed: {
        ...mapGetters([
            ''
        ]),
    },

    methods: {
        close() {
            // this.show = false;
            this.$emit('input', false);
            this.$emit('m-close');
        },
    },
    created(){
        // this.show = this.value;
        // console.log(this.show);
    },
    updated(){
        // this.show = this.value;
        // console.log('updated', this.show);
    }
}
</script>

<style scoped>

</style>
