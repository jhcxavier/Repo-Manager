import Issues from "./index";
import { render } from "@testing-library/react";

const issue = {
    "title": "Bump node-sass from 4.11.0 to 7.0.0",
    "user": {

        "avatar_url": "https://avatars.githubusercontent.com/in/29110?v=4",

    },
    "created_at": "2022-02-10T18:04:40Z",
    "updated_at": "2022-02-10T18:04:42Z",
}

describe("Verify Component", () => {
    test('To be defined', () => {
        ;
        const { container } = render(<Issues issue={issue} />)
        expect(container.querySelector('.issueWrapper')
        ).toBeInTheDocument();
        expect(container).toBeDefined()
    });
})