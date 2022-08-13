import axios from 'axios';

export const defaultParams = () => ({
  headers: { Authorization: `Bearer ${("")}` },
});

export const defaultFileParams = () => ({
  headers: {
    Authorization: `Bearer ${("")}`,
    'Content-Type': 'multipart/form-data',
  },
});

export default axios;
