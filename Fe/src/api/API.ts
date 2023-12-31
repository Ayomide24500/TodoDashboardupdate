import axios from "axios";

const URL: string = "http://localhost:1122";
export const viewOneProject = async () => {
  try {
    return await axios.get(`${URL}/view-project`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProject = async (projectID: string) => {
  try {
    const response = await axios.get(`${URL}/view-one-project/${projectID}`);
    console.log("Backend Response:", response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewProject = async () => {
  try {
    const response = await axios.post(`${URL}/create-project`);
    window.location.reload();
    response.data.projectID;
  } catch (error) {
    console.error("Error creating new project:", error);
  }
};

export const AddTask = async (projectID: string) => {
  try {
    await axios.post(`${URL}/add-task-to-project/${projectID}`);
  } catch (error) {}
};
