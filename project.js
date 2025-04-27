//Github Copilot to the rescue! (Javascript boilerplate by Github Copilot)
async function loadYAML() {
    try {
        const response = await fetch('project.yaml');
        if (!response.ok) throw new Error('Failed to fetch YAML file');
        const data = jsyaml.load(await response.text());

        const projects = data.projects;
        const container = document.body;

        Object.values(projects).forEach(projectList => {
            projectList.forEach(project => {
                const section = document.createElement('section');
                section.innerHTML = `
                        <p5>
                        <div class="name" style="padding-bottom: 0.5em">${project.name || 'Name not found'}</div>

                        <div class="language">Language: ${project.language || 'Language not found'}</div>
                        </p5>
                        <a href="${project.demo || '#'}" class="demo-link">
                            <img src="${project.image || ''}" alt="Project Image" class="project-image" style="float: right; width: 25%; height: 25%;">
                        </a>
                        <p3>
                         <a href="${project.source || '#'}" class="subdomain-button" style="margin-bottom: 1em">View Source Code</a>
                        <div class="description" style="margin-bottom: 5em">${project.description || 'Description not found'}</div>
                        </p3>
                        <hr style="width:20%; border-color: white; border-radius: 10px; border-style: dashed; border-width: 2px; margin-bottom: 5em">
                    `;
                container.appendChild(section);
            });
        });
    } catch (error) {
        console.error('Error loading YAML:', error);
    }
}
loadYAML();