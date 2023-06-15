import { NextApiRequest, NextApiResponse } from "next"

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ message: "Hello world" })
}

export default hello
