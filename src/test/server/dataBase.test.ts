import { DataBase } from "../../Service/dataBase";
const green: string = "\x1b[32m%s\x1b[0m";
describe('jasmine test suite', () => {
    it('sample service test sayHi()', () => {
        let testDatabase = new DataBase(`${__dirname}/userInfo.json`);
        let actualResult = testDatabase.readUser("t002");
        actualResult.then(user=>{
            console.info(green,
                `the actual result is ${JSON.stringify(user)}`);
            expect(user.alias).toBe("t002");
            expect(user.name).toBe("tester002");
            expect(user.password).toBe("password@456");
        });
    });
});