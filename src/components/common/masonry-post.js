import React from 'react'
import {categoryColors} from './style'

export default function MasonryPost ({post, tagsOnTop}) {
    const windowWidth = window.innerWidth
    const imageBackground = {backgroundImage: `url("https://picsum.photos/200/300")`};

    const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground
    
    return (
        <a className="masonry-post overlay" style={style} href={post.link}> 
            <div className="image-text" style={{justifyContent:tagsOnTop ? 'space-between' : 'flex-end'}} >
                <div className="tags-container">   
                    {post.categories.map((tag, ind) =>
                        <span key={ind} className="tag" style={{backgroundColor: categoryColors[tag] }}>
                            {tag.toUpperCase()}
                        </span>
                    )}
                </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}