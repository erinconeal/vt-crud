Build a Javascript single page application that provides CRUD capabilities for a list of JSON groups:

http://middleware.vt.edu/interview/groups

The application should fetch the data from the URL above, but all mutating operations should not be persisted anywhere other than the DOM and/or browser storage.
The read capabilities should consist of two views:

 - List view showing the ID, name, and creation date for all groups that allows sorting by any column.
 - Detail view that displays the details for a single group.

[
  {
    "id":"alpha",
    "name":"Alpha Group",
    "created":1500100000,
    "members":[
      {
        "id":"alice",
        "kind":"person",
        "added":1508102082
      },
      {
        "id":"bob",
        "kind":"person",
        "added":1509012293
      },
      {
        "id":"carol",
        "kind":"person",
        "added":1509102345
      }
    ]
  },
  {
    "id":"beta","name":"Beta Group",
    "created":1500200000,
    "members":[
      {
        "id":"ann",
        "kind":"person",
        "added":1500212293
      },
      {
        "id":"bill",
        "kind":"person",
        "added":113789471838851649
      },
      {
        "id":"charles",
        "kind":"person",
        "added":1501012293
      }
    ]
  },
  {
    "id":"gamma",
    "name":"Gamma Group",
    "created":1500300000,
    "members":[
      {
        "id":"zeb",
        "kind":"person",
        "added":1500312293
      },
      {
        "id":"alpha",
        "kind":"group",
        "added":1500412293
      }
    ]
  }
]
