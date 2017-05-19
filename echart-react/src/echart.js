import React from 'react';
import ReactDOM from 'react-dom';
let echarts = require('echarts');
class PieReact extends React.Component{
	
		constructor(props) {
			super(props)
			this.setPieOption = this.setPieOption.bind(this)
			 this.initPie = this.initPie.bind(this)
		}
	
	
	
	 componentDidMount() {
       this.initPie()
    }
	
	  componentDidUpdate() {
        this.initPie()
    }
	
	  initPie() {
        const { data } = this.props //外部传入的data数据
        let myChart = echarts.init(this.refs.pieReact) //初始化echarts

        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data)
        //设置options
        myChart.setOption(options)
    }
	
	 //一个基本的echarts图表配置函数
    setPieOption(data) {
        return {
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: true,
                    data: data, //传入外部的data数据
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '18'
                            },
                            formatter: "{d}% \n{b}",
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        }
    }
	
	 render() {
        return (
            <div className="pie-react">
                <div ref="pieReact" style={{width: "100%", height: "200px"}}></div>
            </div>
        );
    }
}

export default PieReact;