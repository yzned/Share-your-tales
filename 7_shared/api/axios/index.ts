import api, {fileApi as $fileApi} from './config';

const fileApi = {
  getUploadLink: async (fileName: string, category: 'AVATARS' | 'POSTS') => {
    return api.get<string>(
      `v1/aws/signed-url?fileName=${fileName}&fileCategory=${category}`,
    );
  },
  uploadImage: async (link: string, data: Blob) => {
    return $fileApi.put(link, data);
  },
  deleteImage: async (fileKey: string, category: 'AVATARS' | 'POSTS') => {
    return api.delete<void>(
      `/v1/aws/delete-s3-file?fileKey=${fileKey}&fileCategory=${category}`,
    );
  },
};

export default fileApi;
