import jwt from "jsonwebtoken"

export const validateJWT = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers["authorization"]

    if(!token){
        return res.status(401).json({
            success: false,
            message: "No hay token en la peticion"
        })
    }

    try{
        token = token.replace(/^Bearer\s+/, '')
        const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        req.uid = decoded.uid
    }catch(err){
        res.status(401).json({
            success: false,
            msg: 'Token no valido'
        });
    }
    next()
}