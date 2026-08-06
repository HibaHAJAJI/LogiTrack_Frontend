import api from "./axios";


export const getDashboard = async() =>{
  const response = await  api.get("/dashboards");

  return response.data;
};

const dashboardService = {
  getDashboard,
};

export default dashboardService;