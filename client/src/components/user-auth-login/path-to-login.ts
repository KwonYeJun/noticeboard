import axios from 'axios';

const API_BASE_URL = '/user/auth';

// 로그인 요청을 보내는 함수
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
