export const graphData = {
  nodes: [{
    id: 'node1',
    shape: "customNode",
    x: 100,
    y: 200,
    color: '#333',           // 颜色
    size: 100 || [10, 10],    // 尺寸 || [宽, 高]
    style: {                 // 关键形样式（优先级高于color）
      fill: 'red',
      stroke: 'blue'
    },
    label: '文本标签' || {     // 文本标签 || 文本图形配置
      text: '文本标签',
      fill: 'blue'
    }
  }, {
    id: 'node2',
    shape: "customNode",
    x: 300,
    y: 400
  }],
  edges: [{
    source: 'node1',
    target: 'node2'
  }]
};
export const graphConfig = {
  width: 500,
  height: 500,
  nodeStyle: {
    default: {
      fill: '#40a9ff',
      stroke: '#096dd9'
    }
  },
  edgeStyle: {
    default: { stroke: '#A3B1BF' }
  }
}
export const resData = {
  nodes: [
    {
      runstatus: 5,
      id: 76,
      label: 'sch_shubao_test_task_21',
      relativetype: 0,
    },
    {
      runstatus: 5,
      id: 78,
      label: 'sch_shubao_test_task_30',
      relativetype: 2,
    },
    {
      runstatus: 5,
      id: 80,
      label: 'sch_shubao_test_task_40',
      relativetype: 2,
    },
    {
      runstatus: 5,
      id: 82,
      label: 'sch_shubao_test_task_51',
      relativetype: 2,
    },
    {
      runstatus: 5,
      id: 81,
      label: 'sch_shubao_test_task_50',
      relativetype: 2,
    },
    {
      runstatus: 5,
      id: 74,
      label: 'sch_shubao_test_task_10',
      relativetype: 1,
    },
  ],
  edges: [
    {
      source: 76,
      target: 78,
    },
    {
      source: 78,
      target: 80,
    },
    {
      source: 80,
      target: 82,
    },
    {
      source: 80,
      target: 81,
    },
    {
      source: 74,
      target: 76,
    },
  ],
  groups: [
    {
      id: '100s',
      label: '分组一',
      children: ['81s', '82s', '80s']
    }
  ]
}