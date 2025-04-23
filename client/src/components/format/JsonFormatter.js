import React, { useState } from 'react';

const styles = {
  inputTextArea: {
    border: '1px solid black',
  },
  inputTextAreaError: {
    border: '2px solid red',
  }
}

const JsonFormatter = () => {

  const [postContent, setPostContent] = useState('');
  const [inputTextAreaStyle, setInputTextAreaStyle] = useState(styles.inputTextArea);
  const [formattedContent, setFormattedContent] = useState('');

  const inputTextArea = <textarea
    name="text"
    cols="60"
    rows="25"
    placeholder="Input JSON"
    onChange={e => {
      setPostContent(e.target.value);
      document.getElementsByClassName('bg-primary-app')[0].style.display = 'none';
    } }
    style={{ ...inputTextAreaStyle, }}
    required
  ></textarea>

  const outputTextArea = <textarea
    name="text"
    cols="60"
    rows="25"
    placeholder="Formatted JSON"
    value={formattedContent}
    readOnly
    required
  ></textarea>

  const inputMobileTextArea = <textarea
    name="text"
    cols="44"
    rows="18"
    placeholder="Input JSON"
    onChange={e => {
      setPostContent(e.target.value);
      document.getElementsByClassName('bg-primary-app')[0].style.display = 'none';
    }}
    style={{ ...inputTextAreaStyle, }}
    required
  ></textarea>

  const outputMobileTextArea = <textarea
    name="text"
    cols="44"
    rows="18"
    placeholder="Formatted JSON"
    value={formattedContent}
    readOnly
    required
  ></textarea>

  const formatInput = (e) => {
    try {
      const jsonObject = JSON.parse(postContent);
      setFormattedContent(JSON.stringify(jsonObject, null, 2));
      setInputTextAreaStyle(styles.inputTextArea);
    } catch(error) {
      if(document.getElementsByClassName('formatter-desktop-container')[0].style.display !== 'none') {
        document.getElementsByClassName('bg-primary-app')[0].style.display = 'block';
      }
      if(document.getElementsByClassName('formatter-mobile-container')[0].style.display !== 'none') {
        document.getElementsByClassName('bg-primary-app')[1].style.display = 'block';
      }
      setInputTextAreaStyle(styles.inputTextAreaError);
    }
  }


  return (
    <>
      <div className="formatter-desktop-container" style={{ marginTop: '5%' }}>
        <div className="bg-primary-app p" style={{ marginBottom: '1%', display: 'none', backgroundColor: 'red'}}>
          <h4>Invalid JSON. Please enter a valid JSON to format.</h4>
        </div>
        <div className="form-group">
          <span>{inputTextArea}</span>
          <span style={{ marginLeft: '3%'}}></span>
          <span>{outputTextArea}</span>
        </div>
        <button style={{ width: '30%', alignSelf: 'center' }} onClick={e => formatInput()}>Format</button>
      </div>

      <div className="formatter-mobile-container">
        <div className="bg-primary-app p" style={{ marginBottom: '1%', display: 'none', backgroundColor: 'red' , width: '70%' }}>
          <h5>Invalid JSON. Please enter a valid JSON to format.</h5>
        </div>
        <div className="form-group">
          <span>{inputMobileTextArea}</span>
          <span style={{ marginLeft: '3%'}}></span>
          <span>{outputMobileTextArea}</span>
        </div>
        <button style={{ width: '30%', alignSelf: 'center' }} onClick={e => formatInput()}>Format</button>
      </div>     
    </>
  )
}

export default JsonFormatter