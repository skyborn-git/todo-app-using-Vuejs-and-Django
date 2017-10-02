export default [
  {
    name: '__handle',
    title: '#',
    titleClass: 'center aligned',
    dataClass: 'right aligned'
  },
  {
    name: 'name',
    sortField: 'name',
    title: '<span class="ui teal"><i class="large list icon"></i>Todo</span>',
    titleClass: 'center aligned',
    dataClass: 'left aligned'
  },
  {
    name: 'description',
    sortField: 'description',
    title: '<span class="ui teal"><i class="large info circle icon"></i>Description</span>',
    titleClass: 'center aligned',
    dataClass: 'left aligned'
  },
  {
    name: 'created',
    sortField: 'created',
    title: '<span class="ui teal"><i class="large checked calendar icon"></i>Created at</span>',
    titleClass: 'center aligned',
    dataClass: 'center aligned',
    callback: 'formatDate|DD-MM-YYYY HH:mm a'
  },
  {
    name: '__component:custom-action',
    title: 'Actions',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  }
]
