import * as jsonfile from "jsonfile";
import * as model from "./dataModel";
import { Promise } from "bluebird";
import { json } from "body-parser";

export class DataBase {
    constructor(path: string) {
        this.dbPath = path;
    }

    private readonly dbPath: string;

    public readUser(alias: string) {
        return new Promise<model.IUser>((resolve, reject) => {
            jsonfile.readFile(this.dbPath, (err, data) => {
                if (err) {
                    reject(`dataBase.readUser(${alias}) Failed ${JSON.stringify(err)}`);
                }
                let result = (data as [model.IUser]).find(item => {
                    return item.alias == alias;
                });
                resolve(result);
            });
        })
    }
}