import React, {memo, useCallback} from 'react';
import {fetchProjects} from "./api/fetch-projects.ts";
import {ProjectList} from "./components/project-list.tsx";
import Toggle, {Size} from "@jetbrains/ring-ui-built/components/toggle/toggle";
import {fetchProjectListToggle} from "./api/fetch-project-list-toggle.ts";

const host = await YTApp.register();
const [projects, projectListToggle] = await Promise.all([fetchProjects(host), fetchProjectListToggle(host)]);

const AppComponent: React.FunctionComponent = () => {
  const setProjectListToggle = useCallback(async () => {
    await host.fetchApp("backend/projectListToggle", {method: "POST"});
  }, []);

  return (
    <div className="widget">
      <ProjectList projects={projects}/>
      <Toggle defaultChecked={projectListToggle} onChange={setProjectListToggle} size={Size.Size20}/>
    </div>
  );
};

export const App = memo(AppComponent);
