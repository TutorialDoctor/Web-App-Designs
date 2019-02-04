/*RBAC
Role Based Access Control.
Users can have one of several roles which  unlock certain permissions to access resources. 
Joe is an Administrator that has permission to access all user profiles.*/

      
subjects_list ={
  joe:1,
  sarah:2,
  brad:3,
  rachel:4
}

subjects = {
  1:{
	type: "subject",
	role: "admin",
	resources:["users","posts"],
	permissions: {users:"CRUD",posts:"CRUD"}},
  2:{
    type: "subject",
    role: "curator",
    resources:["posts"],
    permissions: {users:"RD",posts:"RD"}},
  3:{
    type: "subject",
    role: "saint",
    resources:["posts"],
    permissions: {posts:"CRUD"}},
  4:{
    type: "subject",
    role: "saint",
    resources:["posts"],
    permissions: {posts:"CRUD"}}
}

function get_access_of(subj){
  console.log(JSON.stringify(subjects[subjects_list[subj]]));
}

get_access_of('joe')
get_access_of('sarah')
get_access_of('rachel')
get_access_of('brad')