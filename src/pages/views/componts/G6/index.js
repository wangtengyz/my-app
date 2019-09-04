import React, { Component } from 'react'
import Hello from './index.module.less'
import G6 from '@antv/g6'
import { graphConfig, graphData } from './constant.js'
import GreateG6 from './GreateG6'
// css 模块化
export default class ManageIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                nodes: [],
                edges: [],
            }
        }
    }
    // config = {
    //     // renderer: 'svg',
    //     width: window.innerWidth - 300,
    //     height: window.innerHeight - 300,
    //     pixelRatio: 2,
    //     modes: {
    //         default: [
    //             {
    //                 type: 'zoom-canvas',
    //                 sensitivity: 1,
    //             },
    //             {
    //                 type: 'activate-node',
    //             },
    //             'drag-canvas',
    //             'drag-node',
    //             {
    //                 type: 'tooltip',
    //                 formatText(model) {
    //                     return `<ul>
    //               <li>ID： ${model.id.replace('s', '')}</li>
    //               <li>名称： ${model.label}</li>
    //               <li>
    //                 状态：
    //                 <strong style="color: ${statusColorMap[model.runstatus]}" >
    //                   ${statusDescMap[model.runstatus] || '-'}
    //                 </strong>
    //               </li>
    //             </ul>`
    //                 },
    //             },
    //         ],
    //     },
    //     defaultNode: {
    //         shape: 'operation',
    //         labelCfg: {
    //             style: {
    //                 fill: '#666',
    //                 fontSize: 8,
    //             },
    //         },
    //     },
    //     defaultEdge: {
    //         shape: 'cubic-vertical',
    //     },
    //     edgeStyle: {
    //         default: {
    //             endArrow: {
    //                 path: [
    //                     ['M', -3, 3],
    //                     ['L', 3, 0],
    //                     ['L', -3, -3],
    //                     ['A', 0, 0, 0, 0, 1, -3, 3],
    //                     ['Z'],
    //                 ],
    //                 d: 2.5,
    //             },
    //             lineWidth: 1,
    //             stroke: '#c2cbd4',
    //         },
    //     },
    // }
    render() {
        return (
            <div>
                <div>g6======API练习</div>
                <GreateG6 config={graphConfig} chartData={graphData} />
            </div>
        )
    }
}