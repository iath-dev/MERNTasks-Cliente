import React from 'react';
import ProjectContext from '../../contexts/projects';
import TasksContext from '../../contexts/tasks';

const Project = ({ project }) => {

    const { selectProject } = React.useContext(ProjectContext);
    const { getTasks } = React.useContext(TasksContext);

    const SelectProject = (id) => {
        getTasks(id);
        selectProject(id);
    };

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => SelectProject(project._id)}
            >
                {project.title}
            </button>
        </li>
     );
}
 
export default Project;
