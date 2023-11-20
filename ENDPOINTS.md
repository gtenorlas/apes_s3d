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

## GET api/userlevels/{id}
description: retrieve a single userlevel

```json
body: N/A

returned:
{
    "id": 4,
    "name": "Senior",
    "description": "Trusted members",
    "created_at": "2023-11-20T23:11:22.289Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/userlevels/{id}
description: update a single userlevel

```json
body:
{
    "name": "Senior",
    "description": "Trusted and loyal members "
}

returned:
{
    "id": 4,
    "name": "Senior",
    "description": "Trusted and loyal members ",
    "created_at": "2023-11-20T23:11:22.289Z",
    "updated_at": "2023-11-20T23:40:25.540Z",
    "deleted_at": null
}
```

## POST api/userlevels
description: create a single userlevel

```json
body:
{
    "name": "Recruit",
    "description": "New member"
}

returned:
{
    "id": 7,
    "name": "Recruit",
    "description": "New member",
    "created_at": "2023-11-20T23:43:36.913Z",
    "updated_at": null,
    "deleted_at": null
}
```
