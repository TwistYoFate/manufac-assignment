import React, { useEffect } from 'react'
import { ClassNumberWithMeanMedianMode, DataPoint } from '../domain/types'
import utils from '../utils';
import MeanMedianModeTable from '../components/MeanMedianModeTable';

export interface IMeanMedianMode {
    dataPoints: DataPoint[] | [];
    targetKey: string;
    classKey: string;
}


function MeanMedianMode(props: IMeanMedianMode) {

    const [tableData, setTableData] = React.useState<ClassNumberWithMeanMedianMode[]>([]);

    const getDataForTable = (): ClassNumberWithMeanMedianMode[] => {
        if (props.dataPoints.length === 0) return [];
        const n = utils.getNumberOfClasses(props.classKey, props.dataPoints);
        const tempTableData = [];
        for (let i = 1; i <= n; i++) {
            const res: ClassNumberWithMeanMedianMode = {
                classNumber: i,
                mean: -1,
                median: -1,
                mode: [],
            };
            const filteredByClass: number[] = [];
            props.dataPoints.forEach((obj) => {
                if (obj[props.classKey] === i) {
                    filteredByClass.push(obj[props.targetKey]);
                }
            });
            res.mean = utils.calculateMean(filteredByClass);
            res.median = utils.calculateMedian(filteredByClass);
            res.mode = utils.calculateMode(filteredByClass);
            tempTableData.push(res);
        }
        return tempTableData;
    }

    useEffect((): void => {
        const tempTableData = getDataForTable();
        setTableData([...tempTableData]);
    }, [props.dataPoints])

    return (
        <MeanMedianModeTable data={tableData} targetKey={props.targetKey} />
    )
}

export default MeanMedianMode