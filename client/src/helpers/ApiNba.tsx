import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getTeams = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const Teams: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/nba/teams"
    );
    return Teams;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getTeam = async (id:Number): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const Teams: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + `/nba/teams/${id}`
    );
    return Teams;
  } catch (error: any) {
    throw new Error(error);
  }
};