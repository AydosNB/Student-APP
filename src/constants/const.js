import { BsFillPersonPlusFill } from "react-icons/bs"; 
import { BiLayerPlus } from "react-icons/bi"; 
import { HiUserGroup } from "react-icons/hi"; 
import { FaLayerGroup } from "react-icons/fa"; 

export const btnData = [
    {id : 1, title : "Groups", icon : FaLayerGroup , path : "/"},
    {id : 2, title : "Students", icon : HiUserGroup, path : "/students"},
    {id : 3, title : "Create group", icon :BiLayerPlus , path : "/create-group"},
    {id : 4, title : "Create student", icon : BsFillPersonPlusFill, path : "/create-student"},
]