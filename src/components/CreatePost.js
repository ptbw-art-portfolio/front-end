import React from 'react';
// import styled from 'styled-components';
import './CreatePost.css';

function CreatePost() {
    return (
        <div className="CreatePost">
            <form className="NewPost">
            <input type="text" className="TextField" name="title" placeholder="Title" />
            <input type="text" className="TextField" name="date" placeholder="Date" />
            <input type="text" className="TextField" name="medium" placeholder="Medium" />
            <input type="text" className="TextField" name="link" placeholder="Image Link" />
            <input type="text" className="TextField" name="details" placeholder="Description" />
            <div className="buttonContainer">
                <button type="button">Add</button>
                <button type="button">Cancel</button>
            </div>
            </form>

        </div>
    );
}

export default CreatePost;