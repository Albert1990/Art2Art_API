define({ "api": [
  {
    "type": "get",
    "url": "/artworks",
    "title": "Artworks List",
    "name": "Artworks_List",
    "group": "Artworks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/ArtworksController.php",
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
          "content": "\n{\"data\":{\"id\":\"25\",\"title\":\"Map\",\"comment_1\":\"\",\"comment_2\":\"\",\"image\":\"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg\",\"croppedImage\":\"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg\",\"createdAt\":\"\",\"uploadedAt\":\"2017-04-07\",\"keywords\":\"\",\"studentAge\":\"\",\"subject\":\"\",\"student\":{\"id\":\"943\",\"email\":\"gabreal78@gmail.com\",\"first_name\":\"Student1\",\"last_name\":\"Last1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"79\",\"name\":\"Germany\",\"code\":\"0049\"},\"school\":{\"id\":\"937\",\"email\":\"shoshaho@gmail.com\",\"name\":\"School1\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"215\",\"name\":\"United Arab Emirates\",\"code\":\"00971\"}}}}}",
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/ArtworksController.php",
    "groupTitle": "Artworks"
  },
  {
    "type": "post",
    "url": "/auth/forgetPassword",
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
            "type": "String",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": "<p>validation failed</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "UNKNOWN_EXCEPTION",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"error\":{\"code\":\"INVALID_USER\",\"message\":\"We couldn't find your account with that information.\",\"details\":[]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/UsersController.php",
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
            "type": "String",
            "optional": false,
            "field": "VALIDATION_ERROR",
            "description": "<p>validation failed</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "UserLogin",
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
          "content": "{\"data\":{\"id\":\"946\",\"type\":\"student\",\"email\":\"student_mail@yopmail.com\",\"first_name\":\"mhd\",\"last_name\":\"student\",\"gender\":\"M\",\"address\":\"test\",\"birthday\":\"2017-10-05\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"19\",\"name\":\"Barbados \",\"code\":\"1-246\"},\"school\":{\"id\":\"944\",\"email\":\"shalabi.eng@gmail.com\",\"name\":\"test school\",\"photo\":\"http://www.art2artgallery.com/public/img/default/default.jpg\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"200\",\"name\":\"Syria \",\"code\":\"00963\"}},\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjk0NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNTAwNzM0MDI0LCJleHAiOjE1MDA3NTIwMjQsIm5iZiI6MTUwMDczNDAyNCwianRpIjoiY0xud2dkUVZTRUZ4SWZEWCJ9.99WtzPOmqT5HKgMOIHlLsVunjbEwbkixVLElieJiZSA\"}}",
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "name": "UserRegister",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>(optional if social_id &amp; social_platform are exists).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>(optional if social_id &amp; social_platform are exists).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>full name of the User.</p>"
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
            "description": "<p>gender of the User (MALE | FEMALE).</p>"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "socialId",
            "description": "<p>user social platform id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "socialPlatform",
            "description": "<p>(FACEBOOK, GOOGLE_PLUS,TWITTER).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":\"2\",\"email\":\"\",\"name\":\"samer shatta\",\"gender\":\"MALE\",\"phone\":\"76309032\",\"address\":\"\",\"birthday\":\"11\\/09\\/1990\",\"photo\":\"https:\\/\\/graph.facebook.com\\/bbbdgdg\\/picture?type=normal\",\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwOC9hcGkvdjEvYXV0aC9yZWdpc3RlciIsImlhdCI6MTQ5ODE4OTgyNSwiZXhwIjoxNDk4MTkzNDI1LCJuYmYiOjE0OTgxODk4MjUsImp0aSI6IjNhSm5PNHZOODFOQWtWWEsifQ.H3L-bgou3hT7q5a7vYSDm1l2G8Xh7wc8gcibVusb1cM\",\"isActive\":true,\"isVerified\":\"\",\"country\":{\"id\":\"4\",\"name\":\"Afghanistan\"}}}",
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
            "field": "ValidationError",
            "description": "<p>Validation error.</p>"
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
          "content": "{\"error\":{\"code\":\"USER_EXIST_BEFORE\",\"message\":\"\",\"details\":[]}}",
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Auth"
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/CountriesController.php",
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/CurriculumsController.php",
    "groupTitle": "Curriculums"
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/SubjectsController.php",
    "groupTitle": "Subjects"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update User Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User Auth Token</p>"
          }
        ]
      }
    },
    "name": "UpdateUserProfile",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the User.</p>"
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
            "description": "<p>gender of the User (MALE | FEMALE).</p>"
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
          "content": "{\"data\":{\"id\":\"1\",\"email\":\"samer.shatta@gmail.com\",\"name\":\"Ziad shatta\",\"gender\":\"FEMALE\",\"phone\":\"76309032\",\"address\":\"\",\"birthday\":\"11\\/09\\/1990\",\"photo\":\"http:\\/\\/localhost:3008\\/images\\/uploads\\/users\\/default-user.jpg\",\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwOC9hcGkvdjEvdXNlcnMiLCJpYXQiOjE0OTgyNTE1NzYsImV4cCI6MTQ5ODI1NTE3NiwibmJmIjoxNDk4MjUxNTc2LCJqdGkiOiJMSHBCQmJQYld3YXpuT2xXIn0.jpk6zH5wf9Rdy-XzP_FbqINmuS0jTZVV6JvjfXPXY7U\",\"isActive\":true,\"isVerified\":true,\"country\":{\"id\":\"4\",\"name\":\"Afghanistan\"}},\"message\":\"Item updated successfully\"}",
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
            "field": "ValidationError",
            "description": "<p>Validation error.</p>"
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
          "content": "{\"error\":{\"code\":\"USER_EXIST_BEFORE\",\"message\":\"\",\"details\":[]}}",
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
    "filename": "/mnt/089C67D19C67B7B8/xampp/htdocs/Art2Art_API/app/Http/Controllers/Api/v1/UsersController.php",
    "groupTitle": "Users"
  }
] });
