import UnstructuredApi from "../serverConfig";

export const signUp = (data, callBack) => {
    UnstructuredApi({
      method: 'POST',
      url: `/auth`,
      data: data,
    })
      .then(response => {
        if (response.data) {
          callBack({status: 'success', data: response.data});
        }
      })
      .catch(error => {
        console.log('Error occure while uploading image', error.message);
        callBack({status: 'error'});
      });
  };