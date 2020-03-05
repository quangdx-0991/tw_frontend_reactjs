
let tekway_service = '/isofhcare'; //dev 
// let tekway_service = '/isofhcare'; //test


module.exports = {
    key: {
        storage: {
            current_account: "CURRENT_USER"

        }
    },
    action: {
        action_user_login: "ACTION_USER_LOGIN",
        action_user_logout: "ACTION_USER_LOGOUT",
    },
    booking:
    {
    
    },
    text: {
        user: {
            create_error: "Tạo mới tài khoản không thành công!",
            update_error: "Cập nhật tài khoản không thành công!",
        }
    },
    api: {
        user: {
            search: tekway_service + "/user/search",
            login: tekway_service + "/user/login",
            block: tekway_service + "/user/block",
            create: tekway_service + "/user/create",
            update: tekway_service + "/user/update",
        }, image: {
            upload: tekway_service + "/upload/image"
        }
    },
} 