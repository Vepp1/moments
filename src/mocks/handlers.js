import { rest } from "msw"

const baseURL = 'https://drf-api-vini.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            pk: 3,
            username: 'luzi',
            email: '',
            first_name: '',
            last_name: '',
            profile_id: 3,
            profile_image: 	"https://res.cloudinary.com/dzd4izfmm/image/upload/v1/media/../default_profile_w6fji9",
        })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
]