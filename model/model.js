import {readFileSync} from "fs";
export function model(parameter) {
    const data = readFileSync('./data/data.json','utf-8');
    let hasil = "";
    if (parameter == "english"){
        hasil = JSON.parse(data).english;
    }
    else if (parameter == "indonesia"){
        hasil = JSON.parse(data).indonesia;
    }
    return hasil;
}
