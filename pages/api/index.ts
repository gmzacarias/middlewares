import type { NextApiRequest, NextApiResponse } from "next"
import { Auth } from "lib/auth"
import { User } from "lib/user"
import { findCreateAuth,sendCode } from "controllers/auth"


export default async function (req: NextApiRequest, res: NextApiResponse) {
    // const newUser = new Auth("rjO1SnOEimq9p0Y5wAeZ")
    // await newUser.pull()
    // newUser.data.test = "dato hacia la base"
    // await newUser.push()
    // const auth = await findCreateAuth(req.body.email)
    const auth = await sendCode(req.body.email)
    // auth.data.test="cambio desde el endpoint"
// await auth.push()    
// const newUser=await User.createNewUser({
//     email:"soy el user"
// })
// newUser.data.test="cambio"
// await newUser.push()
res.send(auth)
}