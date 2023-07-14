import axios from "../../api/index";
export const cloudSave = (userPoint, userId) => {
  return async function (dispatch) {
    dispatch(saveStart());

    const data = {
      userPoint,
    };
    console.log(userId, "saveData start = = => ", data);
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      const response = await axios.patch(`/users/point/${userId}`, data);

      console.log("saveData success ===> ", response.data.success);

      dispatch(saveSuccess(response.data));
    } catch (error) {
      console.log("saveData errCatch ===> " + error);
      dispatch(saveError(error));
    }
  };
};
export const saveStart = () => {
  return {
    type: "ClOUD_SAVE_DATA_START",
  };
};
export const saveSuccess = (authData) => {
  return {
    type: "ClOUD_SAVE_DATA_SUCCESS",
    authData,
  };
};
export const saveError = (error) => {
  return {
    type: "ClOUD_SAVE_DATA_ERROR",
    error,
  };
};
// -------post------//

export const cloudSendStep = (
  name,
  desc,
  e,
  e2,
  audio,
  photo,
  desc2,
  stepExam,
  category
) => {
  return async function (dispatch) {
    dispatch(cloudSaveStart());
    const exampleSentence = [e,e2]
    const data1 = {
      name,
      desc,
      exampleSentence,
      audio,
      photo,
      desc2,
      stepExam,
      category,
    };
    console.log("<<<<<<<< cloudDataBooks success ===>>>>>>>>>>", data1);
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.post("/steps", data1);

      console.log("cloudDataBooks success ===>", response.data);

      dispatch(cloudSaveSuccess(response.data));
    } catch (error) {
      console.error("cloudDataBooks errCatch ===>", error);
      dispatch(cloudSaveError(error));
    }
  };
};

export const cloudSaveStart = () => {
  return {
    type: "CLOUD_SAVE_START",
  };
};

export const cloudSaveSuccess = () => {
  // console.log(booksData)
  return {
    type: "CLOUD_SAVE_SUCCESS",
    // booksData: booksData,
  };
};

export const cloudSaveError = (error) => {
  return {
    type: "CLOUD_SAVE_ERROR",
    error,
  };
};
