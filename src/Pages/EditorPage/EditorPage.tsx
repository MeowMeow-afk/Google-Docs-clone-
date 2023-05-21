// @ts-nocheck
import { NavOptions, TextEditor } from '@Components';
import React, { ReactElement, useState } from 'react';
import googleIcon from '@Assets/googleDocs.svg';
import commentsIcon from '@Assets/comments.svg';
import lockIcon from '@Assets/lock.svg';
import avatarIcon from '@Assets/avatar.svg';

const EditorPage = (): ReactElement => {
  const [fileName, setFileName] = useState<string>('Untitled document');
  const stretchInput = (e: HTMLInputElement) => {
    setFileName(e.target.value);
    const numDigits = e.target.value.length;
    e.target.style.width = `${numDigits}ch`;
  };
  return (
    <div className="editor">
      <div className="header">
        <div className="header__options">
          <div className="docLogo">
            <img src={googleIcon} alt="" />
          </div>
          <div className="nav">
            <div className="fileName">
              <input
                type="text"
                value={fileName}
                onInput={(e) => stretchInput(e)}
              />
            </div>
            <NavOptions />
          </div>
        </div>
        <div className="header__profile">
          <div className="commentHistoryIcon">
            <img src={commentsIcon} alt="" title="comments history" />
          </div>
          <div className="shareBox" title="private to only me">
            <img src={lockIcon} alt="" />
            <p>Share</p>
          </div>
          <div className="profileAvatar">
            <img src={avatarIcon} alt="" />
          </div>
        </div>
      </div>
      <TextEditor />
    </div>
  );
};

export default EditorPage;
