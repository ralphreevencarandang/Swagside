export const requireUser = (req, res, next) => {
    // return error if user is not available and req.user.isAdmin = true because the true is for admin only
    if (!req.user || req.user.isAdmin) {
        return res.status(403).json({ 
            success: false, 
            message: 'Access denied. User access only' 
        });
    }
    
    next();
};
