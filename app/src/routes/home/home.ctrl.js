
const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    }
}

const users = {
    id : ["qwer", "asdf", "zxcv"],
    password : ["1234", "5678", "9012"],
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success : false,
            msg: "로그인에 실파하였습니다.",
        });
    },
};

module.exports = {
    output,
    process,
}