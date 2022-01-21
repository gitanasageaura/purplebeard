let projectData;

fetch('../_data/project-data.json')
  .then((res) => res.json())
  .then((data) => {
    getData(data);
  });

getData = (data) => {
  projectData = data;
  console.log(projectData);
  console.log(projectData[0].firstName);
};
