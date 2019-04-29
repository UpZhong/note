/**
 * 读取mock数据
 */
const fs = require('fs');
exports.get_index_data = function () {
    const content = fs.readFileSync('./mock/index.json', 'utf-8');
    return content;
}

/**
 * 从后台获取数据
 */
exports.get_search_data = function (start, end, keyword) {
    return function (cb) {
        const http = require('http');
        const qs = require('querystring');
        const data = {
            s: keyword,
            start: start,
            end: end
        }
        const content = qs.stringify(data);
        const http_request = {
            hostname: "dushu.xiaomo.com",
            port: 80,
            path: 'store/vo/lib/query/onebox?' + content
        }
        let req_obj = http.request(http_request, function (res) {
            let content = "";
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                content += chunk;
            })
            res.on('end', function () {
                cb(content)
            })
        })

        req_obj.on('error', function () { })
        req_obj.end();
    }
}