import React, { Component } from 'react'
import './index.less'
import { Button, Message } from 'antd'
import AceEditor from 'react-ace';
//language_tools语言工具，（这个好像是检测语法，有点忘了，想不起来从哪里找到的）
import 'brace/ext/language_tools';
//searchbox过滤框，快捷键ctrl+F
import 'brace/ext/searchbox';
//一下import的是编辑器支持的语法，我的项目都用到了，所以全部导入
import 'brace/mode/javascript';//
import 'brace/mode/html';//
import 'brace/mode/java';//
import 'brace/mode/python';//
import 'brace/mode/lua';//
import 'brace/mode/xml';//
import 'brace/mode/ruby';//
import 'brace/mode/sass';
import 'brace/mode/markdown';//
import 'brace/mode/mysql';
import 'brace/mode/json';//
import 'brace/mode/css';//
import 'brace/mode/typescript';
//以下import的是风格，还有好多种，可以根据自己需求导入
// github、tomorrow、kuioir、twilight、xcode、textmeta、terminal、solarized-light、solarized-dark
import 'brace/theme/monokai';//

const newValue = "create view dws.bu_rec_flow_system_channel_plan (\n  `id`  COMMENT '自增id', \n  `type`  COMMENT '1--频道保量投放 2--公会投放 3--频道保质投放', \n  `cid`  COMMENT '频道业务方id', \n  `city`  COMMENT '城市', \n  `date`  COMMENT '日期', \n  `time_range`  COMMENT '时间范围，每半小时增1；例如：频道投放：1代表0:00 ~ 0:30  公会投放 1: 0:00~0:59  保质投放每4小时增1：1代表00:00 ~ 04:00', \n  `uids`  COMMENT '计划任务中的uid,多个时逗号分隔', \n  `exposure_uv`  COMMENT '每个uid的曝光量', \n  `number`  COMMENT '计划人数', \n  `exposure_total`  COMMENT '当前计划曝光总量合计', \n  `operator`  COMMENT '操作者', \n  `status`  COMMENT '状态，1：生效中 2：已完成 3：待生效 4：已删除 5:已关闭', \n  `desc`  COMMENT '备注', \n  `ctime`  COMMENT '创建时间', \n  `utime`  COMMENT '更新时间', \n  `refuse_reason`  COMMENT '拒绝理由'\n)\nas\nselect id,type,cid,city,date,time_range,uids,exposure_uv,number,exposure_total,operator,status,desc,ctime,utime,refuse_reason\nfrom \n(select tmp.*,\n        row_number() over(partition by id order by utime desc) rowid\n from \n (select * from dwd.u_rec_flow_system_channel_plan\n  union all\n  select cast(get_json_object(str,'$.data.id') as bigint) as id,\n         cast(get_json_object(str,'$.data.type') as int) as type,\n         cast(get_json_object(str,'$.data.cid') as int) as cid,\n         get_json_object(str,'$.data.city') as city,\n         get_json_object(str,'$.data.date') as date,\n         cast(get_json_object(str,'$.data.time_range') as int) as time_range,\n         get_json_object(str,'$.data.uids') as uids,\n         cast(get_json_object(str,'$.data.exposure_uv') as int) as exposure_uv,\n         cast(get_json_object(str,'$.data.number') as int) as number,\n         cast(get_json_object(str,'$.data.exposure_total') as int) as exposure_total,\n         get_json_object(str,'$.data.operator') as operator,\n         cast(get_json_object(str,'$.data.status') as int) as status,\n         get_json_object(str,'$.data.desc') as desc,\n         get_json_object(str,'$.data.ctime') as ctime,\n         get_json_object(str,'$.data.utime') as utime,\n         get_json_object(str,'$.refuse_reason') as refuse_reason\n  from logs.inke_binlog \n  where tid='db_base_product.flow_system_channel_plan' and ymd = from_unixtime( unix_timestamp( current_timestamp()),'yyyyMMdd')\n    and get_json_object(str,'$.sql_type') in ('UPDATE','INSERT')\n ) tmp\n) t\nwhere rowid=1\n"
const fontSize = 12
// 代码编辑框
export default class ManageIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "insert overwrite table dwd.u_rec_flow_system_channel_plan\nselect id,type,cid,city,date,time_range,uids,exposure_uv,number,exposure_total,exposure_uv,operator,status,desc,ctime,utime,refuse_reason\nfrom \n(select tmp.*,\n        row_number() over(partition by uid order by update_time desc) rowid\n from \n (select * from dwd.u_rec_flow_system_channel_plan\n  union all\n  select cast(get_json_object(str,'$.data.id') as bigint) as id,\n         cast(get_json_object(str,'$.data.type') as int) as type,\n         cast(get_json_object(str,'$.data.cid') as int) as cid,\n         get_json_object(str,'$.data.city') as city,\n         get_json_object(str,'$.data.date') as date,\n         cast(get_json_object(str,'$.data.time_range') as int) as time_range,\n         get_json_object(str,'$.data.uids') as uids,\n         cast(get_json_object(str,'$.data.exposure_uv') as int) as exposure_uv,\n         cast(get_json_object(str,'$.data.number') as int) as number,\n         cast(get_json_object(str,'$.data.exposure_total') as int) as exposure_total,\n         get_json_object(str,'$.data.operator') as operator,\n         cast(get_json_object(str,'$.data.status') as int) as status,\n         get_json_object(str,'$.data.desc') as desc,\n         get_json_object(str,'$.data.ctime') as ctime,\n         get_json_object(str,'$.data.utime') as utime,\n         get_json_object(str,'$.refuse_reason') as refuse_reason\n  from logs.inke_binlog \n  where tid='db_base_product.flow_system_channel_plan' and ymd = '20190919'\n    and get_json_object(str,'$.sql_type') in ('UPDATE','INSERT')\n ) tmp\n) t\nwhere rowid=1\n",
            resultDate: '',
            readOnly: false,
            deskHeight: 0,
            changed: false
        }
    }

    editor = null

    onChange = (newValue) => {
        console.log('onChange')
        this.setState({ changed: true, value: newValue })
    }

    getValue = () => {
        console.log('获取数据')
        console.log(this.refs.aceEditor)
        // console.log(this.refs.aceEditor.editor.undo())
        console.log(this.state.value)
    }

    setValue = () => {
        console.log('设置数据')

        this.setState({
            value: newValue
        })
    }

    render() {
        return (
            <div>
                <AceEditor
                    ref="aceEditor"
                    mode='mysql'
                    readOnly={this.state.readOnly}
                    theme="monokai"
                    name="app_code_editor"
                    onChange={this.onChange}
                    fontSize={fontSize}
                    editorProps={{ $blockScrolling: true }}
                    showPrintMargin
                    showGutter
                    highlightActiveLine  //突出活动线
                    enableSnippets  //启用代码段
                    value={this.state.value}
                    style={{ width: '100%', height: this.state.deskHeight, minHeight: 600 }}
                    commands={[{    //命令是键绑定数组。
                        name: 'saveFile', //键绑定的名称。
                        bindKey: { win: 'Ctrl-S', mac: 'Command-S' }, //用于命令的组合键。
                        exec: () => {
                            if (!this.state.changed) {
                                Message.warning('文件未改动')
                            } else {
                                //保存文件操作
                            }
                        }   //重新绑定命令的名称
                    }]}
                    setOptions={{
                        enableBasicAutocompletion: false,   //启用基本自动完成功能
                        enableLiveAutocompletion: true,   //启用实时自动完成功能 （比如：智能代码提示）
                        enableSnippets: false,  //启用代码段
                        showLineNumbers: true,
                        tabSize: 4
                    }}

                />
                <div><Button type="primary" onClick={this.setValue}>设置数据</Button></div>
                <div><Button type="danger" onClick={this.getValue}>获取数据</Button></div>

            </div>
        )
    }
}