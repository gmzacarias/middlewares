import type { NextApiRequest, NextApiResponse } from "next"
import { generate } from "lib/jwt"

export default async function (req: NextApiRequest, res: NextApiResponse) {
let token=generate({userId:"bO8nVkJYSnoSTt532CHk"})
    // const auth = await sendCode(req.body.email)

res.send({token})
}