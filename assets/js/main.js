const handleClickLanding = () => {
  console.log("landing clicked");
  const content = document.getElementsByClassName("content")[0];
  const landingTemplate = document.getElementById("landingTemplate");
  const landing = document.importNode(landingTemplate.content, true);
  content.replaceWith(landing);
};

const handleClickCompany = () => {
  console.log("company clicked");
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
    console.log("projects cilcked!");
  });

  document.getElementById("companyNav").addEventListener("click", event => {
    handleClickCompany();
  });
};
