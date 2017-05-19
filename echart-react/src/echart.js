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
        const { data } = this.props //�ⲿ�����data����
        let myChart = echarts.init(this.refs.pieReact) //��ʼ��echarts

        //����Ҫ����һ��setPieOption������data����option����
        let options = this.setPieOption(data)
        //����options
        myChart.setOption(options)
    }
	
	 //һ��������echartsͼ�����ú���
    setPieOption(data) {
        return {
            series : [
                {
                    name: '����',
                    type: 'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: true,
                    data: data, //�����ⲿ��data����
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