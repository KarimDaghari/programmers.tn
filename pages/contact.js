import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import vector1 from '../public/vectors/vector1.jpg'
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {FacebookShareButton, FacebookIcon} from 'next-share'
import {LinkedinShareButton, LinkedinIcon} from 'next-share'
import registerUser from './api/register'
import * as typeformEmbed from '@typeform/embed'


/*
function Form() {
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }
*/ 

/*export default function form(){
  return (
         <div className={styles.container}>

              <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>
   <h3 className={styles.bar1}><a href="/">Home</a>&nbsp; &nbsp; &nbsp;<a href="/about">About</a>&nbsp; &nbsp; &nbsp;<a href="/services">Services</a>&nbsp; &nbsp; &nbsp;<a href="/contact">Contact</a></h3>
      <main className={styles.main}>*/
      /*
          <form onSubmit={registerUser}>
          <table className={styles.table1}>
          <tr>   <td>
      <label className={styles.name1} htmlFor="name">Name</label> 
      </td>  <td>
      <input id="name" name="name" type="text" autoComplete="name" required />
      </td></tr>
      <tr>    <td>
      <label className={styles.name1} htmlFor="name">LastName</label>
      </td>   <td>
      <input id="name" name="name" type="text" autoComplete="name" required />
      </td></tr> <tr> <td>
      <label className={styles.name1} htmlFor="name">Email</label>
      </td>   <td>
      <input id="name" name="name" type="text" autoComplete="name" required /></td></tr>
      <tr> <td>
      <label className={styles.name1} htmlFor="name">Message</label> </td>
      <td>
      <textarea id="name" name="name" rows="4"cols="50" autoComplete="name" required /></td></tr>
      <br />

      <button type="submit" text-align="center">Send</button>
  </table>
    </form>
*/
      /*<div class="typeform-widget" data-url="https://form.typeform.com/to/GTaM3lf8?typeform-medium=embed-snippet" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>

      </main>

      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors.&nbsp;</p>
              <FacebookShareButton className={styles.social1}
  url={'https://facebook.com/programmers.tn'}
  quote={'our Facebook.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={40} round />
</FacebookShareButton> &nbsp;
<LinkedinShareButton url={'https://linkedin.com/in/programmers.tn/'}>
  <LinkedinIcon size={41.5} round />
</LinkedinShareButton>
      </footer>
    </div>

  )
}*/ 

/*
class Series extends Component{
    componentDidMount(){
      const popup1 = typeformEmbed.makePopup(
      'https://form.typeform.com/to/GTaM3lf8?typeform-medium=embed-snippet',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function(){
          console.log('Typeform successfully submitted')
        }
      }
)
      document.getElementById('bt-popup').addEventListener('click',function(){
        popup1.open()
      }); */
/*
<a class="typeform-share button" href="https://form.typeform.com/to/GTaM3lf8?typeform-medium=embed-snippet" data-mode="popover" style="width:54px;height:54px;position:fixed;box-shadow:0px 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08);right:26px;bottom:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#0445AF;overflow:hidden;line-height:0;" target="_blank"> <span class="icon"> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style="margin-top:6px;"> <path d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z' fill='white' /> </svg> </span> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
*/
   /* }
    render() {
      return (
         <div> 

          <button id="bt-popup" class="my-button">Popup</button>
</div>

         )
    }
}

export default Series;*/


function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home 