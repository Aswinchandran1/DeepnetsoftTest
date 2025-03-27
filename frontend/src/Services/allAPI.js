import commonAPI from "./commonAPI";
import SERVER_URL from "./SERVERURL";

export const createMenu = async (reqBody) => {
    return commonAPI("POST", `${SERVER_URL}/createMenu`, reqBody)
}

export const getAllMenu = async () => {
    return commonAPI("GET", `${SERVER_URL}/getAllMenu`, {})
}

export const getMenuItems = async (menuId) => {
    return commonAPI("GET", `${SERVER_URL}/getMenuItems/${menuId}`, {})
}



export const addMenuItem=async(reqBody,menuId)=>{
    return commonAPI("POST", `${SERVER_URL}/createMenu,addMenuItem/${menuId}`, reqBody)
}
