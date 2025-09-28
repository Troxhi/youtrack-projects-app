import {HostAPI} from "../../../../@types/globals";

export async function fetchProjects(host: HostAPI): Promise<string[]> {
  const projects = await host.fetchYouTrack("admin/projects", {
    query: {
      fields: "id,name",
      "$top": -1, // $top = -1 fetches all projects
    }
  }) ?? [];
  // @ts-ignore
  return projects.map(project => project.name);
}