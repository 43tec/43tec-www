const handleClickLanding = () => {
  const content = document.getElementsByClassName("content")[0];
  const landingTemplate = document.getElementById("landingTemplate");
  const landing = document.importNode(landingTemplate.content, true);
  content.replaceWith(landing);
};

const handleClickProjects = () => {
  const content = document.getElementsByClassName("content")[0];
  const projectsTemplate = document.getElementById("projectsTemplate");
  const projects = document.importNode(projectsTemplate.content, true);
  content.replaceWith(projects);
};

const handleClickCompany = () => {
  const content = document.getElementsByClassName("content")[0];
  const companyTemplate = document.getElementById("companyTemplate");
  const company = document.importNode(companyTemplate.content, true);
  content.replaceWith(company);
};

window.onload = () => {
  handleClickLanding();

  document.getElementById("logo").addEventListener("click", event => {
    handleClickLanding();
  });

  document.getElementById("projectsNav").addEventListener("click", event => {
    console.log("projects clicked!");
    handleClickProjects();
  });

  document.getElementById("companyNav").addEventListener("click", event => {
    handleClickCompany();
  });
};
