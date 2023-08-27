import CreateInstance from "../shared/helper/mockApi";


export const getOrder = async () => {
    try {
        const data = await CreateInstance({ method: "GET", url: "/fruits" })
        return data
    } catch (err) {
        console.log(err);
    }
}