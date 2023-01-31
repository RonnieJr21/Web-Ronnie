import React, {useState} from "react";
import Card from "../DesignComponents/Card/Card";
import ForumForm from "./ForumForm/ForumForm";
import ForumPosts from "./ForumPosts/ForumPosts";

import './Forum.css'

const dummyPosts = [
    {
        message: 'I really hate texas',
        topic: 'Texas',
        tags: '#FuckTexas'
    }
]

const Forum = () =>{
    const [userPosts, addPosts] = useState(dummyPosts)



    const forumData = (data) =>{
        addPosts((prevData) =>{
            return[...prevData, data]
        })
    }
    console.log(userPosts.length)
    let content = <div className={'forum-posts'}>
                    <ForumPosts newData={userPosts}/>
                </div>
    if(userPosts.length === 0){
        content = <h2 className={'no-posts'}>No posts</h2>
    }
    return(
        <div className={'forum-background'}>
            <Card className={'forum-form'}>
                <ForumForm onForumData={forumData}/>
            </Card>
            {content}


        </div>
    )
}
export default Forum