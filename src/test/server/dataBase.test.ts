import { DataBase } from "../../Service/dataBase";


describe('jasmine test suite', () => {
    it('sample service test sayHi()', () => {
        let testDatabase = new DataBase(`${__dirname}/userInfo.json`);
        let actualResult = testDatabase.readUser("test002");
        actualResult.then(user=>{
            expect(user.alias).toBe("t002");
            expect(user.name).toBe("tester002");
            expect(user.password).toBe("password@456");
        });
    });
});