## GET api/userlevels
description: retrieve all user levels

```json
body: N/A

returned:
[
    {
        "id": 1,
        "name": "Owner",
        "description": "Highest Admin",
        "created_at": "2023-11-20T23:11:22.289Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "name": "Admin",
        "description": "Admin",
        "created_at": "2023-11-20T23:11:22.289Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "name": "Captain",
        "description": "Captain of squads",
        "created_at": "2023-11-20T23:11:22.289Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 4,
        "name": "Senior",
        "description": "Trusted members",
        "created_at": "2023-11-20T23:11:22.289Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 5,
        "name": "Member",
        "description": "Regular member",
        "created_at": "2023-11-20T23:11:22.289Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 6,
        "name": "Guest",
        "description": "Guest or alliances",
        "created_at": "2023-11-20T23:11:22.289Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/extract
description: retrieve title, description, thumbnail of a url

```json
body:
{
   "url": "https://www.youtube.com/watch?v=t_ispmWmdjY"
}

returned:
{
    "title": "Ruby Programming Language - Full Course - YouTube",
    "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics ...",
    "thumbnail": "https://storage.screenshotapi.net/www_youtube_com_watch_v_t_ispmwmdjy_983a438ee7b2.png",
    "url": "https://www.youtube.com/watch?v=t_ispmWmdjY"
}
```
