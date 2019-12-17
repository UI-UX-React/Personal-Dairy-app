	import React, { Component } from 'react';
	import ReactQuill from 'react-quill';
	import 'react-quill/dist/quill.snow.css';
	import 'react-quill/dist/quill.bubble.css';
	import moment from 'moment';


	class Editor extends Component {
		 Save(e) {
	     e.preventDefault()
		    localStorage.removeItem('usertoken')
		   this.props.history.push(`/Calender`)
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
				comments: ' <b><u>London</u></b> <br>Since our hotel is in a great central spot, we were able to walk to a lot of places. First, we wanted to see about getting tickets to a show for the evening, since London theatre is top notch. Then we wanted to make our way to Buckingham Palace. What an experience! <b><i>We wanted to try out London’s public transportation</i></b>, and after having a hard time figuring out which way to go and which stop to take, we finally asked some locals, who were very friendly and helpful. The tube wasn’t very crowded, which was nice, and it wasn’t a very far ride, which was double nice! Once we got off the tube, it was a bit of a walk to the actual palace, but since it was such a nice day (only a little London drizzle), we didn’t mind. Plus, the Palace grounds are absolutely gorgeous!! I think I found my new dream home. :) The gardens themselves are exquisite. We got to see the changing of the guards, which is one of the things I’ve always wanted to do, took lots and lots of pictures, and sent our regards to the queen!&nbsp;<img  src="quill.jpg"  href="/public"/><b></b> '
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

				

	<div className="quill1" style={{textAlign:"initial", marginLeft: -205, height:1000, width:1530,backgroundColor: "#ffffff"}}>

	{/* <button id="save" onClick={this.Save.bind(this)}  aria-label= "Login to view the dashboard" style={{ width: "100px", alignItems: "center", color: "" }} className="btn btn-">
				Save </button> */}
				<br></br>
				<br></br>
				&nbsp; &nbsp; 
			<label>    Title: <b>My Trip To London</b>
			&nbsp; 
				{/* <input type="" style={{width:1350} } value={this.state.title} onChange={this.onChangeTitle} /> */}
				&nbsp;
				&nbsp;
				&nbsp; 	
				
				</label>
				<br></br>
				<br></br>
			
				<p>	&nbsp; &nbsp;Date and Time: &nbsp; <b>{new moment().format('LLLL')}</b> 
		</p> 
				
	{/* 
	<a href="/Editor"  class="save btn btn-primary"  onClick={this.handleClick}> <center> Save</center> </a> */}

		<ReactQuill theme="snow"  modules={this.modules}
		
				formats={this.formats} onChange={this.rteChange}
				
				value={this.state.comments ||''}readOnly/>
				
				<p><font color="orange">Since our hotel is in a great central spot, </font> <font color="black">we were able to walk to a lot of places. First, we wanted to see about getting tickets to a show for the evening, since London theatre is top notch. Then we wanted to make our way to Buckingham Palace. What an experience! We wanted to try out London’s public transportation, and after having a hard time figuring out which way to go and which stop to take, we finally asked some locals, who were very friendly and helpful. The tube wasn’t very crowded, which was nice, and it wasn’t a very far ride, which was double nice! Once we got off the tube, it was a bit of a walk to the actual palace, but since it was such a nice day (only a little London drizzle), we didn’t mind. Plus, the Palace grounds are absolutely gorgeous!! I think I found my new dream home. :) The gardens themselves are exquisite. We got to see the changing of the guards, which is one of the things I’ve always wanted to do, took lots and lots of pictures, and sent our regards to the queen!</font></p> 
			
			{/* <a href="/Register" style={{color:"black"}} onClick={this.handleClick}>Click to view</a> */}
			
				</div>
			);
		}

	}

	export default Editor;
