
const signup = async (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 'success',
        message: 'This is the login page'
    });
}

const login = async (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 'success',
        message: 'This is the login page'
    });

}



module.exports = {
    login,
    signup
}