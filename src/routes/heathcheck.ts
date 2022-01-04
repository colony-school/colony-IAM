import { Request, Response } from 'express';


async function healthcheck(req: Request, res: Response): Promise<Response> {
    return res.status(200).send({
        message: "Hello World!",
    });
}

export default healthcheck;