import { useState, useRef } from 'react';
import './App.css';
import { useMount, useRequest, useUpdate, useUpdateEffect } from 'ahooks';
import * as echarts from 'echarts';

document.title = echarts.version;

const mockLossData = async () => {
    const fetchRes = await fetch('http://localhost:9001/api');
    return await fetchRes.json();
};

/**
 *  Memory increase fast
 */
function App() {
    const chartDomRef = useRef(null);
    const [myChart, setMyChart] = useState();

    const updateEchartLoss = _res => {
        const LossArray = _res;
        setEchartsOption({
            ...echartsOption,
            yAxis: {
                type: 'value',
                min: 0,
                max: 1,
                axisLine: {
                    lineStyle: {
                        color: '#99A6B6',
                    },
                },
                // formatter(_, index) {
                //     let yLabel = '';
                //     if (index === 0) {
                //         yLabel = '0';
                //     } else if (index === 1) {
                //         yLabel = '1';
                //     } else if (index === 2) {
                //         yLabel = '2';
                //     } else if (index === 3) {
                //         yLabel = '3';
                //     } else if (index === 4) {
                //         yLabel = '4';
                //     } else if (index === 5) {
                //         yLabel = '5';
                //     }
                //     return yLabel;
                // },
            },
            series: [
                {
                    name: 'loss',
                    type: 'line',
                    data: LossArray,
                    showSymbol: false,
                },
            ],
        });
    };

    const getModelLossInfo = async () => {
        const data = await mockLossData();

        updateEchartLoss(data);

        return true;
    };
    const { runAsync: runGetModelLossInfo, cancel: cancelGetModelLossInfo } = useRequest(getModelLossInfo, { manual: true, pollingInterval: 1 });

    const [echartsOption, setEchartsOption] = useState({
        title: {
            text: '',
        },
        color: ['#7CCDE9'],
        legend: {
            data: ['loss'],
        },
        xAxis: {
            type: 'value',
            interval: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#99A6B6',
                },
            },
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 1,
            axisLine: {
                lineStyle: {
                    color: '#99A6B6',
                },
            },
            axisLabel: {
                formatter: (v, index) => {},
            },
        },
        series: [
            {
                name: 'loss',
                type: 'line',
                data: [],
                showSymbol: false,
            },
        ],
        toolbox: {
            show: true,
            orient: 'horizontal',
            feature: {
                dataZoom: {
                    show: true,
                    title: {
                        zoom: '缩放',
                        back: '还原',
                    },
                    brushStyle: {
                        borderWidth: 3,
                        color: 'rgba(255,219,238,0.2)',
                    },
                },
            },
        },
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                const loss = params[0].data[1];
                return `<div>
                      <span>${params[0].data[0]}</span><br />
                      <span>loss:${loss}</span>
                  </div>`;
            },
        },
    });

    useMount(() => {
        const myEchart = echarts.init(chartDomRef.current);
        setMyChart(myEchart);
        myEchart?.setOption(echartsOption);
    });

    useUpdateEffect(() => {
        myChart.setOption(echartsOption);
    }, [echartsOption]);

    const start = async () => {
        await runGetModelLossInfo();
    };

    const stop = () => {
        cancelGetModelLossInfo();
    };

    return (
        <div style={{ width: 1000 }}>
            <div>echarts version:{echarts.version}</div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <div id="main" style={{ width: '100%', height: '600px' }} ref={chartDomRef}></div>
        </div>
    );
}

/**
 *  Memory increase normal
 */
function App2() {
    const chartDomRef = useRef(null);
    const [myChart, setMyChart] = useState();

    const updateEchartLoss = _res => {
        const LossArray = _res;
        myChart.setOption({
            ...echartsOption,
            yAxis: {
                type: 'value',
                min: 0,
                max: 1,
                axisLine: {
                    lineStyle: {
                        color: '#99A6B6',
                    },
                },
                formatter(_, index) {
                    let yLabel = '';
                    if (index === 0) {
                        yLabel = '0';
                    } else if (index === 1) {
                        yLabel = '1';
                    } else if (index === 2) {
                        yLabel = '2';
                    } else if (index === 3) {
                        yLabel = '3';
                    } else if (index === 4) {
                        yLabel = '4';
                    } else if (index === 5) {
                        yLabel = '5';
                    }
                    return yLabel;
                },
            },
            series: [
                {
                    name: 'loss',
                    type: 'line',
                    data: LossArray,
                    showSymbol: false,
                },
            ],
        });
    };

    const getModelLossInfo = async () => {
        const data = await mockLossData();

        updateEchartLoss(data);

        return true;
    };
    const { runAsync: runGetModelLossInfo, cancel: cancelGetModelLossInfo } = useRequest(getModelLossInfo, { manual: true, pollingInterval: 1 });

    const [echartsOption, setEchartsOption] = useState({
        title: {
            text: '',
        },
        color: ['#7CCDE9'],
        legend: {
            data: ['loss'],
        },
        xAxis: {
            type: 'value',
            interval: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#99A6B6',
                },
            },
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 1,
            axisLine: {
                lineStyle: {
                    color: '#99A6B6',
                },
            },
            axisLabel: {
                formatter: (v, index) => {},
            },
        },
        series: [
            {
                name: 'loss',
                type: 'line',
                data: [],
                showSymbol: false,
            },
        ],
        toolbox: {
            show: true,
            orient: 'horizontal',
            feature: {
                dataZoom: {
                    show: true,
                    title: {
                        zoom: '缩放',
                        back: '还原',
                    },
                    brushStyle: {
                        borderWidth: 3,
                        color: 'rgba(255,219,238,0.2)',
                    },
                },
            },
        },
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                const loss = params[0].data[1];
                return `<div>
                    <span>${params[0].data[0]}</span><br />
                    <span>loss:${loss}</span>
                </div>`;
            },
        },
    });

    useMount(() => {
        const myEchart = echarts.init(chartDomRef.current);
        setMyChart(myEchart);
        myEchart?.setOption(echartsOption);
    });

    const start = async () => {
        await runGetModelLossInfo();
    };

    const stop = () => {
        cancelGetModelLossInfo();
    };

    return (
        <div style={{ width: 1000 }}>
            <div>echarts version:{echarts.version}</div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <div id="main" style={{ width: '100%', height: '600px' }} ref={chartDomRef}></div>
        </div>
    );
}

export default App;
