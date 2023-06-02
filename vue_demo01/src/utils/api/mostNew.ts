import request from "../request";
export function mostNew(data) {
    return request({
        url: '/api/course/mostNew',
        method: 'post',
        data
    })
}