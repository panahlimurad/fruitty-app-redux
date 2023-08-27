import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/fruits").reply(200, {
  fruits: [
    {
      name: "apple",
      price: 2.5,
      count: 0,
      id: 1,
      img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
    },
    {
      name: "granate",
      price: 1.5,
      count: 0,
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKLzBAG_vCzlGcBRSxU1y0WK8QpG4xuje8A&usqp=CAU",
    },
    {
      name: "peach",
      price: 3.5,
      count: 0,
      id: 3,
      img: "https://media.istockphoto.com/id/818448802/photo/peach-with-leaf-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=pcxWPDxUnYYExzHK8NFBag9NZp5dSs7J5ac_VLgtyJs=",
    },
  ],
});

const CreateInstance = axios.create({
  baseURL: "",
});

export default CreateInstance;
