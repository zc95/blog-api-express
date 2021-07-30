define({ "api": [
  {
    "type": "post",
    "url": "/api/post",
    "title": "新建文章",
    "description": "<p>新建文章</p>",
    "name": "新建文章",
    "group": "文章",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/post"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n  \"title\": \"文章标题\",\n  \"desc\": \"描述\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应示例",
          "content": "{\n  \"code\": 0,\n  \"data\": {}\n  \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/post.js",
    "groupTitle": "文章"
  }
] });
