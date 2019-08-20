import { Vue, Component, Prop } from 'vue-property-decorator'
import { CreateElement } from "vue"
import * as keybind from '@caofeilong/keybind'


@Component
export class Keybinder extends Vue {
    @Prop({ required: true, type: String })
    source!: string

    @Prop({ type: Boolean, default: true })
    enabled!: boolean

    off!: () => void

    created() {
        this.off = keybind.on(this.source, e => {
            this.enabled && this.$emit('keybindmatch')
        })
    }

    updated() {
        console.warn('Changing keybind dynamically is not supported.')
    }

    beforeDestroy() {
        this.off()
    }

    render(h: CreateElement) { }
}
