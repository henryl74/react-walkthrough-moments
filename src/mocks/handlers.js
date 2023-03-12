import { rest } from "msw";

const baseURL = "https://django-rest-api-project.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "Test",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image: 
          "https://res.cloudinary.com/dkvxntfhc/image/upload/v1/media/images/Test_cdzngv",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
