import Vue, {CreateElement} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {RawLocation} from 'vue-router';
// import {mixins} from 'vue-class-component';
// import router from '@/router';
// import RouterLink from 'vue-router/src/components/link.js'
// import RouterLink from 'vue-router/src/components/link';

const toTypes: Array<() => {}> = [String, Object];

@Component({
    inheritAttrs: false
})
export default class IfRouterLink extends Vue {
    @Prop({
        type: toTypes,
        default: '/',
        required: true
    })
    protected to: RawLocation;

    protected get resolvedHref() {
        return this.$router.resolve(this.to).href;
    }

    protected renderRouterLink(h: CreateElement) {
        return h('span', {
            on: {
                click: (event) => {
                    event.preventDefault();
                    // this.$listeners.handler();
                }
            }
        }, [
            h(`router-link`, {
                props: {
                    to: this.to
                },
                on: {
                    // click: (event) => {
                    //     event.preventDefault();
                    //     this.$listeners.handler();
                    // }
                }
            }, this.$slots.default)
        ]);

        // return h(`router-link`, {
        //     props: {
        //         to: this.to
        //     },
        //     on: {
        //         click: (event) => {
        //             event.preventDefault();
        //             this.$listeners.handler();
        //         }
        //     }
        // }, this.$slots.default);
    }

    // protected renderLink(h: CreateElement) {
    //     return h('a', {
    //         attrs: {
    //             ...this.$attrs,
    //             href: this.resolvedHref
    //         },
    //         on: {
    //             click: (event) => {
    //                 // const result = this.$listeners.handler(event);
    //                 const isExecute = this.$listeners.condition(event);
    //                 console.log(isExecute);
    //                 !isExecute && event.preventDefault();
    //             }
    //         }
    //     }, this.$slots.default);
    // }

    protected render(h: CreateElement) {
        return this.renderRouterLink(h);
    }
}