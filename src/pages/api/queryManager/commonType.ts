interface pageType{
    pageSize: number | null;
    page: number;
}
interface sortType{
    sort: string | null;
}
interface fieldType{
    fields: string | null;
}
interface queryType extends sortType, fieldType {
    pagination: pageType,
    filter: string | Array<object> | null
}
interface optionType extends pageType, sortType, fieldType{
}

interface queryStringType {
    eq: string,
    ne: string,
    lt: string,
    lte: string,
    gt: string,
    gte: string,
    in: string,
    nin: string,
    like: string, //case-sensetive
    nike: string, //case-sensetive
    likei: string,
    nlikei: string,
    null: string,
    nnull: string,
    between: string,
    swith: string,
    ewith: string,
    or: string,
    and: string,
}

export type {queryType, optionType,pageType,queryStringType};