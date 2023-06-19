import { DataPoint, UnrefinedDataPoint } from "./types";

// A serialiser function which ensures that all properties of the DataPoint object are of type number
export function refineDataPoint(data:UnrefinedDataPoint[]):DataPoint[]|[]{
    if(data.length===0) return [];
    const res:any = data.map(obj=>{
        for(const key in obj){
            if(typeof obj[key] === "string"){
                obj[key] = parseFloat(obj[key]);
            }
        }
        return obj;
    })
    return res as DataPoint[];
}

// Function to calculate Gamma property of a DataPoint
export function calculateGamma(dataPoint:DataPoint):number{
    return (dataPoint.Ash * dataPoint.Hue)/dataPoint.Magnesium;
}