import {HostAPI} from "../../../../@types/globals";

export async function fetchProjectListToggle(host: HostAPI): Promise<boolean> {
  const result = await host.fetchApp("backend/projectListToggle", {method: "GET"});
  // @ts-ignore
  return result.projectListToggle;
}