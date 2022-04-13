import { lastUpdate, formatAsDate } from "./utils"
const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
const issue = {
    "title": "Bump node-sass from 4.11.0 to 7.0.0",
    "user": {

        "avatar_url": "https://avatars.githubusercontent.com/in/29110?v=4",

    },
    "created_at": "2022-02-10T18:04:40Z",
    "updated_at": "2022-02-10T18:04:42Z",
}

describe("Chech values of lastUpdate", () => {
    it("Should Match date", () => {
        expect(formatAsDate(issue.updated_at)).toEqual("02/10/2022")
        expect(lastUpdate(currentDate, formatAsDate(issue.updated_at))).toEqual("62 days ago")
        expect(formatAsDate(null)).toEqual(null)
        expect(formatAsDate("1969-02-10T18:04:42Z")).toEqual(null)
        expect(formatAsDate("2022-02-10T18:04:42Z", true)).toEqual("02/10/2022")
        expect(formatAsDate("2022-02-10T18:04:42Z", true, true)).toEqual("2022-02-10")
        expect(lastUpdate("2022-02-10T18:04:40Z", "2022-02-11T18:04:40Z"))
    })
})