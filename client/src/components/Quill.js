	import React, { Component } from 'react';
	import ReactQuill from 'react-quill';
	import 'react-quill/dist/quill.snow.css';
	import 'react-quill/dist/quill.bubble.css';
	import moment from 'moment';


	class RichTextEditor extends Component {
		Save(e) {
			e.preventDefault()
			localStorage.removeItem('usertoken')
			this.props.history.push(`/Calender`)
			alert("Data is successfully saved !!")
		}
		constructor(props) {
			super(props);

			this.modules = {
				toolbar: [
				[{ 'font': [] }],
				[{ 'size': ['small', false, 'large', 'huge'] }],
				['bold', 'italic', 'underline'],
				[{'list': 'ordered'}, {'list': 'bullet'}],
				[{ 'align': [] }],
			[{ 'color': [] }, { 'background': [] }],
			['link','image']
				
				
				],
				
			};

			this.formats = [
				'font',
				'size',
				'bold', 'italic', 'underline',
				'list', 'bullet',
				'align',
			'color', 'background',
			'link', 'image'
			];

			this.state = {
				comments: ' '
			}

			this.rteChange = this.rteChange.bind(this);
		}

		rteChange = (content, delta, source, editor) => {
			console.log(editor.getHTML()); // rich text
			console.log(editor.getText()); // plain text
			console.log(editor.getLength()); // number of characters
		}

		render() {
			return (

				

	<div className="quill" style={{  textAlign:"initial", marginLeft: -210, height:1000, width:1530,backgroundColor: "#ffffff"}}>

	{/* <button id="save" onClick={this.Save.bind(this)}  aria-label= "Login to view the dashboard" style={{ width: "100px", alignItems: "center", color: "" }} className="btn btn-">
				Save </button> */}
				<br></br>
				<br></br>
				&nbsp; &nbsp; 
			<label> Title:
			&nbsp; 
				<input type=""  style={{width:1350} } value={this.state.title} onChange={this.onChangeTitle} />
				&nbsp;
				&nbsp;
				&nbsp; 	
				<button onClick={this.Save.bind(this)} >Save</button>
				
				</label>
				<br></br>
				<br></br>
			
				<p>&nbsp; &nbsp;Date and Time: &nbsp; <b>{new moment().format('LLLL')}</b> 
		</p> 
				
	{/* 
	<a href="/Editor"  class="save btn btn-primary"  onClick={this.handleClick}> <center> Save</center> </a> */}

		<ReactQuill theme="snow"  modules={this.modules}
		
				formats={this.formats} onChange={this.rteChange}
				
				value={this.state.comments || ''}/>
				

			
			
			
				</div>
			);
		}

	}

	export default RichTextEditor;
