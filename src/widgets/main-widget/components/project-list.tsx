import React, {memo} from 'react';
import List from "@jetbrains/ring-ui-built/components/list/list";
import {Type} from "@jetbrains/ring-ui-built/components/list/consts";

type Props = {
  projects: string[]
}

const seperator = {rgItemType: Type.SEPARATOR};

const ProjectListComponent: React.FunctionComponent<Props> = (props) => {
  const projects = props.projects.flatMap((project, index) => {
    const projectItem = {label: project, rgItemType: Type.ITEM};
    return index < props.projects.length - 1 ? [projectItem, seperator] : [projectItem]
  });
  return (
    <List data={projects}/>
  )
};

export const ProjectList = memo(ProjectListComponent)