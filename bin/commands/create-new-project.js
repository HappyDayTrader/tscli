"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const path = require("path");
const fs = require("fs");
const utils = require("../lib/utils");
const data_types_1 = require("../data-types/data-types");
const commit_message = `
This Project was generated using TSCLI (${data_types_1.VERSION}).
_________ _______  _______  _       _________
\\__   __/(  ____ \\(  ____ \\( \\      \\__   __/
   ) (   | (    \\/| (    \\/| (         ) (
   | |   | (_____ | |      | |         | |
   | |   (_____  )| |      | |         | |
   | |         ) || |      | |         | |
   | |   /\\____) || (____/\\| (____/\\___) (___
   )_(   \\_______)(_______/(_______/\\_______/

Initial Commit.
`;
function createNewProject(cmd, options) {
    if (fs.existsSync(options.project)) {
        console.log(`Folder ${options.project} already exists!`);
        return;
    }
    if (cmd.type === undefined || cmd.type === "ts" || cmd.type === "default") {
        console.log("TSCLI is generating a new default TypeScript project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/default/"), `${options.project}`);
    }
    else if (cmd.type === "node") {
        console.log("TSCLI is generating a TypeScript Node.js project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/node/"), `${options.project}`);
    }
    else if (cmd.type === "js") {
        console.log("TSCLI is generating a JavaScript Node.js project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/javascript/"), `${options.project}`);
    }
    sh.pushd(`${options.project}`);
    sh.mkdir("docs", "logs");
    sh.exec("git init");
    sh.exec("git add -A");
    sh.exec(`git commit -q -m "${commit_message}"`);
    sh.exec("git checkout -b dev");
    if (data_types_1.YARN) {
        sh.exec("yarn");
    }
    else {
        sh.exec("npm install");
    }
    // Also need to take into consideration different platforms: Win, MacOS, Linux 32/64.
    // Set up end to end testing.
    if (!cmd.e2e) {
        sh.mkdir("bin_tools");
        // Download Chromedriver.
        utils.downloadFileHttps("https://chromedriver.storage.googleapis.com/2.33/chromedriver_mac64.zip", "./bin_tools/chromedriver_mac64.zip", function (err) {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log("Downloaded Chromedriver.");
                sh.pushd(`${options.project}/bin_tools`);
                sh.exec("unzip chromedriver_mac64.zip");
                sh.rm("chromedriver_mac64.zip");
                sh.popd();
            }
        });
        // Download standalone selenium-server.
        utils.downloadFileHttp("http://selenium-release.storage.googleapis.com/3.7/selenium-server-standalone-3.7.1.jar", "./bin_tools/selenium-server-standalone-3.7.1.jar", function (err) {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log("Downloaded Selenium server.");
            }
        });
    }
    sh.popd();
    console.log(`Project ${options.project} created successfully.`);
}
exports.createNewProject = createNewProject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW5ldy1wcm9qZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2NyZWF0ZS1uZXctcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHNDQUFzQztBQUV0Qyx5REFBeUQ7QUFFekQsTUFBTSxjQUFjLEdBQVc7MENBQ1ksb0JBQVE7Ozs7Ozs7Ozs7O0NBV2xELENBQUM7QUFFRiwwQkFBa0MsR0FBUSxFQUFFLE9BQVk7SUFFdEQsRUFBRSxDQUFDLENBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBRSxPQUFPLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBVyxPQUFPLENBQUMsT0FBUSxrQkFBa0IsQ0FBRSxDQUFDO1FBQzdELE1BQU0sQ0FBQztJQUNULENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBRSx5REFBeUQsQ0FBRSxDQUFDO1FBQ3pFLEVBQUUsQ0FBQyxFQUFFLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLDJCQUEyQixDQUFFLEVBQUUsR0FBSSxPQUFPLENBQUMsT0FBUSxFQUFFLENBQUUsQ0FBQztJQUNoRyxDQUFDO0lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFFLHFEQUFxRCxDQUFFLENBQUM7UUFDckUsRUFBRSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsd0JBQXdCLENBQUUsRUFBRSxHQUFJLE9BQU8sQ0FBQyxPQUFRLEVBQUUsQ0FBRSxDQUFDO0lBQzdGLENBQUM7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUUscURBQXFELENBQUUsQ0FBQztRQUNyRSxFQUFFLENBQUMsRUFBRSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSw4QkFBOEIsQ0FBRSxFQUFFLEdBQUksT0FBTyxDQUFDLE9BQVEsRUFBRSxDQUFFLENBQUM7SUFDbkcsQ0FBQztJQUVELEVBQUUsQ0FBQyxLQUFLLENBQUUsR0FBSSxPQUFPLENBQUMsT0FBUSxFQUFFLENBQUUsQ0FBQztJQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFFLE1BQU0sRUFBRSxNQUFNLENBQUUsQ0FBQztJQUMzQixFQUFFLENBQUMsSUFBSSxDQUFFLFVBQVUsQ0FBRSxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUUsWUFBWSxDQUFFLENBQUM7SUFDeEIsRUFBRSxDQUFDLElBQUksQ0FBRSxxQkFBc0IsY0FBZSxHQUFHLENBQUUsQ0FBQztJQUNwRCxFQUFFLENBQUMsSUFBSSxDQUFFLHFCQUFxQixDQUFFLENBQUM7SUFFakMsRUFBRSxDQUFDLENBQUUsaUJBQUssQ0FBQyxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ3BCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHFGQUFxRjtJQUVyRiw2QkFBNkI7SUFDN0IsRUFBRSxDQUFDLENBQUUsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztRQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUUsV0FBVyxDQUFFLENBQUM7UUFFeEIseUJBQXlCO1FBQ3pCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBRSx5RUFBeUUsRUFDaEcsb0NBQW9DLEVBQ3BDLFVBQVUsR0FBUTtZQUNoQixFQUFFLENBQUMsQ0FBRSxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFFLDBCQUEwQixDQUFFLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxLQUFLLENBQUUsR0FBSSxPQUFPLENBQUMsT0FBUSxZQUFZLENBQUUsQ0FBQztnQkFDN0MsRUFBRSxDQUFDLElBQUksQ0FBRSw4QkFBOEIsQ0FBRSxDQUFDO2dCQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFFLHdCQUF3QixDQUFFLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLENBQUM7UUFDSCxDQUFDLENBQUUsQ0FBQztRQUVOLHVDQUF1QztRQUN2QyxLQUFLLENBQUMsZ0JBQWdCLENBQUUseUZBQXlGLEVBQy9HLGtEQUFrRCxFQUNsRCxVQUFVLEdBQVE7WUFDaEIsRUFBRSxDQUFDLENBQUUsR0FBSSxDQUFDLENBQUMsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQztZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBRSw2QkFBNkIsQ0FBRSxDQUFDO1lBQy9DLENBQUM7UUFDSCxDQUFDLENBQUUsQ0FBQztJQUNSLENBQUM7SUFFRCxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFFLFdBQVksT0FBTyxDQUFDLE9BQVEsd0JBQXdCLENBQUUsQ0FBQztBQUN0RSxDQUFDO0FBcEVELDRDQW9FQyJ9