export const requireAdmin = (req, res, next) => {
    // request the user
    // return error if user is not available and req.user.isAdmin = false because the true is for admin only
    if (!req.user || !req.user.isAdmin ) {
        return res.status(403).json({ 
            success: false, 
            message: 'Access denied. Admin privileges required' ,
        });
    }

    
    next();
};
