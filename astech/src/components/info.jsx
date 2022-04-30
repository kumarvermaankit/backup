import React from "react"
import axios from "axios";

    export const getProfile = token => {
        return axios
          .get("signin/info", {
            headers: { Authorization: ` ${token}` }
          })
          .then(response => {
            console.log(response)
            return response.data
          })
          .catch(err => {
            console.log(err)
          })
     
}

export default getProfile;