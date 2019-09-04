import React, { Component } from 'react'
import PropTypes from 'prop-types'
import G6 from '@antv/g6'
let uniqueId = 0;

const generateUniqueId = () => {
  return `rc-g6-${uniqueId++}`;
}


export default
  class GreateG6 extends Component {
  constructor(props) {
    super(props);
    this.graph = null;
    this.graphId = generateUniqueId();
    // this.g = null;
  }

  componentDidMount() {
    // this.initGraph(this.props);
    this.initCustomNode()
    this.initGraph(this.props)
  }

  componentWillReceiveProps(newProps) {
    // const { width: newWidth, height: newHeight, data: newData } = newProps;
    // const { width: oldWidth, height: oldHeight, data: oldData } = this.props;

    // if (newWidth !== oldWidth || newHeight !== oldHeight) {
    //   this.graph.changeSize(newWidth, newHeight);
    // }
    // if (newData !== oldData) {
    //   this.initDagreData(newData)
    // }
  }

  shouldComponentUpdate() {
    // return false;
  }

  componentWillUnmount() {
    // const {
    //   nodeClick
    // } = this.props
    // this.graph.off('click', nodeClick)
    // this.graph.destroy();
    // this.graph = null;
    // this.graphId = null;
  }

  initDagre() {
    // this.g = new Dagre.graphlib.Graph()
    // this.g.setDefaultEdgeLabel(function() {
    //   return {};
    // });
    // this.g.setGraph({
    //   rankdir: 'TB'
    // });
  }

  // 清除上一次布局
  clearLayout() {
    // const {
    //   g
    // } = this

    // g.nodes().forEach((node, i) => {
    //   // g会一直保存之前设置过的节点，如果data中没有就清除
    //   g.removeNode(node)
    // })

    // g.edges().forEach((edge, i) => {
    //   // g会一直保存之前设置过的节点，如果data中没有就清除
    //   g.removeEdge(edge)
    // })
  }

  initDagreData(data) {
    // const {
    //   g,
    //   graph
    // } = this

    // this.clearLayout()
    // data.nodes.forEach(node => {
    //   g.setNode(`${node.id}`, {
    //     width: 50,
    //     height: 50
    //   });
    // });
    // data.edges.forEach((edge) => {
    //   g.setEdge(edge.source, edge.target);
    // });
    // Dagre.layout(g);
    // var coord = void 0;
    // g.nodes().forEach((node, i) => {
    //   coord = g.node(node);
    //   data.nodes[i] = {
    //     ...data.nodes[i],
    //     x: coord.x,
    //     y: coord.y
    //   };
    // });
    // g.edges().forEach((edge, i) => {
    //   coord = g.edge(edge);
    //   data.edges[i].startPoint = coord.points[0];
    //   data.edges[i].endPoint = coord.points[coord.points.length - 1];
    // });
    // graph.clear();
    // graph.data(data);
    // graph.render();
    // graph.fitView();

    // if (!data.groups || !data.groups.length) return
    // let maxx
    // let maxy
    // let minx
    // let miny
    // let offsetWNode
    // let offsetHNode
    // let node
    // data.groups.forEach(group => {
    //   node = graph.findById(group.children[0])._cfg.model
    //   maxx = 0
    //   maxy = 0
    //   minx = node.x
    //   miny = node.y
    //   offsetWNode = null
    //   offsetHNode = null
    //   group.children.forEach(nodeId => {
    //     node = graph.findById(nodeId)._cfg.model
    //     console.log('node', node)
    //     if (node.x > maxx) {
    //       maxx = node.x
    //       offsetWNode = graph.findById(node.id)
    //     }
    //     if (node.y > maxy) {
    //       maxy = node.y
    //       offsetHNode = graph.findById(node.id)
    //     }
    //     if (node.x < minx) {
    //       minx = node.x
    //     }
    //     if (node.y < miny) {
    //       miny = node.y
    //     }
    //   })

    //   console.log('坐标', maxx, maxy, minx, miny, offsetWNode, offsetHNode)
    //   graph.addItem('node', {
    //     id: group.id,
    //     label: group.label,
    //     x: minx - offsetWNode._cfg.originStyle.width,
    //     y: miny - 5,
    //     width: maxx - minx + offsetWNode._cfg.originStyle.width * 2,
    //     height: maxy - miny + offsetHNode._cfg.originStyle.height + 10,
    //     radius: 5,
    //     style: {
    //       fill: '#0f8700',
    //       stroke: '#096dd9',
    //       fillOpacity: 0.15,
    //     },
    //   })
    //   graph.findById(group.id).toBack()
    // })
  }
  initCustomNode(){
   
  }

  
  initGraph(props) {
    // const {
    //   nodeClick
    // } = props
    // const graph = new G6.Graph({
    //   container: `${this.graphId}`,
    //   ...props
    // });
    // this.graph = graph;
    // this.initDagre()
    // this.initDagreData(props.data)
    // this.graph.on('node:click', nodeClick)
    G6.registerNode('customNode', {
      draw(item){
        const group = item.getGraphicGroup();
        const model = item.getModel();
        group.addShape('text', {
          attrs: {
            x: 0,
            y: 0,
            fill: '#333',
            text: '我是一个自定义节点，\n有下面那个方形和我自己组成'
          }
        });
        group.addShape('text', {
          attrs: {
            x: 0,
            y: 0,
            fill: '#333',
            text: ' ('+model.x+', '+model.y+') \n 原点是组的图坐标',
            textBaseline: 'top'
          }
        });
        group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: 4,
            fill: 'blue'
          }
        });
        return group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            stroke: 'red'
          }
        });
      }
    });
    const { config, chartData } = props
    console.log(props)
    const graph = new G6.Graph({
      container: `${this.graphId}`,
      ...config
    })
    this.graph = graph;
    // graph.data(chartData);
    // graph.render();
    graph.read(chartData);
  }

  render() {
    return (<div id={this.graphId} />);
  }
}
