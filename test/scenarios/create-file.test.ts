const btoa = require("btoa-lite");

import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("create-file", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.repos.createOrUpdateFileContents()", () => {
    return octokit.repos
      .createOrUpdateFileContents({
        owner: "octokit-fixture-org",
        repo: "create-file",
        path: "test.txt",
        message: "create test.txt",
        content: btoa("Test content"),
      })

      .then((response) => {
        expect(response.data.content.type).toEqual("file");
      });
  });
});
