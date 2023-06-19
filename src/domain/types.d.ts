// DataPoint type for uncertain property type
export type UnrefinedDataPoint = {
    "Alcohol"?: number|string,
    "Malic Acid"?: number|string,
    "Ash"?: number|string,
    "Alcalinity of ash"?: number|string,
    "Magnesium"?: number|string,
    "Total phenols"?: number|string,
    "Flavanoids"?:number|string,
    "Nonflavanoid phenols"?:number|string,
    "Proanthocyanins"?: number|string,
    "Color intensity"?: number|string,
    "Hue"?:number|string,
    "OD280/OD315 of diluted wines"?:number|string,
    "Unknown"?:number|string
}

// DataPoint type where all properties are of number type
export type DataPoint = {
    "Alcohol"?: number,
    "Malic Acid"?: number,
    "Ash"?: number,
    "Alcalinity of ash"?: number,
    "Magnesium"?: number,
    "Total phenols"?: number,
    "Flavanoids"?:number,
    "Nonflavanoid phenols"?:number,
    "Proanthocyanins"?: number,
    "Color intensity"?: number,
    "Hue"?:number,
    "OD280/OD315 of diluted wines"?:number,
    "Unknown"?:number
}

// A type used to display mean, median and mode in table
export type ClassNumberWithMeanMedianMode = {
    classNumber:number,
    mean:number,
    median:number,
    mode:number[]
}