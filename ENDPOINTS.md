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

## GET api/users
description: retrieve all users

```json
body: N/A

returned:
[
    {
        "id": 1,
        "user_level_id": 1,
        "email": "jack@nowhere.com",
        "password": "abc",
        "preferred_alias": "Jack",
        "first_name": "Jack",
        "last_name": "Mindster",
        "gender": "male",
        "line_id": null,
        "fb_name": null,
        "created_at": "2023-11-21T00:02:03.810Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "user_level_id": 5,
        "email": "george@abc.com",
        "password": "abc",
        "preferred_alias": "MonkeyGeorge",
        "first_name": "George",
        "last_name": "Maul",
        "gender": "male",
        "line_id": null,
        "fb_name": null,
        "created_at": "2023-11-21T00:02:03.810Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "user_level_id": 6,
        "email": "guest@abc.com",
        "password": "abc",
        "preferred_alias": "na",
        "first_name": "Guest",
        "last_name": "Star",
        "gender": "female",
        "line_id": null,
        "fb_name": null,
        "created_at": "2023-11-21T00:02:03.810Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 4,
        "user_level_id": 5,
        "email": "bye@abc.com",
        "password": "abc",
        "preferred_alias": "ByeStander",
        "first_name": "Bye",
        "last_name": "Bye",
        "gender": "female",
        "line_id": null,
        "fb_name": null,
        "created_at": "2023-11-21T00:02:03.810Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## GET api/users/{id}
description: retrieve a single user

```json
body: N/A

returned:
{
    "id": 2,
    "user_level_id": 5,
    "email": "george@abc.com",
    "password": "abc",
    "preferred_alias": "MonkeyGeorge",
    "first_name": "George",
    "last_name": "Maul",
    "gender": "male",
    "line_id": null,
    "fb_name": null,
    "created_at": "2023-11-21T00:02:03.810Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/users/{id}
description: update a single user

```json
body:
{
    "user_level_id": 4,
    "email": "george@abc.com",
    "password": "abc",
    "preferred_alias": "MonkeyGeorge",
    "first_name": "George",
    "last_name": "Maul",
    "gender": "male",
    "line_id": null,
    "fb_name": null
}

returned:
{
    "id": 2,
    "user_level_id": 5,
    "email": "george@abc.com",
    "password": "$2b$10$5ITbTbijOMvh0tpWwtMSKupRDFr/Li672NGVEFxI1Bh35d3eFE8Jy",
    "preferred_alias": "MonkeyGeorge",
    "first_name": "George",
    "last_name": "Maul",
    "gender": "male",
    "line_id": null,
    "fb_name": null,
    "created_at": "2023-11-21T00:02:03.810Z",
    "updated_at": "2023-11-22T02:49:07.616Z",
    "deleted_at": null
}
```

## POST api/users
description: create a single user

```json
body:
{
    "user_level_id": 5,
    "email": "george2@abc.com",
    "password": "abc",
    "preferred_alias": "MonkeyGeorge2",
    "first_name": "George2",
    "last_name": "Maul",
    "gender": "male",
    "line_id": null,
    "fb_name": null
}

returned:
{
    "id": 8,
    "user_level_id": 5,
    "email": "george2@abc.com",
    "password": "$2b$10$D61Nhj6R8E.PBckOBId2y.4LI.EUFlqPvYPIwlEjYAP1hHF2uGdwG",
    "preferred_alias": "MonkeyGeorge2",
    "first_name": "George2",
    "last_name": "Maul",
    "gender": "male",
    "line_id": null,
    "fb_name": null,
    "created_at": "2023-11-22T02:57:43.938Z",
    "updated_at": null,
    "deleted_at": null
}
```
```

## POST api/users/login
description: login a user

```json
body:
{
    "email": "george2@abc.com",
    "password": "abc"
}

returned:
{
    "id": 8,
    "user_level_id": 5,
    "email": "george2@abc.com",
    "password": "$2b$10$D61Nhj6R8E.PBckOBId2y.4LI.EUFlqPvYPIwlEjYAP1hHF2uGdwG",
    "preferred_alias": "MonkeyGeorge2",
    "first_name": "George2",
    "last_name": "Maul",
    "gender": "male",
    "line_id": null,
    "fb_name": null,
    "created_at": "2023-11-22T02:57:43.938Z",
    "updated_at": null,
    "deleted_at": null
}
```
## GET api/groups
description: retrieve all groups

```json
body: N/A

returned:
[
    {
        "id": 1,
        "name": "APinoyEagleSquad I",
        "description": "Main Squad",
        "created_at": "2023-11-21T00:02:03.818Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "name": "APinoyEagleSquad II",
        "description": "Rest and recruiting squad",
        "created_at": "2023-11-21T00:02:03.818Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "name": "APinoyEagleSquad III",
        "description": "Rest and recruiting squad",
        "created_at": "2023-11-21T00:02:03.818Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 4,
        "name": "APinoyEagleSquad IV",
        "description": "Rest and recruiting squad",
        "created_at": "2023-11-21T00:02:03.818Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## GET api/groups/{id}
description: retrieve a single group

```json
body: N/A

returned:
{
    "id": 1,
    "name": "APinoyEagleSquad I",
    "description": "Main Squad",
    "created_at": "2023-11-21T00:02:03.818Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/group/{id}
description: update a single group

```json
body:
{
    "id": 1,
    "name": "APinoyEagleSquad I",
    "description": "Main Squad. For members only."
}

returned:
{
    "id": 1,
    "name": "APinoyEagleSquad I",
    "description": "Main Squad. For members only.",
    "created_at": "2023-11-21T00:02:03.818Z",
    "updated_at": "2023-12-04T01:14:08.793Z",
    "deleted_at": null
}
```

## POST api/groups
description: create a single group

```json
body:
{
    "name": "APinoyEagleSquad V",
    "description": "Resting Squad and Account Improvement. Collect prizes"
}

returned:
{
    "id": 5,
    "name": "APinoyEagleSquad V",
    "description": "Resting Squad and Account Improvement. Collect prizes",
    "created_at": "2023-12-04T01:16:06.156Z",
    "updated_at": null,
    "deleted_at": null
}
```
## DELETE api/groups/{id}
description: delete a single group

```json
body:
n/a

returned:
{
    "id": 5,
    "name": "APinoyEagleSquad V",
    "description": "Resting Squad and Account Improvement. Collect prizes",
    "created_at": "2023-12-04T01:16:06.156Z",
    "updated_at": null,
    "deleted_at": "2023-12-04T01:17:23.246Z"
}
```
