import jwt from "jsonwebtoken";

export const requireAdminAuth = (req, res, next) => {
    const token = req.headers.authorization; 

    if (!token) {
        return res.status(401).json({ message: "אין גישה, חסר טוקן" });
    }

    try {
        const decoded = jwt.verify(token, process.env.PRIVIT_JWT);
        req.admin = decoded; 
        next(); 
    } catch (err) {
        res.status(401).json({ message: "טוקן לא תקין" });
    }
};