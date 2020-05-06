
# MGC TECH TIPS <img src="https://mgctechtips.netlify.app/images/LOGO%20WITH%20BACKGROUND/LOGO-BG.png" alt="MGC TECH TIPS LOGO" height="35">
#### ALL RIGHTS RESERVE 2020

This website is build and maintained solely by Mikko Caguiat.
Some of the parts of this website are compiled from various tutorials and pre made templates
that i edited to fit the design of my website.

Files, websites and software used.
1. [Github](https://github.com/) - documenting everything that I accomplish in my website.
2. [Netlify](https://netlify.com/) - this serves as my web hosting platform as I develop my website. Sooner when it is done. I will publish it in a separate domain name and upgrade to a bigger web hosting platform. For now, netlify suites the best for developing beginner websites like this.
3. [Google Analytics](https://analytics.google.com/analytics/web/) for monitoring people who visits my site.
4. [Bootsrap 4](https://getbootstrap.com/) as my main CSS source.
5. [Lokesh Dhakar's Light Box](https://lokeshdhakar.com/projects/lightbox2/) script for loading smoothly my images. 
6. [Unplash](https://unsplash.com/) - special mention to unplash and the contributors for my copies of great electronics photos. Soon I'll be incorporating my own photos but for now i'll be using photos from them. Copyright to the owners. I am planning to put a carousel to the bottom to all the sources i copied. 
7. [Htmlcommentbox](www.htmlcommentbox.com) - this plugin is still work in progress. Comment section will be incorporated to each topic that i will be posting. 

---

## Adding New Blog Notes
1. Always put your SEO Meta tags.
    <br/>
```html
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- SEO Tags-->
	<meta name="description"
		content="MGC Tech Tips - is a free online Electronics Tutorial Resource for beginners, hobbyist and students who want to pursue a field in Electronics. This site is a collection of all the note-lectures, circuits and electronic projects that i compiled here in MGC Tech Tips site.">
	<meta name="keywords" content="DIY, Electronics, Engineering, Tutorial">
	<meta name="subject" content="Electronics Lecture for all Ages">
	<meta name="copyright" content="This site is own and maintained personally by MGC Tech Tips Groups">
	<meta name="language" content="en">
	<meta name="robots" content="index,follow" />
	<meta name="revised" content="Sat May 2 03:28:11 CST 2020" />
	<meta name="author" content="Mikko Caguiat">
	<meta name="url" content="https://mgctechtips.netlify.app">
	<meta name="identifier-URL" content="http://mgctechtips.netlify.app">
	<meta name="category" content="Electronics Lecture, Tutorials, Circuits, and DIY Projects">
	<meta name="theme-color" content="#343a40">
	<meta name="robots" content="follow">
	<meta name="googlebot" content="index">
	<!--CHANGE TAB COLOR FOR YOUR WEBSITE-->
	<!-- OG META-TAGS -->
	<meta property="og:title" content="Electronics Lectures | MGC Tech Tips">
	<meta property="og:description"
		content="MGC Tech Tips - is a free online Electronics Tutorial Resource for beginners, hobbyist and students who want to pursue a field in Electronics. This site is a collection of all the note-lectures, circuits and electronic projects that i compiled here in MGC Tech Tips site.">
	<meta property="og:image" content="https://mgctechtips.netlify.app/images/arduino-2.jpg">
	<meta property="og:url" content="http://mgctechtips.netlify.app">
	<meta name="twitter:card" content="MGC Tech Tips">
	<meta property="og:site_name" content="MGC Tech Tips">
	<meta name="twitter:image:alt" content="MGC Tech Tips">
	<!-- END OF OG TAGS -->
	<!-- ICON LINK -->
	<link rel="icon" href="MGCTECHTIPS.ico">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
		integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="./css/styles.css">
	<link rel="stylesheet" type="text/css" href="./css/cookie.css">
	<link rel="stylesheet" type="text/css" href="./css/lightbox.css">
	<!-- FONT FOR THE MAINPAGE -->
	<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
	<!-- CANONICAL LINK FOR MAIN PAGE/INDEX -->
	<link rel="canonical" href="https://mgctechtips.netlify.app">
	<title>Electronics Lectures | MGC Tech Tips</title>
```
##### CANONICAL LINK
Only use this for duplicate pages
```html
        <link rel="canonical" href="https://mgctechtips.netlify.app">
```
2. Always change the meta description tag for each individual page you make.
3. Make specific title name also for each page.
4. Always put alt description to your images.
5. Dont forget your Google Analytics Tag.
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165274410-1">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-165274410-1');
    </script>
    <!-- END OF GOOGLE Analytics -- >
```
6. Always use Google Search Console to index your website
7. Put Cookie Banner Code
8. Adding Comment box courtesy of [utteranc.es](https://utteranc.es/)
```html
	<script src="https://utteranc.es/client.js" repo="mikkocaguiat/mikkocaguiat-tech" issue-term="README.md"
                theme="github-light" crossorigin="anonymous" async>
    </script>
```
9. ##### Custom Search Engine Key - AIzaSyDb_pfLQNZ_Qp-u-A-aOmGuyrJlpAIkkb8
   ##### Search Engine ID - 009398583278252516190:oghhihytkoz
10. Trying ElfSight Custom Search Engine which is connected to my CSE in google.
    Install this code anywhere you need it. i prefer putting it in the home page. 
```html
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-edbbf4f1-ab31-4317-bcf8-aa98d69d4337"></div>
```
<hr/>
OFFICIAL COLOR PALLETES AS OF <br/>

###### Sun May 3 04:32:15 CST 2020

1. #0a0a0a - will be used for the background-color
2. #ffffff -  will be used for the text color to contrast the background
3. #5d5a5a3b - for the hover color in the navbar and footer.<!--EDITING THIS SOON IF NOT GOOD FOR THE DESIGN-->
 
---
##### ROBOTS.TXT
```text
			User-agent: *
			Disallow: /images/
			Disallow: /Policy/
			Disallow: /*.md$
			Allow: /images/Support_Banner.png
			Allow: /images/Ads.gif

			Sitemap: https://mgctechtips.netlify.app/sitemap.xml
```

---
JOURNAL

###### Sat May 2 22:41:00 CST 2020

This is my personal journal as I build this website. As i am 
wrting this i have already made my home page yet i still need edit it to fit my preferred design. i have finished the navbar and footer. yet i still need to tweak some parts of it.

###### Sun May 3 01:42:06 CST 2020
I finally added my website to Google Search Console and Google Analytics. At first i dont know how to do this but it work!


###### Sun May 3 02:42:11 CST 2020
I added Google tag manager but i still dont know how to use it.
Side note. No progress in the main page. I am working on the analytics and SEO setup of the page.

###### Sun May 3 03:02:16 CST 2020
Adding Policies, Terms and Conditions etc. in my website. I used [WebsitePolicies](https://www.websitepolicies.com/)
1. Cookie Policy - https://www.websitepolicies.com/policies/view/L28WClvd
2. Disclaimer - https://www.websitepolicies.com/policies/view/qJ2THUyz
3. Privacy Policy - https://www.websitepolicies.com/policies/view/nHm037An
4. Terms and Condition - https://www.websitepolicies.com/policies/view/VsnP6NbW
5. Acceptable Use Policy - https://www.websitepolicies.com/policies/view/WBCyIL9M

###### Sun May 3 06:04:24 CST 2020
Successfully added cookie banner!
I used [Godsont's Cookie Banner Code](https://github.com/Godsont/Cookie-Consent-Banner) big help!

###### Sun May 3 22:42:58 CST 2020
I copied the the policy and i will be making my own web copy of my policies.
All of this will be added to the sitemap of the web site.

###### Sun May 3 23:03:28 CST 2020
Back to the drawing board as I redesign my website using Adobe Xd for a proper guide.
* Font Style for the Banner - [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P?query=code)
* Background photo - https://images.unsplash.com/photo-1553408226-d7bf0d27f9e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80

###### Mon May 4 03:35:43 CST 2020
I finally managed to finish the navbar code. hurrah! I will be editing the footer then lastly the main page.

###### Tue May 5 00:45:54 CST 2020
Finished editing my design for the main page and as of now i am trying to apply it to the index.html file. Cross fingers! Lol.

###### Tue May 5 02:21:55 CST 2020
Adding my font [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P?query=code&selection.family=Press+Start+2P)

###### Tue May 5 03:51:00 CST 2020
Mainpage update. The three sub title introductions are added. Titles are changed to font style Press Start 2P.

###### Tue May 5 23:54:34 CST 2020
Added Search Bar. I still used Custom search Engine by Google but integrated it via Elfsight which added a better design feature that the CSE Vanilla version.

###### Wed May 6 04:45:00 CST 2020
Finished editing Policy Folder and adding valuable meta tags and og-tags

###### Thu May 7 05:27:37 CST 2020
Added Ads bar to the pages and drafted the walkthrough container where lectures, circuits, and projects will be inserted
Finally drafted my about page and sitemap for the whole website

###### Thu May 7 05:29:26 CST 2020
Added robots.txt inorder for my images folder and other non essential files not to be followed and indexed by search engines.





  


