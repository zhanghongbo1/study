<template>
    <div class="echarts">
        <div id="echart"></div>
    </div>
</template>
 
<script>
import Echarts from 'echarts'
//import 'echarts/theme/macarons.js'
import dark from './dark'
export default {
    data() {
        return{
            myChart: {}
        }
    },
    props: {
        echartObj: {
            type: Object,
            default: {
                 title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
            }
        }
    },
    created() {
        this.$nextTick(()=> {
            this.loadEchart()
        })
    },
    mounted(){
        let _this = this;
        window.onresize = function() {
            _this.myChart.resize()
        }
    },
    methods: {
        loadEchart() {
            this.myChart = Echarts.init(document.getElementById("echart"),'dark');
            this.myChart.setOption(this.echartObj)
        }
    }
}
</script>
 
<style>
#echart {
    width: 50%;
    height: 500px;
}

</style>