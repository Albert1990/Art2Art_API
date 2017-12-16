define({ "api": [
  {
    "type": "get",
    "url": "/artworks",
    "title": "Artworks List",
    "name": "Artworks_List",
    "group": "Artworks",
    "description": "<p>ex:http://localhost:8888/api/v1/artworks?ageMax=6&amp;school=938&amp;country=200&amp;curriculum=0&amp;keyword=Sandras&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjkzOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNTA1OTQwMTQ4LCJleHAiOjE2NjM2MjAxNDgsIm5iZiI6MTUwNTk0MDE0OCwianRpIjoiMkpub00yMHlnVFpiSjlBZCJ9.TkQmjRvnKu6QOxhO2o0qm0RGM6KJQbTA7yGOAWvXG9Q</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMin",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMax",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "curriculum",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Optional (query parameter).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: Without access token",
          "content": "{\"data\":[{\"id\":\"18\",\"title\":\"Ipad\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-03-17\",\"keywords\":\"Toys\",\"studentAge\":4,\"subject\":{\"id\":\"37\",\"name\":\"Art and Design\"},\"student\":\"\"},{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":\"\"},{\"id\":\"26\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"UAE, Map\",\"studentAge\":5,\"subject\":{\"id\":\"44\",\"name\":\"Geography\"},\"student\":\"\"},{\"id\":\"27\",\"title\":\"Map2\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"Map\",\"studentAge\":\"\",\"subject\":{\"id\":\"47\",\"name\":\"History\"},\"student\":\"\"}],\"paginator\":{\"total_count\":4,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        },
        {
          "title": "Success-Response: With access token",
          "content": "\n{\"data\":[{\"id\":\"18\",\"title\":\"Ipad\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-03-17\",\"keywords\":\"Toys\",\"studentAge\":4,\"subject\":{\"id\":\"37\",\"name\":\"Art and Design\"},\"student\":{\"id\":\"921\",\"email\":\"shoshaho@hotmail.com\",\"first_name\":\"shoshaho\",\"last_name\":\"shoshaho\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"},\"school\":{\"id\":\"909\",\"email\":\"mhd.oubaid@gmail.com\",\"name\":\"Oubaid\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}},{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}},{\"id\":\"26\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"UAE, Map\",\"studentAge\":5,\"subject\":{\"id\":\"44\",\"name\":\"Geography\"},\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}},{\"id\":\"27\",\"title\":\"Map2\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"Map\",\"studentAge\":\"\",\"subject\":{\"id\":\"47\",\"name\":\"History\"},\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}}],\"paginator\":{\"total_count\":4,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "delete",
    "url": "/artworks/{id}",
    "title": "Delete Artwork",
    "name": "Delete_Artwork",
    "group": "Artworks",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[],\"message\":\"Item deleted successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "get",
    "url": "/artworks/{id}",
    "title": "Show Artwork",
    "name": "Show_Artwork",
    "group": "Artworks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Artwork unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: Without access token",
          "content": "\n{\"data\":{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":\"\"}}",
          "type": "json"
        },
        {
          "title": "Success-Response: With access token",
          "content": "\n{\"data\":{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/_file5985eae3513f0.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/_file5985eae3513f0.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/_file5985eae3513f0.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/_file5985eae3513f0.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/_file5985eae3513f0.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/_file5985eae3513f0.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "post",
    "url": "/artworks",
    "title": "Store Artwork",
    "name": "Store_Artwork",
    "group": "Artworks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subjectId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "studentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n{\"data\":{\"id\":\"29\",\"title\":\"eeeeee\",\"comment_1\":\"comment text\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/_file5985eae3513f0.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/_file5985eae3513f0.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/_file5985eae3513f0.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/_file5985eae3513f0.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/_file5985eae3513f0.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/_file5985eae3513f0.jpg\",\"createdAt\":\"2017-08-05\",\"uploadedAt\":\"2017-08-05\",\"keywords\":\"ttt,ttt\",\"studentAge\":3,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},\"message\":\"Item created successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNAUTHORIZED\",\"message\":\"you are not teacher for student has id=946\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "put",
    "url": "/artworks/{id}",
    "title": "Update Artwork",
    "name": "Update_Artwork",
    "group": "Artworks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "creation_date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dispaly",
            "description": "<p>(0 privat ,1 public)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n{\"data\":{\"id\":\"29\",\"title\":\"eeeeee\",\"comment_1\":\"comment text\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/public/images/uploads/arts/1000/_file5985eae3513f0.jpg\",\"image_500\":\"http://localhost:8888/public/images/uploads/arts/500/_file5985eae3513f0.jpg\",\"image_300\":\"http://localhost:8888/public/images/uploads/arts/300/_file5985eae3513f0.jpg\",\"image_160\":\"http://localhost:8888/public/images/uploads/arts/160/_file5985eae3513f0.jpg\",\"image_60\":\"http://localhost:8888/public/images/uploads/arts/60/_file5985eae3513f0.jpg\",\"croppedImage\":\"http://localhost:8888/public/images/uploads/arts/cropped/_file5985eae3513f0.jpg\",\"createdAt\":\"2017-08-05\",\"uploadedAt\":\"2017-08-05\",\"keywords\":\"ttt,ttt\",\"studentAge\":3,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},\"message\":\"Item updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "put",
    "url": "/artworks/{id}/update_display",
    "title": "Update Artwork Display Status",
    "name": "Update_Artwork_Display_by_student_",
    "description": "<p>Update Artwork Display Status (access by student)</p>",
    "group": "Artworks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dispaly",
            "description": "<p>(0 privat ,1 public)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n{\"data\":{\"id\":\"28\",\"title\":\"new\",\"comment_1\":\"ssssss\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"2017-07-29\",\"uploadedAt\":\"2017-07-29\",\"status\":\"1\",\"displayStatus\":\"\",\"tags\":\"Eid,Festival\",\"studentAge\":3,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},\"message\":\"Item updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "get",
    "url": "/artworks/{id}/comments",
    "title": "comments List",
    "name": "comments_List",
    "group": "Artworks",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\"data\":[{\"id\":\"25\",\"artwork\":20,\"user\":{\"id\":\"939\",\"email\":\"molham.mah@gmail.com\",\"first_name\":\"Tarazan\",\"last_name\":\"tr\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}},\"comment\":\"school gallery opening day\"},{\"id\":\"35\",\"artwork\":20,\"user\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}},\"comment\":\"comment mmmm put\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/commentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CommentsController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "get",
    "url": "/artworks/{id}/likes",
    "title": "Likes List",
    "name": "likes_List",
    "group": "Artworks",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\"data\":[{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/commentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/LikesController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "post",
    "url": "/auth/forget_password",
    "title": "Forget Password",
    "name": "ForgetPassword",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[],\"message\":\"RESET_LINK_SENT\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "INVALID_USER",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"CANT_RESET_PASSWORD\",\"message\":\"Could not reset password\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response: VALIDATION_ERROR",
          "content": "{\"error\":{\"code\":\"VALIDATION_ERROR\",\"message\":\"\",\"details\":{\"email\":[\"The email must be a valid email address.\"]}}}",
          "type": "json"
        },
        {
          "title": "Error-Response: UNKNOWN_EXCEPTION",
          "content": "\n{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\"Error Processing Request in /Api/v1/UsersController.php in Line :296\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"INVALID_USER\",\"message\":\"We couldn't find your account with that information.\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/reset_password",
    "title": "Reset Password",
    "name": "ResetPassword",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Reset password token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>New password confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[],\"message\":\"PASSWORD_RESET\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"CANT_RESET_PASSWORD\",\"message\":\"Could not reset password\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response: VALIDATION_ERROR",
          "content": "{\"error\":{\"code\":\"VALIDATION_ERROR\",\"message\":\"\",\"details\":{\"email\":[\"The email must be a valid email address.\"]}}}",
          "type": "json"
        },
        {
          "title": "Error-Response: UNKNOWN_EXCEPTION",
          "content": "\n{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\"Error Processing Request in /Api/v1/UsersController.php in Line :296\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "UserLogin",
    "description": "<p>this field shown just for student artwork_default_display_status</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":\"946\",\"type\":\"student\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"artwork_default_display_status\":1,\"address\":\"test\",\"birthday\":\"2000-10-05\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"},\"school\":{\"id\":\"944\",\"email\":\"shalabi.eng@gmail.com\",\"name\":\"test school\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},\"message\":\"Item updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>validation error.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"INCORRECT_EMAIL_OR_PASSWORD\",\"message\":\"\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"VALIDATION_ERROR\",\"message\":\"\",\"details\":{\"password\":[\"The password field is required.\"]}}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Applications\\/MAMP\\/htdocs\\/tapdrive\\/api\\/app\\/Http\\/Controllers\\/Api\\/v1\\/UsersController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/change_password",
    "title": "Change Password",
    "name": "changePassword",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":\"938\",\"type\":\"school\",\"email\":\"fatherboard1@gmail.com\",\"name\":\"Alfarouq\",\"phone\":\"933074900\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"},\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjkzOCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS92MS9hdXRoL2NoYW5nZV9wYXNzd29yZCIsImlhdCI6MTUwNjE3MDA2NywiZXhwIjoxNjYzODUwMDY3LCJuYmYiOjE1MDYxNzAwNjcsImp0aSI6ImR0ZFk1VEl2WURsU1Zjd1oifQ.OcR0o5v40AKWIXbnz8wdW6QIlRz47CrXy3CbHIkfSI4\"},\"message\":\"Item updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"INCORRECT_PASSWORD\",\"message\":\"\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"VALIDATION_ERROR\",\"message\":\"\",\"details\":{\"oldPassword\":[\"The old password field is required.\"]}}}",
          "type": "json"
        },
        {
          "title": "Error-Response: UNKNOWN_EXCEPTION",
          "content": "\n{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\"Error Processing Request in /Api/v1/UsersController.php in Line :296\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/comments/{id}",
    "title": "Delete Comment",
    "name": "Delete_Comment",
    "group": "Comments",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[],\"message\":\"Item deleted successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/CommentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CommentsController.php",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "Store Comment",
    "name": "Store_Comment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "artwork_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":\"36\",\"artwork\":20,\"user\":946,\"comment\":\"comment test\"},\"message\":\"Item created successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"VALIDATION_ERROR\",\"message\":\"\",\"details\":{\"artwork_id\":[\"The selected artwork id is invalid.\"]}}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/CommentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CommentsController.php",
    "groupTitle": "Comments"
  },
  {
    "type": "put",
    "url": "/comments",
    "title": "Update Comment",
    "name": "Update_Comment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":\"36\",\"artwork\":20,\"user\":946,\"comment\":\"comment test update\"},\"message\":\"Item updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": "<p>validation failed</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/CommentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CommentsController.php",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/countries",
    "title": "Countries List",
    "name": "Countries_List",
    "group": "Countries",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[{\"id\":\"1\",\"name\":\"Afghanistan\",\"code\":\"93\"},{\"id\":\"2\",\"name\":\"Algeria \",\"code\":\"213\"},{\"id\":\"3\",\"name\":\"Andorra \",\"code\":\"376\"},{\"id\":\"4\",\"name\":\"Angola \",\"code\":\"244\"},{\"id\":\"8\",\"name\":\"Argentina \",\"code\":\"54\"},{\"id\":\"9\",\"name\":\"Armenia \",\"code\":\"374\"},{\"id\":\"12\",\"name\":\"Australia \",\"code\":\"61\"},{\"id\":\"13\",\"name\":\"Austria \",\"code\":\"43\"},{\"id\":\"14\",\"name\":\"Azerbaidjan \",\"code\":\"994\"},{\"id\":\"16\",\"name\":\"Bahamas \",\"code\":\"1-242\"},{\"id\":\"17\",\"name\":\"Bahrain \",\"code\":\"973\"},{\"id\":\"18\",\"name\":\"Bangladesh\",\"code\":\"880\"},{\"id\":\"20\",\"name\":\"Belarus \",\"code\":\"375\"},{\"id\":\"21\",\"name\":\"Belgium \",\"code\":\"32\"},{\"id\":\"25\",\"name\":\"Bhutan \",\"code\":\"975\"},{\"id\":\"26\",\"name\":\"Bolivia \",\"code\":\"591\"},{\"id\":\"29\",\"name\":\"Brazil \",\"code\":\"55\"},{\"id\":\"33\",\"name\":\"Bulgaria \",\"code\":\"359\"},{\"id\":\"37\",\"name\":\"Cameroon \",\"code\":\"237\"},{\"id\":\"38\",\"name\":\"Canada \",\"code\":\"1\"},{\"id\":\"43\",\"name\":\"Chile \",\"code\":\"56\"},{\"id\":\"44\",\"name\":\"China \",\"code\":\"86\"},{\"id\":\"48\",\"name\":\"Colombia \",\"code\":\"57\"},{\"id\":\"53\",\"name\":\"Costarica \",\"code\":\"506\"},{\"id\":\"55\",\"name\":\"Croatia \",\"code\":\"385\"},{\"id\":\"56\",\"name\":\"Cuba \",\"code\":\"53\"},{\"id\":\"57\",\"name\":\"Cyprus \",\"code\":\"357\"},{\"id\":\"58\",\"name\":\"Czech Republic\",\"code\":\"420\"},{\"id\":\"60\",\"name\":\"Denmark \",\"code\":\"45\"},{\"id\":\"65\",\"name\":\"Ecuador \",\"code\":\"00593\"},{\"id\":\"66\",\"name\":\"Egypt \",\"code\":\"0020\"},{\"id\":\"73\",\"name\":\"Finland\",\"code\":\"00358\"},{\"id\":\"74\",\"name\":\"France\",\"code\":\"0033\"},{\"id\":\"77\",\"name\":\"Gabon \",\"code\":\"00241\"},{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},{\"id\":\"80\",\"name\":\"Ghana \",\"code\":\"00233\"},{\"id\":\"82\",\"name\":\"Greece \",\"code\":\"0030\"},{\"id\":\"89\",\"name\":\"Hawaii \",\"code\":\"001\"},{\"id\":\"92\",\"name\":\"Hungary \",\"code\":\"0036\"},{\"id\":\"94\",\"name\":\"India\",\"code\":\"0091\"},{\"id\":\"95\",\"name\":\"Indonesia \",\"code\":\"0062\"},{\"id\":\"97\",\"name\":\"Iran \",\"code\":\"0098\"},{\"id\":\"98\",\"name\":\"Iraq \",\"code\":\"00964\"},{\"id\":\"99\",\"name\":\"Ireland \",\"code\":\"00353\"},{\"id\":\"100\",\"name\":\"Israel \",\"code\":\"00972\"},{\"id\":\"101\",\"name\":\"Italy \",\"code\":\"0039\"},{\"id\":\"103\",\"name\":\"Jamaica \",\"code\":\"001 809\"},{\"id\":\"104\",\"name\":\"Japan \",\"code\":\"0081\"},{\"id\":\"105\",\"name\":\"Jordan \",\"code\":\"00962\"},{\"id\":\"107\",\"name\":\"Kenya \",\"code\":\"00254\"},{\"id\":\"110\",\"name\":\"Kuwait \",\"code\":\"00965\"},{\"id\":\"114\",\"name\":\"Lebanon \",\"code\":\"00961\"},{\"id\":\"117\",\"name\":\"Libya \",\"code\":\"00218\"},{\"id\":\"126\",\"name\":\"Malaysia \",\"code\":\"0060\"},{\"id\":\"128\",\"name\":\"Mali \",\"code\":\"00223\"},{\"id\":\"133\",\"name\":\"Mauritius \",\"code\":\"00230\"},{\"id\":\"134\",\"name\":\"Mexico \",\"code\":\"0052\"},{\"id\":\"137\",\"name\":\"Monaco \",\"code\":\"00377\"},{\"id\":\"141\",\"name\":\"Myanmar \",\"code\":\"0095\"},{\"id\":\"144\",\"name\":\"Nepal \",\"code\":\"00977\"},{\"id\":\"145\",\"name\":\"Netherlands \",\"code\":\"0031\"},{\"id\":\"149\",\"name\":\"New Zealand \",\"code\":\"0064\"},{\"id\":\"153\",\"name\":\"Nigeria \",\"code\":\"00234\"},{\"id\":\"156\",\"name\":\"Norway \",\"code\":\"0047\"},{\"id\":\"158\",\"name\":\"Pakistan \",\"code\":\"0092\"},{\"id\":\"160\",\"name\":\"Panama \",\"code\":\"00507\"},{\"id\":\"162\",\"name\":\"Paraguay \",\"code\":\"00595\"},{\"id\":\"163\",\"name\":\"Peru \",\"code\":\"0051\"},{\"id\":\"164\",\"name\":\"Philippines \",\"code\":\"0063\"},{\"id\":\"165\",\"name\":\"Poland \",\"code\":\"0048\"},{\"id\":\"166\",\"name\":\"Portugal \",\"code\":\"00351\"},{\"id\":\"168\",\"name\":\"Qatar\",\"code\":\"00974\"},{\"id\":\"171\",\"name\":\"Russia\",\"code\":\"007\"},{\"id\":\"177\",\"name\":\"Saudi Arabia \",\"code\":\"00966\"},{\"id\":\"181\",\"name\":\"Singapore \",\"code\":\"0065\"},{\"id\":\"185\",\"name\":\"South Africa \",\"code\":\"0027\"},{\"id\":\"188\",\"name\":\"Spain \",\"code\":\"0034\"},{\"id\":\"190\",\"name\":\"Sri Lanka \",\"code\":\"0094\"},{\"id\":\"198\",\"name\":\"Sweden \",\"code\":\"0046\"},{\"id\":\"199\",\"name\":\"Switzerland \",\"code\":\"0041\"},{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"},{\"id\":\"201\",\"name\":\"Taiwan \",\"code\":\"00886\"},{\"id\":\"204\",\"name\":\"Thailand \",\"code\":\"0066\"},{\"id\":\"209\",\"name\":\"Turkey \",\"code\":\"0090\"},{\"id\":\"214\",\"name\":\"Ukraine\",\"code\":\"00380\"},{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"},{\"id\":\"216\",\"name\":\"United Kingdom \",\"code\":\"0044\"},{\"id\":\"217\",\"name\":\"Uruguay \",\"code\":\"00598\"},{\"id\":\"218\",\"name\":\"USA \",\"code\":\"001\"},{\"id\":\"221\",\"name\":\"Vatican City \",\"code\":\"0039-6\"},{\"id\":\"222\",\"name\":\"Venezuela \",\"code\":\"0058\"},{\"id\":\"223\",\"name\":\"Vietnam \",\"code\":\"0084\"},{\"id\":\"229\",\"name\":\"Yemen\",\"code\":\"00967\"},{\"id\":\"234\",\"name\":\"Zimbabwe \",\"code\":\"00263\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/CountriesController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CountriesController.php",
    "groupTitle": "Countries"
  },
  {
    "type": "get",
    "url": "/curriculums",
    "title": "Curriculums List",
    "name": "Curriculums_List",
    "group": "Curriculums",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[{\"id\":\"1\",\"title\":\"US\"},{\"id\":\"2\",\"title\":\"UK\"},{\"id\":\"3\",\"title\":\"INDIAN\"},{\"id\":\"4\",\"title\":\"MOE\"},{\"id\":\"5\",\"title\":\"IB\"},{\"id\":\"6\",\"title\":\"FRENCH\"},{\"id\":\"7\",\"title\":\"GERMANY\"},{\"id\":\"8\",\"title\":\"IRANIAN\"},{\"id\":\"9\",\"title\":\"JAPANESE\"},{\"id\":\"10\",\"title\":\"PHILIPPINE\"},{\"id\":\"11\",\"title\":\"RUSSIAN\"},{\"id\":\"12\",\"title\":\"PAKISTANI\"},{\"id\":\"13\",\"title\":\"SABIS\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/CurriculumsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CurriculumsController.php",
    "groupTitle": "Curriculums"
  },
  {
    "type": "post",
    "url": "/Likes",
    "title": "Toggel Like",
    "name": "Toggel_Like__if_not_like_store_else_delete_like_",
    "group": "Likes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":\"\",\"message\":\"Item created successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": "<p>validation failed</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/LikesController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/LikesController.php",
    "groupTitle": "Likes"
  },
  {
    "type": "post",
    "url": "/contactUs",
    "title": "Contact us",
    "name": "ContactUs",
    "group": "Others",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>client's name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>client's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>client's message</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[],\"message\":\"CONTACT_US_REQUEST_SENT\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"VALIDATION_ERROR\",\"message\":\"\",\"details\":{\"oldPassword\":[\"The old password field is required.\"]}}}",
          "type": "json"
        },
        {
          "title": "Error-Response: UNKNOWN_EXCEPTION",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\"Error Processing Request in /Api/v1/UsersController.php in Line :296\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/OthersController.php",
    "groupTitle": "Others"
  },
  {
    "type": "get",
    "url": "/profile/artworks",
    "title": "Artworks List",
    "name": "Artworks_List",
    "description": "<p>access by student</p>",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMin",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMax",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "curriculum",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Optional (query parameter).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: Without access token",
          "content": "{\"data\":[{\"id\":\"18\",\"title\":\"Ipad\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/image-1458211130-54373.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/image-1458211130-54373.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-03-17\",\"keywords\":\"Toys\",\"studentAge\":4,\"subject\":{\"id\":\"37\",\"name\":\"Art and Design\"},\"student\":\"\"},{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":\"\"},{\"id\":\"26\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584320-39063.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584320-39063.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"UAE, Map\",\"studentAge\":5,\"subject\":{\"id\":\"44\",\"name\":\"Geography\"},\"student\":\"\"},{\"id\":\"27\",\"title\":\"Map2\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491585701-84711.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491585701-84711.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"Map\",\"studentAge\":\"\",\"subject\":{\"id\":\"47\",\"name\":\"History\"},\"student\":\"\"}],\"paginator\":{\"total_count\":4,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        },
        {
          "title": "Success-Response: With access token",
          "content": "\n{\"data\":[{\"id\":\"18\",\"title\":\"Ipad\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/image-1458211130-54373.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/image-1458211130-54373.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-03-17\",\"keywords\":\"Toys\",\"studentAge\":4,\"subject\":{\"id\":\"37\",\"name\":\"Art and Design\"},\"student\":{\"id\":\"921\",\"email\":\"shoshaho@hotmail.com\",\"first_name\":\"shoshaho\",\"last_name\":\"shoshaho\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"},\"school\":{\"id\":\"909\",\"email\":\"mhd.oubaid@gmail.com\",\"name\":\"Oubaid\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}},{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}},{\"id\":\"26\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584320-39063.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584320-39063.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"UAE, Map\",\"studentAge\":5,\"subject\":{\"id\":\"44\",\"name\":\"Geography\"},\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}},{\"id\":\"27\",\"title\":\"Map2\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491585701-84711.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491585701-84711.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"Map\",\"studentAge\":\"\",\"subject\":{\"id\":\"47\",\"name\":\"History\"},\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}}],\"paginator\":{\"total_count\":4,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "Profile"
  },
  {
    "type": "put",
    "url": "/profile",
    "title": "Update Profile",
    "name": "UpdateProfile",
    "description": "<p>Update Profile access by student</p>",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "artwork_default_display_status",
            "description": "<p>(0 privat ,1 public)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User (M | F).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday of the User (UTC format 2017-07-19 21:16:04.000000).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryId",
            "description": "<p>user country id.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "photo",
            "description": "<p>user photo (mimetypes:image/png,image/jpeg,image/bmp|max:1000).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":\"946\",\"type\":\"student\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"artwork_default_display_status\":1,\"address\":\"test\",\"birthday\":\"2000-10-05\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"},\"school\":{\"id\":\"944\",\"email\":\"shalabi.eng@gmail.com\",\"name\":\"test school\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},\"message\":\"Item updated successfully\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "MODEL_NOT_FOUND",
            "description": "<p>MODEL NOT FOUND.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in Api\\/v1\\/ProfileController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/schools",
    "title": "School List",
    "name": "Schools_List",
    "description": "<p>School List</p>",
    "group": "Schools",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\"data\":[{\"id\":\"944\",\"email\":\"shalabi.eng@gmail.com\",\"name\":\"test school\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/StudentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SchoolsController.php",
    "groupTitle": "Schools"
  },
  {
    "type": "get",
    "url": "/students/{id}/artworks",
    "title": "Student Artworks List",
    "name": "Student_Artworks_List",
    "description": "<p>Student Artworks -access by  teacher role-</p>",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMin",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMax",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "curriculum",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Optional (query parameter).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n{\"data\":[{\"id\":\"28\",\"title\":\"new\",\"comment_1\":\"ssssss\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"2017-07-29\",\"uploadedAt\":\"2017-07-29\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"Eid,Festival\",\"studentAge\":3,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"29\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/_file59b2a52b85b12.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/_file59b2a52b85b12.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/_file59b2a52b85b12.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/_file59b2a52b85b12.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/_file59b2a52b85b12.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/_file59b2a52b85b12.jpg\",\"createdAt\":\"2017-09-08\",\"uploadedAt\":\"2017-09-08\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"tag22,tag33\",\"studentAge\":\"\",\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"30\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/_file59b2a6eb23e27.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/_file59b2a6eb23e27.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/_file59b2a6eb23e27.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/_file59b2a6eb23e27.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/_file59b2a6eb23e27.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/_file59b2a6eb23e27.jpg\",\"createdAt\":\"2017-09-08\",\"uploadedAt\":\"2017-09-08\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag22,tag33\",\"studentAge\":17,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"31\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/images/uploads/arts/1000/_file59b94fe3a741f.jpg\",\"image_500\":\"http://localhost:8888/images/uploads/arts/500/_file59b94fe3a741f.jpg\",\"image_300\":\"http://localhost:8888/images/uploads/arts/300/_file59b94fe3a741f.jpg\",\"image_160\":\"http://localhost:8888/images/uploads/arts/160/_file59b94fe3a741f.jpg\",\"image_60\":\"http://localhost:8888/images/uploads/arts/60/_file59b94fe3a741f.jpg\",\"croppedImage\":\"http://localhost:8888/images/uploads/arts/cropped/_file59b94fe3a741f.jpg\",\"createdAt\":\"2017-09-13\",\"uploadedAt\":\"2017-09-13\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag22,tag33\",\"studentAge\":17,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"32\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/images/uploads/arts/1000/_file59b9502629301.jpg\",\"image_500\":\"http://localhost:8888/images/uploads/arts/500/_file59b9502629301.jpg\",\"image_300\":\"http://localhost:8888/images/uploads/arts/300/_file59b9502629301.jpg\",\"image_160\":\"http://localhost:8888/images/uploads/arts/160/_file59b9502629301.jpg\",\"image_60\":\"http://localhost:8888/images/uploads/arts/60/_file59b9502629301.jpg\",\"croppedImage\":\"http://localhost:8888/images/uploads/arts/cropped/_file59b9502629301.jpg\",\"createdAt\":\"2017-09-13\",\"uploadedAt\":\"2017-09-13\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag22,tag33\",\"studentAge\":17,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}}],\"paginator\":{\"total_count\":5,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/students/artworks",
    "title": "Students Artworks List",
    "name": "Students_Artworks_List_for_teacher",
    "description": "<p>Students Artworks -access by teacher role-</p>",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMin",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMax",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "curriculum",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "addDateMax",
            "description": "<p>Optional (query parameter - &quot;Y-m-d&quot; format).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "addDateMin",
            "description": "<p>Optional (query parameter - &quot;Y-m-d&quot; format).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "display",
            "description": "<p>Optional (query parameter - public|private|all).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "student",
            "description": "<p>Optional (query parameter - student ID).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n{\"data\":[{\"id\":\"28\",\"title\":\"new\",\"comment_1\":\"ssssss\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/jh454erg75fdg8rg.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/jh454erg75fdg8rg.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/jh454erg75fdg8rg.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/jh454erg75fdg8rg.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/jh454erg75fdg8rg.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/jh454erg75fdg8rg.jpg\",\"createdAt\":\"2017-07-29\",\"uploadedAt\":\"2017-07-29\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"Eid,Festival\",\"studentAge\":3,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"29\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/_file59b2a52b85b12.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/_file59b2a52b85b12.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/_file59b2a52b85b12.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/_file59b2a52b85b12.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/_file59b2a52b85b12.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/_file59b2a52b85b12.jpg\",\"createdAt\":\"2017-09-08\",\"uploadedAt\":\"2017-09-08\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"tag22,tag33\",\"studentAge\":\"\",\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"30\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/_file59b2a6eb23e27.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/_file59b2a6eb23e27.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/_file59b2a6eb23e27.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/_file59b2a6eb23e27.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/_file59b2a6eb23e27.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/_file59b2a6eb23e27.jpg\",\"createdAt\":\"2017-09-08\",\"uploadedAt\":\"2017-09-08\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag22,tag33\",\"studentAge\":17,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"31\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/images/uploads/arts/1000/_file59b94fe3a741f.jpg\",\"image_500\":\"http://localhost:8888/images/uploads/arts/500/_file59b94fe3a741f.jpg\",\"image_300\":\"http://localhost:8888/images/uploads/arts/300/_file59b94fe3a741f.jpg\",\"image_160\":\"http://localhost:8888/images/uploads/arts/160/_file59b94fe3a741f.jpg\",\"image_60\":\"http://localhost:8888/images/uploads/arts/60/_file59b94fe3a741f.jpg\",\"croppedImage\":\"http://localhost:8888/images/uploads/arts/cropped/_file59b94fe3a741f.jpg\",\"createdAt\":\"2017-09-13\",\"uploadedAt\":\"2017-09-13\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag22,tag33\",\"studentAge\":17,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}},{\"id\":\"32\",\"title\":\"new\",\"comment_1\":\"just comment\",\"comment_2\":\"\",\"image\":\"http://localhost:8888/images/uploads/arts/1000/_file59b9502629301.jpg\",\"image_500\":\"http://localhost:8888/images/uploads/arts/500/_file59b9502629301.jpg\",\"image_300\":\"http://localhost:8888/images/uploads/arts/300/_file59b9502629301.jpg\",\"image_160\":\"http://localhost:8888/images/uploads/arts/160/_file59b9502629301.jpg\",\"image_60\":\"http://localhost:8888/images/uploads/arts/60/_file59b9502629301.jpg\",\"croppedImage\":\"http://localhost:8888/images/uploads/arts/cropped/_file59b9502629301.jpg\",\"createdAt\":\"2017-09-13\",\"uploadedAt\":\"2017-09-13\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag22,tag33\",\"studentAge\":17,\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"946\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"photo\":\"http://localhost:8888/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"}}}],\"paginator\":{\"total_count\":5,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/ArtworksController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/teachers/{id}/students",
    "title": "Students List for specific teacher",
    "name": "Students_List_for_specific_teacher_access_by_school_",
    "description": "<p>Students List for specific teacher(access by  school role)</p>",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMin",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMax",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "curriculum",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Optional (query parameter).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\"data\":[{\"id\":\"940\",\"type\":\"student\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"artwork_default_display_status\":\"1\",\"address\":\"Damascus\",\"birthday\":\"2010-12-04\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"},\"school\":{\"id\":\"938\",\"email\":\"fatherboard1@gmail.com\",\"name\":\"Alfarouq\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}},\"artworks_count\":5,\"artworks\":[{\"id\":\"19\",\"title\":\"demo artwork updated\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/pexels-photo-64198-large-1481998199-42091.jpeg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/pexels-photo-64198-large-1481998199-42091.jpeg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"Sport, trip\",\"studentAge\":\"6\",\"subject\":{\"id\":\"59\",\"name\":\"Unit of Inquiry\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"20\",\"title\":\"Sandras Artwork2\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/IMG_20160421_182153-1481998946-80690.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/IMG_20160421_182153-1481998946-80690.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/IMG_20160421_182153-1481998946-80690.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/IMG_20160421_182153-1481998946-80690.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/IMG_20160421_182153-1481998946-80690.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/IMG_20160421_182153-1481998946-80690.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag12, sport, cartoon, tag2, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10\",\"studentAge\":\"6\",\"subject\":{\"id\":\"37\",\"name\":\"Art and Design\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"21\",\"title\":\"dd\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"t1,t2\",\"studentAge\":\"6\",\"subject\":{\"id\":\"39\",\"name\":\"Design\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"33\",\"title\":\"artTest\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-08-31\",\"status\":\"0\",\"displayStatus\":\"0\",\"tags\":\"tg gg ggg gdg ggh\",\"studentAge\":\"0\",\"subject\":{\"id\":\"50\",\"name\":\"IT\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}}]},{\"id\":\"941\",\"type\":\"student\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"artwork_default_display_status\":\"0\",\"address\":\"Damascus\",\"birthday\":\"2016-05-09\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"},\"school\":{\"id\":\"938\",\"email\":\"fatherboard1@gmail.com\",\"name\":\"Alfarouq\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}},\"artworks_count\":7,\"artworks\":[{\"id\":\"22\",\"title\":\"first artwork for albert\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"traffic\",\"studentAge\":\"0\",\"subject\":{\"id\":\"44\",\"name\":\"Geography\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"34\",\"title\":\"art\",\"comment_1\":\"v CBC.  b\",\"comment_2\":\"\",\"image\":\"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b13b546f.png\",\"image_500\":\"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b13b546f.png\",\"image_300\":\"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b13b546f.png\",\"image_160\":\"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b13b546f.png\",\"image_60\":\"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b13b546f.png\",\"croppedImage\":\"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b13b546f.png\",\"createdAt\":\"2017-09-21\",\"uploadedAt\":\"2017-09-21\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"tag\",\"studentAge\":\"1\",\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"35\",\"title\":\"????\",\"comment_1\":\"vfhhf\",\"comment_2\":\"\",\"image\":\"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b59b279d.png\",\"image_500\":\"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b59b279d.png\",\"image_300\":\"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b59b279d.png\",\"image_160\":\"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b59b279d.png\",\"image_60\":\"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b59b279d.png\",\"croppedImage\":\"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b59b279d.png\",\"createdAt\":\"2017-09-21\",\"uploadedAt\":\"2017-09-21\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"????\",\"studentAge\":\"1\",\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"36\",\"title\":\"updated\",\"comment_1\":\"comment comment\",\"comment_2\":\"\",\"image\":\"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c3a404daad4.png\",\"image_500\":\"http://104.217.253.15:3024/images/uploads/arts/500/_file59c3a404daad4.png\",\"image_300\":\"http://104.217.253.15:3024/images/uploads/arts/300/_file59c3a404daad4.png\",\"image_160\":\"http://104.217.253.15:3024/images/uploads/arts/160/_file59c3a404daad4.png\",\"image_60\":\"http://104.217.253.15:3024/images/uploads/arts/60/_file59c3a404daad4.png\",\"croppedImage\":\"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c3a404daad4.png\",\"createdAt\":\"2017-09-21\",\"uploadedAt\":\"2017-09-21\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"tg1,tg2,tg3\",\"studentAge\":\"1\",\"subject\":{\"id\":\"45\",\"name\":\"German\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}}]}],\"paginator\":{\"total_count\":2,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/StudentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNAUTHORIZED\",\"message\":\"you are not school for teacher has id=9329\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/StudentsController.php",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/students",
    "title": "Students List",
    "name": "Students_List_for_teacher_as_my_studets__access_by_teacher_",
    "description": "<p>Students List for teacher as my studets -access by  teacher role- ex:http://localhost:8888/api/v1/students/?ageMin=6&amp;ageMax=8&amp;school=938&amp;country=200&amp;curriculum=0&amp;keyword=Sandra&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjkzOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNTA1OTQwMTQ4LCJleHAiOjE2NjM2MjAxNDgsIm5iZiI6MTUwNTk0MDE0OCwianRpIjoiMkpub00yMHlnVFpiSjlBZCJ9.TkQmjRvnKu6QOxhO2o0qm0RGM6KJQbTA7yGOAWvXG9Q</p>",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMin",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ageMax",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "curriculum",
            "description": "<p>Optional (query parameter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Optional (query parameter).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\"data\":[{\"id\":\"940\",\"type\":\"student\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"artwork_default_display_status\":\"1\",\"address\":\"Damascus\",\"birthday\":\"2010-12-04\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"},\"school\":{\"id\":\"938\",\"email\":\"fatherboard1@gmail.com\",\"name\":\"Alfarouq\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}},\"artworks_count\":5,\"artworks\":[{\"id\":\"19\",\"title\":\"demo artwork updated\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/pexels-photo-64198-large-1481998199-42091.jpeg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/pexels-photo-64198-large-1481998199-42091.jpeg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/pexels-photo-64198-large-1481998199-42091.jpeg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"Sport, trip\",\"studentAge\":\"6\",\"subject\":{\"id\":\"59\",\"name\":\"Unit of Inquiry\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"20\",\"title\":\"Sandras Artwork2\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/IMG_20160421_182153-1481998946-80690.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/IMG_20160421_182153-1481998946-80690.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/IMG_20160421_182153-1481998946-80690.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/IMG_20160421_182153-1481998946-80690.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/IMG_20160421_182153-1481998946-80690.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/IMG_20160421_182153-1481998946-80690.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"1\",\"tags\":\"tag12, sport, cartoon, tag2, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10\",\"studentAge\":\"6\",\"subject\":{\"id\":\"37\",\"name\":\"Art and Design\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"21\",\"title\":\"dd\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"t1,t2\",\"studentAge\":\"6\",\"subject\":{\"id\":\"39\",\"name\":\"Design\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"33\",\"title\":\"artTest\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-08-31\",\"status\":\"0\",\"displayStatus\":\"0\",\"tags\":\"tg gg ggg gdg ggh\",\"studentAge\":\"0\",\"subject\":{\"id\":\"50\",\"name\":\"IT\"},\"student\":{\"id\":\"940\",\"email\":\"samer.shattah@gmail.com\",\"first_name\":\"Sandra\",\"last_name\":\"Bullock\",\"gender\":\"F\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}}]},{\"id\":\"941\",\"type\":\"student\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"artwork_default_display_status\":\"0\",\"address\":\"Damascus\",\"birthday\":\"2016-05-09\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"},\"school\":{\"id\":\"938\",\"email\":\"fatherboard1@gmail.com\",\"name\":\"Alfarouq\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}},\"artworks_count\":7,\"artworks\":[{\"id\":\"22\",\"title\":\"first artwork for albert\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_500\":\"http://www.art2artgallery.com/public/resources/art_images/500/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_300\":\"http://www.art2artgallery.com/public/resources/art_images/300/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_160\":\"http://www.art2artgallery.com/public/resources/art_images/160/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"image_60\":\"http://www.art2artgallery.com/public/resources/art_images/60/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png\",\"createdAt\":\"\",\"uploadedAt\":\"2016-12-17\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"traffic\",\"studentAge\":\"0\",\"subject\":{\"id\":\"44\",\"name\":\"Geography\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"34\",\"title\":\"art\",\"comment_1\":\"v CBC.  b\",\"comment_2\":\"\",\"image\":\"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b13b546f.png\",\"image_500\":\"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b13b546f.png\",\"image_300\":\"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b13b546f.png\",\"image_160\":\"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b13b546f.png\",\"image_60\":\"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b13b546f.png\",\"croppedImage\":\"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b13b546f.png\",\"createdAt\":\"2017-09-21\",\"uploadedAt\":\"2017-09-21\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"tag\",\"studentAge\":\"1\",\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"35\",\"title\":\"????\",\"comment_1\":\"vfhhf\",\"comment_2\":\"\",\"image\":\"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b59b279d.png\",\"image_500\":\"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b59b279d.png\",\"image_300\":\"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b59b279d.png\",\"image_160\":\"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b59b279d.png\",\"image_60\":\"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b59b279d.png\",\"croppedImage\":\"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b59b279d.png\",\"createdAt\":\"2017-09-21\",\"uploadedAt\":\"2017-09-21\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"????\",\"studentAge\":\"1\",\"subject\":{\"id\":\"36\",\"name\":\"Arabic Language\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}},{\"id\":\"36\",\"title\":\"updated\",\"comment_1\":\"comment comment\",\"comment_2\":\"\",\"image\":\"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c3a404daad4.png\",\"image_500\":\"http://104.217.253.15:3024/images/uploads/arts/500/_file59c3a404daad4.png\",\"image_300\":\"http://104.217.253.15:3024/images/uploads/arts/300/_file59c3a404daad4.png\",\"image_160\":\"http://104.217.253.15:3024/images/uploads/arts/160/_file59c3a404daad4.png\",\"image_60\":\"http://104.217.253.15:3024/images/uploads/arts/60/_file59c3a404daad4.png\",\"croppedImage\":\"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c3a404daad4.png\",\"createdAt\":\"2017-09-21\",\"uploadedAt\":\"2017-09-21\",\"status\":\"1\",\"displayStatus\":\"0\",\"tags\":\"tg1,tg2,tg3\",\"studentAge\":\"1\",\"subject\":{\"id\":\"45\",\"name\":\"German\"},\"student\":{\"id\":\"941\",\"email\":\"samer.shatta@gmail.com\",\"first_name\":\"Albert\",\"last_name\":\"Einstein\",\"gender\":\"M\",\"photo\":\"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}}}]}],\"paginator\":{\"total_count\":2,\"total_pages\":1,\"current_page\":1,\"limit\":10}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/StudentsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/StudentsController.php",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/subjects",
    "title": "Subjects List",
    "name": "Subjects_List",
    "group": "Subjects",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":[{\"id\":\"36\",\"name\":\"Arabic Language\"},{\"id\":\"37\",\"name\":\"Art and Design\"},{\"id\":\"38\",\"name\":\"Citizenship\"},{\"id\":\"39\",\"name\":\"Design\"},{\"id\":\"40\",\"name\":\"Drama\"},{\"id\":\"41\",\"name\":\"English\"},{\"id\":\"42\",\"name\":\"ESL\"},{\"id\":\"43\",\"name\":\"French\"},{\"id\":\"44\",\"name\":\"Geography\"},{\"id\":\"45\",\"name\":\"German\"},{\"id\":\"46\",\"name\":\"Health\"},{\"id\":\"47\",\"name\":\"History\"},{\"id\":\"48\",\"name\":\"Humanities\"},{\"id\":\"49\",\"name\":\"Islamic Studies\"},{\"id\":\"50\",\"name\":\"IT\"},{\"id\":\"51\",\"name\":\"Language Arts\"},{\"id\":\"52\",\"name\":\"Mathematics\"},{\"id\":\"53\",\"name\":\"Music\"},{\"id\":\"54\",\"name\":\"Physical Education\"},{\"id\":\"55\",\"name\":\"Science\"},{\"id\":\"56\",\"name\":\"Social Sciences\"},{\"id\":\"57\",\"name\":\"Spanish\"},{\"id\":\"58\",\"name\":\"Speech and Debate\"},{\"id\":\"59\",\"name\":\"Unit of Inquiry\"},{\"id\":\"60\",\"name\":\"Cultural Studies\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": "<p>Unknown Exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"UNKNOWN_EXCEPTION\",\"message\":\" in \\/Api\\/v1\\/SubjectsController.php in Line :127\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SubjectsController.php",
    "groupTitle": "Subjects"
  }
] });
