import axios from "axios";
import $ from 'jquery'

export default {
    test() {
        console.log(123456)
    },

    txtSear(callback, option, key, from, size) {
        console.log(option, key, from, size)


        axios({
                method: "get",
                url: `https://api.pingcc.cn/fiction/search/${option}/${key}/${from}/10`,
                timeout: 10000,
                withCredentials: false

            })
            .then((res) => {
                if (callback) {
                    callback(res)
                }

            })
            .catch((res) => {
                console.log(res, "小说搜索");
                let data = {
                    code: 1,
                    msg: '接口超时!!'
                }
                res.data = data
                if (callback) {
                    callback(res)
                }
            });
    },
    //小说章节
    detailTxt(callback, fictionId) {
        console.log(fictionId)
        axios({
                method: "get",
                url: `https://api.pingcc.cn/fictionChapter/search/${fictionId}`,
                withCredentials: false

            })
            .then((res) => {
                if (callback) {
                    callback(res)
                }

            })
            .catch((res) => {
                console.log(res, "章节搜索");
            });

    },
    //小说内容
    txtContent(callback, chapterId) {
        // https://api.pingcc.cn/fictionContent/search/{chapterId}

        axios({
                method: "get",
                url: `https://api.pingcc.cn/fictionContent/search/${chapterId}`,
                withCredentials: false

            })
            .then((res) => {
                if (callback) {
                    callback(res)
                }

            })
            .catch((res) => {
                console.log(res, "章节搜索");
            });
    },



}