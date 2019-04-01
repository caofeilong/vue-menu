class Entry {
    constructor(readonly label: string) { }
    readonly children: { [label: string]: Entry | undefined } = {}
}


const root = new Entry('#root')
const fileList = require('raw-loader!./filelist.txt').default as string
const paths = fileList.split('\n').filter(path => path.length > 0)


for (const path of paths) {
    const route = path.split('/').slice(1)
    let entry = root
    for (const name of route) {
        if (entry.children[name])
            entry = entry.children[name]!
        else
            entry = entry.children[name] = new Entry(name)
    }
}


import Vue, * as vue from 'vue'
import { Menuitem } from "../../../src"


function menuitem(h: vue.CreateElement, entry: Entry): vue.VNode {
    return Object.keys(entry.children).length > 0 ?
        h(
            Menuitem,
            { props: { label: entry.label } },
            Object.keys(entry.children).sort().map(name => menuitem(h, entry.children[name]!))
        ) :
        h(
            Menuitem,
            { props: { label: entry.label } }
        )
}


export default {
    render(h: vue.CreateElement) {
        return h('div', Object.keys(root.children).map(k =>
            menuitem(h, root.children[k]!)
        ))
    }
} as vue.Component