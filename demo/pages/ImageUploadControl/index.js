Page({
  data: {
    fileList: [{
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
      status: 'done',
    }, {
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kStORbDQxwMAAAAAAAAAAAAAARQnAQ',
      status: 'pending',
    }, {
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*K4Z-RLHuliYAAAAAAAAAAAAAARQnAQ',
      status: 'error', 
    }],
  },
  onChange(fileList) {
    this.setData({
      fileList,
    });
  },
  onUpload(file) {
    console.log('当前上传的图片为：', file);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
      }, 2000);
    })
  },
});
