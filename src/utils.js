export function parseCostFromDoallars(costInDollars){
    const num = Number.parseFloat(costInDollars.substr(1));
    if(isNaN(num))
        return 0;
    return num;
}