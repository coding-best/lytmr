var fileHost = "https://liyuantumuren.oss-cn-shenzhen.aliyuncs.com/"
var config = {
    //aliyun OSS config
    uploadImageUrl: `${fileHost}`, //默认存在根目录，可根据需求改
    AccessKeySecret: 'QdNA9ZNDK31TSWrdBapQtBrpeH0OIg',
    OSSAccessKeyId: 'LTAIpb79IW2CXXdT',
    timeout: 87600 //这个是上传文件时Policy的失效时间
};
module.exports = config