import React, { useId } from 'react'
import { ClassNumberWithMeanMedianMode, DataPoint } from '../domain/types'

export interface IMeanMedianModeTableProps {
    data: ClassNumberWithMeanMedianMode[];
    targetKey:string;
}

function MeanMedianModeTable(props: IMeanMedianModeTableProps) {
    return (
        <table border={1}>
            <thead>
                <tr>
                <th key={'th-zero'}></th>
                {
                    props.data.map((obj, id) => {
                        return (
                            <th key={'th-' + id}>Class {Number(obj.classNumber)}</th>
                        )
                    })
                }
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{props.targetKey} Mean</td>
                        {
                            props.data.map((obj, id) => {
                                return (
                                    <td key={'mean-' + id}>{obj.mean}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <td>{props.targetKey} Median</td>
                        {
                            props.data.map((obj, id) => {
                                return (
                                    <td key={'median-' + id}>{obj.median}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <td>{props.targetKey} Mode</td>
                        {
                            props.data.map((obj, id) => {
                                return (
                                    <td key={'mode-' + id}>{obj.mode.map(val=><span>{val}<br/></span>)}</td>
                                )
                            })
                        }
                    </tr>
            </tbody>
        </table>
    )
}

export default MeanMedianModeTable