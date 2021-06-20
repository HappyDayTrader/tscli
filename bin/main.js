#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("commander");
const data_types_1 = require("./data-types/data-types");
const create_new_project_1 = require("./commands/create-new-project");
const options = {};
cmd
    .version(`${data_types_1.VERSION}`)
    .usage("<command> <project> [options...]")
    .arguments("<command> <project>")
    .option("-t, --type <type>", "Project types: {default|node|js}")
    .option("--e2e", "End to end testing")
    .option("-w, --web", "Simple static Web setup")
    .action((command, project) => {
    Object.assign(options, { command, project });
})
    .parse(process.argv);
switch (options.command) {
    case "new":
        create_new_project_1.createNewProject(cmd, options);
        break;
    default:
        console.log("Unknown command, doing nothing!");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUFpQztBQUNqQyx3REFBa0Q7QUFFbEQsc0VBQWlFO0FBRWpFLE1BQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztBQUV4QixHQUFHO0tBQ0EsT0FBTyxDQUFFLEdBQUksb0JBQVEsRUFBRSxDQUFFO0tBQ3pCLEtBQUssQ0FBRSxrQ0FBa0MsQ0FBRTtLQUMzQyxTQUFTLENBQUUscUJBQXFCLENBQUU7S0FDbEMsTUFBTSxDQUFFLG1CQUFtQixFQUFFLGtDQUFrQyxDQUFFO0tBQ2pFLE1BQU0sQ0FBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUU7S0FDdkMsTUFBTSxDQUFFLFdBQVcsRUFBRSx5QkFBeUIsQ0FBRTtLQUNoRCxNQUFNLENBQUUsQ0FBRSxPQUFlLEVBQUUsT0FBZSxFQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUUsQ0FBQztBQUNqRCxDQUFDLENBQUU7S0FDRixLQUFLLENBQUUsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDO0FBRXpCLE1BQU0sQ0FBQyxDQUFFLE9BQU8sQ0FBQyxPQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFCLEtBQUssS0FBSztRQUNSLHFDQUFnQixDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUM7SUFDUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUUsaUNBQWlDLENBQUUsQ0FBQztBQUNyRCxDQUFDIn0=